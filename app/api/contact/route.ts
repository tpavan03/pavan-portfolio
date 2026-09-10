import { appendFile, mkdir } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const windowMs = 15 * 60 * 1000;
const attempts = new Map<string, { count: number; expires: number }>();
const maxBodyBytes = 16_384;

export async function POST(request: NextRequest) {
  if (process.env.VERCEL) {
    return NextResponse.json(
      {
        error:
          "Message storage is unavailable on this deployment. Please contact me by email instead.",
      },
      { status: 503 },
    );
  }

  const origin = request.headers.get("origin");
  try {
    if (!origin || new URL(origin).host !== request.headers.get("host")) {
      return NextResponse.json(
        { error: "Please submit this form from this website." },
        { status: 403 },
      );
    }
  } catch {
    return NextResponse.json({ error: "Invalid origin." }, { status: 403 });
  }
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json(
      { error: "Send JSON form data." },
      { status: 415 },
    );
  }

  const now = Date.now();
  for (const [key, value] of attempts)
    if (value.expires <= now) attempts.delete(key);
  const address =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "local";
  const attempt = attempts.get(address) || {
    count: 0,
    expires: now + windowMs,
  };
  if (attempt.count >= 5 || attempts.size >= 10_000) {
    return NextResponse.json(
      { error: "Too many attempts. Please try again in 15 minutes." },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil((attempt.expires - now) / 1000)),
        },
      },
    );
  }
  attempt.count += 1;
  attempts.set(address, attempt);

  let input: Record<string, unknown>;
  try {
    if (Number(request.headers.get("content-length")) > maxBodyBytes) {
      return NextResponse.json(
        { error: "Message is too large." },
        { status: 413 },
      );
    }
    const reader = request.body?.getReader();
    if (!reader) throw new Error("Empty body");
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maxBodyBytes) {
        await reader.cancel();
        return NextResponse.json(
          { error: "Message is too large." },
          { status: 413 },
        );
      }
      chunks.push(value);
    }
    const parsed: unknown = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
      throw new Error("Invalid form");
    input = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }
  // Quietly accept automated submissions without storing them.
  if (input.website) return NextResponse.json({ ok: true });
  const name = typeof input.name === "string" ? input.name.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim() : "";
  const message = typeof input.message === "string" ? input.message.trim() : "";
  if (
    name.length < 2 ||
    name.length > 100 ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    message.length < 10 ||
    message.length > 5000
  ) {
    return NextResponse.json(
      {
        error:
          "Enter a name (2–100 characters), a valid email, and a message (10–5000 characters).",
      },
      { status: 400 },
    );
  }
  try {
    const directory =
      process.env.CONTACT_DATA_DIR || path.join(process.cwd(), ".contact-data");
    await mkdir(directory, { recursive: true, mode: 0o700 });
    await appendFile(
      path.join(directory, "messages.jsonl"),
      JSON.stringify({
        id: randomUUID(),
        createdAt: new Date().toISOString(),
        name,
        email,
        message,
      }) + "\n",
      { encoding: "utf8", mode: 0o600 },
    );
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Unable to save your message. Please try again or use email." },
      { status: 503 },
    );
  }
}
