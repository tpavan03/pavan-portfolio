# Public project evidence

Audited 2026-09-05 through the authenticated GitHub API. These are public repositories owned by `tpavan03`. This is a source review, not a runtime, deployment, authorship, or benchmark validation. Portfolio descriptions should avoid unsupported performance numbers and production claims.

## Recommended project additions

### Phishing Detection — machine learning and explainability

Repository: https://github.com/tpavan03/Phishing-Detection

Suggested description: **Compared phishing URL classifiers using transformer embeddings and engineered features, then explored predictions with SHAP, LIME, and Captum Integrated Gradients.**

Supported technologies: Python, scikit-learn, TensorFlow/Keras, PyTorch, Hugging Face Transformers, SHAP, LIME, Captum.

Evidence:

- [README](https://github.com/tpavan03/Phishing-Detection/blob/HEAD/README.md): decision trees, random forests, neural networks, URL-only versus combined features, accuracy/precision/recall/F1 evaluation.
- [Embedding notebook](https://github.com/tpavan03/Phishing-Detection/blob/HEAD/Phase3CreatingEmbeddings.ipynb): implemented BERT CLS, SBERT, RoBERTa, ALBERT embedding functions and generation calls.
- [Neural network notebook](https://github.com/tpavan03/Phishing-Detection/blob/HEAD/Phase3_NN_with_Features.ipynb): FFNN, SimpleRNN, LSTM builders, dropout, early stopping, F1 callbacks.
- [Captum notebook](https://github.com/tpavan03/Phishing-Detection/blob/HEAD/Captum_Model_Explainability.ipynb): PyTorch model and Integrated Gradients.
- [SHAP/LIME notebook](https://github.com/tpavan03/Phishing-Detection/blob/HEAD/SHAP_LIME_Analysis.ipynb): KernelExplainer and LimeTabularExplainer.

Limitations: notebook research project; no verified deployed API or application. No accuracy or comparative improvement number was independently checked. Imported OpenAI package alone is not evidence of an OpenAI integration.

### Digital Wellbeing Analyzer — on-device machine learning

Repository: https://github.com/tpavan03/digital-wellbeing-analyzer

Suggested description: **Built an Android usage dashboard that transforms screen-time and interaction metrics into on-device TensorFlow Lite predictions and rule-based suggestions.**

Supported technologies: Kotlin, Android, TensorFlow Lite, Material Design, RecyclerView.

Evidence:

- [README](https://github.com/tpavan03/digital-wellbeing-analyzer/blob/HEAD/README.md): daily usage collection and dashboard pipeline.
- [MLPredictor](https://github.com/tpavan03/digital-wellbeing-analyzer/blob/HEAD/app/src/main/java/com/group3/digitalwellbeinganalyzer/MLPredictor.kt): six inputs (screen time, unlocks, night usage share, app switches, zero-app unlocks, session duration), Z-score normalization, local Interpreter inference, threshold override, and templated suggestions.
- [Model asset](https://github.com/tpavan03/digital-wellbeing-analyzer/blob/HEAD/app/src/main/assets/digital_wellbeing_model.tflite): packaged TFLite model.

Limitations: source shows pretrained inference, not training on the phone. The output is a binary probability with heuristic labels/overrides, not an independently validated three-class model. Avoid clinical claims, calibrated-confidence claims, and benchmark numbers.

### BITS Campus Social Network — full-stack and distributed systems

Repository: https://github.com/tpavan03/bits-campus-social-network-main

Suggested description: **Built a campus social platform with posts, polls, follows, and media sharing, backed by Redis timeline caching and event-driven feed fan-out.**

Supported technologies: React, TypeScript, Node.js, Express, Prisma, PostgreSQL, Redis, Kafka/Redpanda, Docker.

Evidence:

- [README](https://github.com/tpavan03/bits-campus-social-network-main/blob/HEAD/README.md): frontend/backend stack and product features.
- [Prisma schema](https://github.com/tpavan03/bits-campus-social-network-main/blob/HEAD/bc/prisma/schema.prisma): PostgreSQL provider, users/posts/follows/polls/notifications/media.
- [Feed service](https://github.com/tpavan03/bits-campus-social-network-main/blob/HEAD/bc/src/modules/feed/feedService.ts): Redis result caching, sorted-set timeline reads, database fallback, cursor pagination.
- [Fan-out consumer](https://github.com/tpavan03/bits-campus-social-network-main/blob/HEAD/bc/src/consumers/postFanoutConsumer.ts): post-created/deleted event handling and follower timeline updates.
- [Prompt filter](https://github.com/tpavan03/bits-campus-social-network-main/blob/HEAD/src/components/input/PromptFilterMenu.tsx): topic dictionary and regex parsing.

Limitations: prompt filtering is implemented through keywords, not an LLM. No evidence reviewed establishes ML recommendations, RAG, user counts, throughput, latency improvements, or a production deployment. CockroachDB is described as optional infrastructure; the checked schema uses PostgreSQL. Source contains a `Posts`/`Tweets` feed-type inconsistency, so do not treat the README's production-ready claim as validated.

### EDF & LA-EDF Scheduler — systems foundations

Repository: https://github.com/tpavan03/rtos-edf-laedf-scheduler

Suggested description: **Implemented deadline-based FreeRTOS task priorities and a C look-ahead EDF simulator with frequency selection and response-time analysis.**

Supported technologies: C, FreeRTOS, scheduling algorithms, simulation.

Evidence:

- [EDF implementation](https://github.com/tpavan03/rtos-edf-laedf-scheduler/blob/HEAD/edf-scheduler/edf_scheduler.c): task registration, absolute deadline updates, nearest-deadline selection, and FreeRTOS priority changes.
- [LA-EDF implementation](https://github.com/tpavan03/rtos-edf-laedf-scheduler/blob/HEAD/la-edf-scheduler/laedf.c): jobs/hyperperiods, frequency levels, look-ahead calculations, preemptions, response jitter, waiting/turnaround metrics, and output files.

Limitations: distinguish the FreeRTOS EDF portion from the standalone LA-EDF simulation. No hardware energy savings or comparative speedup was established.

## Reviewed but not recommended as a featured project

### Kubernetes Secure Image Verifier

Repository: https://github.com/tpavan03/kubernetes-secure-image-verifier-main

The [README](https://github.com/tpavan03/kubernetes-secure-image-verifier-main/blob/HEAD/README.md) describes Python/Flask/Cosign and verification of all pod images. The checked [actual Go controller](https://github.com/tpavan03/kubernetes-secure-image-verifier-main/blob/HEAD/admission_controller/main.go) hashes a hardcoded `nginx:latest` identifier and queries an Ethereum image registry. It does not extract the requested pod images in that handler. Consequently, the README's broad supply-chain security guarantees and stack should not be repeated.

If included, use the narrower description: **Prototyped a Go Kubernetes admission webhook connected to an Ethereum image-trust registry.** Label it a prototype and avoid claims of container-content integrity, Cosign verification, or comprehensive image coverage.

## September 6 upgrade: tested implementations

The limitations above describe the original source audit, before the work below. The upgrades preserve the original projects and add separately documented, runnable implementations on named feature branches. Their demo capabilities are distinct from historical research results.

- **PhishScope:** [tested commit 3549dc3](https://github.com/tpavan03/Phishing-Detection/tree/3549dc35a650a62d07a2c05e4265dedae0cb89e8) adds local conditional analysis, optional request-only VirusTotal URL/domain and Google Safe Browsing agents, unified evidence, persisted review and report export. Eleven Python tests and desktop/mobile browser scenarios passed; paid APIs were mocked. No LLM or trained research classifier is loaded, submitted websites are never fetched, and credentials are never persisted or logged.
- **BITS Social Campus Desk:** [tested commit 7e78059](https://github.com/tpavan03/bits-campus-social-network-main/tree/7e78059616ca8690b88a4821270e5aaecb122568) adds a real Prisma-backed demo identity, seeded fictional campus feed, persisted rule-based moderation cases, and an atomic human-review audit trail. Seven backend tests, four API/browser scenarios, both production builds, and the four-service Docker readiness checks passed. The moderation policy is transparent keyword/regex logic, not an LLM or trained model; the demo data is fictional.
- **Digital Wellbeing — Local Insights:** [tested commit 3ee6502](https://github.com/tpavan03/digital-wellbeing-analyzer/tree/3ee6502fb8599f272953ef3954f811bf02ff0d6f) replaces hardcoded confidence and inaccurate usage accounting with event-interval analysis, personal goals, seven-day exploration, and clearly labeled sample data. Sixteen unit tests, two Android 15 device tests including real bundled LiteRT inference, lint, debug-signature verification, and 16 KiB alignment checks passed. It is a reflective personal tool, not clinical advice or a validated diagnostic model.
- **Image Trust Desk:** [tested commit 982d2ee](https://github.com/tpavan03/kubernetes-secure-image-verifier-main/tree/982d2ee) adds real Ed25519 verification over digest-bound local attestations, evaluation of regular/init/ephemeral containers, AdmissionReview v1 envelopes, a responsive decision dashboard and branch CI. Twelve policy/API tests and browser allow/deny scenarios passed. Its original hardcoded-image limitation is fixed in the separate v2 implementation. It still does not pull image bytes, use Cosign/Rekor, scan vulnerabilities, or enforce policy on a running Kubernetes cluster.

The systems section links to the existing [EDF / LA-EDF simulator](https://github.com/tpavan03/rtos-edf-laedf-scheduler), [kernel audio project](https://github.com/tpavan03/linux-kernel-syscall-audio-controller-main), [NFS protocol simulation](https://github.com/tpavan03/nfs-protocol-sim), and [DiskSim analysis](https://github.com/tpavan03/distributed-systems-disk-scheduling). Their repository documentation was reviewed; no new kernel installation, hardware benchmark or real NFS server deployment is claimed.
