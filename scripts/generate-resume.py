"""Generate the downloadable resume from the supplied main LaTeX source.
Requires: python3 -m pip install reportlab
"""
import re
from pathlib import Path
from html import escape
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER

root = Path(__file__).resolve().parents[1]
source = (root / 'public/resume.tex').read_text()

def group(text, start):
    assert text[start] == '{'
    depth = 1
    for i in range(start+1, len(text)):
        if text[i] == '{': depth += 1
        elif text[i] == '}': depth -= 1
        if depth == 0: return text[start+1:i], i+1
    raise ValueError('Unclosed TeX group')

def clean(text):
    text = re.sub(r'\\href\{[^}]*\}\{([^}]*)\}', r'\1', text)
    while re.search(r'\\(?:textbf|emph|small)\{', text):
        text = re.sub(r'\\(?:textbf|emph|small)\{([^{}]*)\}', r'\1', text)
    text = text.replace('\\&', '&').replace('\\%', '%').replace('\\_', '_')
    text = text.replace('$|$', '|').replace('---', '—').replace('--', '–').replace('\\quad', ' · ')
    text = text.replace('\\ ', ' ').replace('\\', '').replace('{','').replace('}','')
    return escape(' '.join(text.split()))

body = ParagraphStyle('body', fontName='Helvetica', fontSize=8.2, leading=11.1, textColor=colors.HexColor('#283345'), spaceAfter=4)
heading = ParagraphStyle('section', parent=body, fontName='Helvetica-Bold', fontSize=10, leading=13, textColor=colors.HexColor('#123f46'), spaceBefore=9, spaceAfter=5)
sub = ParagraphStyle('sub', parent=body, fontName='Helvetica-Bold', fontSize=8.5, spaceBefore=4)
bullet = ParagraphStyle('bullet', parent=body, leftIndent=9, firstLineIndent=-7)
flow = [Paragraph('T M V S G Pavan', ParagraphStyle('name', parent=heading, alignment=TA_CENTER, fontSize=20, leading=25, spaceBefore=0)),
        Paragraph('7730886127 · <link href="mailto:thokalapavan.pp@gmail.com">thokalapavan.pp@gmail.com</link><br/><link href="https://www.linkedin.com/in/t-pavan03/">linkedin.com/in/t-pavan03</link> · <link href="https://github.com/tpavan03">github.com/tpavan03</link>', ParagraphStyle('contact', parent=body, alignment=TA_CENTER)), Spacer(1,3)]
text = source[source.index('\\section{Education}'):]
pattern = re.compile(r'\\(section|resumeSubheading|resumeProjectHeading|resumeItem)\s*\{')
pos = 0
while match := pattern.search(text, pos):
    cmd = match.group(1)
    value, pos = group(text, match.end()-1)
    if cmd == 'section':
        flow.append(Paragraph(clean(value).upper(), heading))
        if value == 'Technical Skills':
            end = text.find('\\section{Publications}', pos)
            for item in re.findall(r'\\item (.*?)(?=\\item|\n\})', text[pos:end], re.S):
                flow.append(Paragraph(clean(item), body))
            pos = end
    elif cmd in ['resumeSubheading', 'resumeProjectHeading']:
        values = [value]
        for _ in range(3 if cmd == 'resumeSubheading' else 1):
            start = text.index('{', pos)
            val, pos = group(text, start)
            values.append(val)
        flow.append(Paragraph(clean(values[0]) + '  |  ' + clean(values[1]), sub))
        if len(values) == 4:
            flow.append(Paragraph(clean(values[2]) + '  ·  ' + clean(values[3]), body))
    else:
        flow.append(Paragraph('• ' + clean(value), bullet))

pdf = SimpleDocTemplate(str(root / 'public/resume.pdf'), pagesize=(612,792), rightMargin=35,leftMargin=35,topMargin=29,bottomMargin=29,title='T M V S G Pavan — Resume',author='T M V S G Pavan')
pdf.build(flow)
print(root / 'public/resume.pdf')
