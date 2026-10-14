"""Gera cv.docx e cv.pdf a partir do mesmo conteudo.

Layout de coluna unica, sem tabelas, icones ou colunas, para que os
parsers de ATS (sistemas de RH) leiam o texto na ordem correta.
A hierarquia visual vem de tamanho, cor e filetes, nunca de colunas.
Uso: .tools-venv/bin/python build_cv.py
"""

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Cm, Pt, RGBColor
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import cm
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer

# Paleta: azul-noite para texto, violeta da foto do site para destaque.
INK = "#1d2350"
ACCENT = "#4f52c9"
MUTED = "#5b6185"
RULE = "#d9dcf0"

NAME = "Ali Mohamed Khodr"
TITLE = "Software Engineer | Full-stack: Vue, Nuxt, Ruby on Rails, Node.js"
CONTACT = [
    "São José dos Campos, SP",
    "ali.m.khodr@gmail.com",
    "(12) 98859-4305",
    "linkedin.com/in/alimohamedkhodr",
    "github.com/alimkhodr",
]
# Duas linhas de contato, quebradas de proposito para nao cortar um link no meio.
CONTACT_LINES = [
    "  |  ".join(CONTACT[:3]),
    "  |  ".join(CONTACT[3:]),
]

SUMMARY = (
    "Software Engineer full-stack com experiência em construir produtos web do zero até a produção. "
    "Tech lead técnico de um gateway de pagamentos embarcável (Cartão, PIX e Boleto) e de uma área do aluno "
    "multi-tenant. Domínio de Vue, Nuxt, React, Ruby on Rails e Node.js, com prática em Docker, AWS e CI/CD. "
    "Cerca de 170 pull requests no último ano, com 97% de taxa de merge em mais de 20 repositórios."
)

SKILLS = [
    ("Linguagens", "TypeScript, JavaScript, Ruby, Node.js, Python, SQL, C#"),
    ("Frontend", "Vue.js, Nuxt, React, Pinia, Vuex, Tailwind CSS, HTML, CSS"),
    ("Backend e APIs", "Ruby on Rails, Node.js, REST APIs, GraphQL, autenticação OAuth"),
    ("Infraestrutura", "Docker, AWS, CI/CD, GitHub Actions, Linux, Netlify, Vercel"),
    ("Dados", "PostgreSQL, MySQL, SQL Server, Supabase, modelagem relacional, pipelines ETL"),
    ("Domínios", "Pagamentos (gateway embarcável, Cartão, PIX, PIX recorrente, Boleto, reembolso), "
                 "arquitetura multi-tenant, design systems, testes A/B"),
    ("Práticas e ferramentas", "Code review, testes automatizados, Git, monorepos, metodologias ágeis, "
                               "Claude Code"),
]

# Experiencia: cada empresa agrupa seus cargos. Sem termos de estagio.
EXPERIENCE = [
    {
        "company": "Qeevo Group (ex-Quero Educação)",
        "location": "São José dos Campos, SP",
        "roles": [
            {
                "title": "Software Engineer",
                "period": "2025 - atual",
                "bullets": [
                    "Tech lead técnico na construção do zero de um gateway de pagamentos embarcável via iframe "
                    "para parceiros, com fluxos de Cartão, PIX e Boleto, cupons, temas por marca, CI/CD e dockerização "
                    "(cerca de 33 pull requests entre backend e frontend).",
                    "Liderança técnica de uma área do aluno multi-tenant construída do zero: histórico de pagamentos, "
                    "reembolso self-service, validação de chave PIX e localização por tenant.",
                    "Coordenação de um fluxo de reembolso ponta a ponta em mais de 6 repositórios e múltiplos times, "
                    "com reembolso via PIX, fallback automático por e-mail e painel de auditoria.",
                    "Habilitação de PIX recorrente como método de assinatura, do controller no monolito ao modal "
                    "de pagamento no frontend.",
                    "Contribuição ao design system compartilhado da organização, 74 code reviews no período e "
                    "experimentos A/B em cross-sell pós-checkout.",
                ],
                "stack": "Vue, Nuxt, TypeScript, Ruby on Rails, Node.js, Docker, AWS, PostgreSQL, CI/CD",
            },
            {
                "title": "Desenvolvedor Full-stack",
                "period": "2024 - 2025",
                "bullets": [
                    "Desenvolvimento de funcionalidades full-stack em marketplace de educação com múltiplas marcas "
                    "e tenants.",
                    "Reformulação do layout das páginas de pagamento de assinatura e implementação de cross-sell "
                    "multi-oferta no pós-checkout, com controle de estado via cookies.",
                ],
                "stack": "Vue, React, Nuxt, Ruby, AWS, Docker",
            },
        ],
    },
    {
        "company": "APTIV",
        "location": "São José dos Campos, SP",
        "roles": [
            {
                "title": "Desenvolvedor de Ferramentas Internas",
                "period": "2022 - 2024",
                "bullets": [
                    "Desenvolvimento de ferramentas internas e automações de processos industriais, com integração "
                    "a bancos SQL Server em produção.",
                    "Apresentação de projeto interno de três meses para a liderança, com reconhecimento formal.",
                ],
                "stack": "Visual Basic, C#, SQL, React, Node.js, Docker",
            },
        ],
    },
]

EDUCATION = [
    ("Análise e Desenvolvimento de Sistemas", "Universidade do Vale do Paraíba (Univap)",
     "03/2023 - 10/2025", "Concluído"),
    ("Banco de Dados (Tecnólogo)", "Fatec São José dos Campos", "2022 - atual", ""),
    ("Técnico em Desenvolvimento de Sistemas", "ETEC Profª Ilza Nascimento Pintus", "2019 - 2021", ""),
]

LANGUAGES = [
    ("Português", "nativo"),
    ("Inglês", "avançado (C1), leitura, escrita e conversação"),
]


def _rgb(hex_color):
    return RGBColor.from_string(hex_color.lstrip("#"))


def _bottom_border(paragraph, hex_color, size=8):
    """Filete embaixo do paragrafo (usado nos titulos de secao)."""
    p_pr = paragraph._p.get_or_add_pPr()
    borders = OxmlElement("w:pBdr")
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single")
    bottom.set(qn("w:sz"), str(size))
    bottom.set(qn("w:space"), "2")
    bottom.set(qn("w:color"), hex_color.lstrip("#"))
    borders.append(bottom)
    p_pr.append(borders)


def build_docx(path):
    doc = Document()
    for section in doc.sections:
        section.top_margin = section.bottom_margin = Cm(1.6)
        section.left_margin = section.right_margin = Cm(2)

    normal = doc.styles["Normal"]
    normal.font.name = "Calibri"
    normal.font.size = Pt(10.5)
    normal.font.color.rgb = _rgb(INK)
    normal.paragraph_format.space_after = Pt(3)
    normal.paragraph_format.line_spacing = 1.15

    bullet_style = doc.styles["List Bullet"]
    bullet_style.font.size = Pt(10)
    bullet_style.paragraph_format.space_after = Pt(2)

    name_p = doc.add_paragraph()
    name_p.paragraph_format.space_after = Pt(0)
    run = name_p.add_run(NAME)
    run.bold = True
    run.font.size = Pt(24)
    run.font.color.rgb = _rgb(INK)

    title_p = doc.add_paragraph()
    title_p.paragraph_format.space_after = Pt(2)
    t_run = title_p.add_run(TITLE)
    t_run.bold = True
    t_run.font.size = Pt(11)
    t_run.font.color.rgb = _rgb(ACCENT)

    contact_p = doc.add_paragraph()
    contact_p.paragraph_format.space_after = Pt(6)
    for i, line in enumerate(CONTACT_LINES):
        c_run = contact_p.add_run(line)
        c_run.font.size = Pt(9.5)
        c_run.font.color.rgb = _rgb(MUTED)
        if i < len(CONTACT_LINES) - 1:
            c_run.add_break()
    _bottom_border(contact_p, ACCENT, size=12)

    def heading(text):
        h = doc.add_paragraph()
        h.paragraph_format.space_before = Pt(12)
        h.paragraph_format.space_after = Pt(5)
        h.paragraph_format.keep_with_next = True
        r = h.add_run(text.upper())
        r.bold = True
        r.font.size = Pt(10.5)
        r.font.color.rgb = _rgb(ACCENT)
        _bottom_border(h, RULE, size=6)

    def bullet(text):
        doc.add_paragraph(text, style="List Bullet")

    heading("Resumo Profissional")
    doc.add_paragraph(SUMMARY)

    heading("Competências Técnicas")
    for label, items in SKILLS:
        p = doc.add_paragraph()
        p.paragraph_format.space_after = Pt(2)
        lab = p.add_run(f"{label}: ")
        lab.bold = True
        lab.font.color.rgb = _rgb(INK)
        p.add_run(items)

    heading("Experiência Profissional")
    for company in EXPERIENCE:
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(6)
        p.paragraph_format.space_after = Pt(0)
        p.paragraph_format.keep_with_next = True
        c = p.add_run(company["company"])
        c.bold = True
        c.font.size = Pt(11.5)
        p.add_run(f"   {company['location']}").font.color.rgb = _rgb(MUTED)
        for role in company["roles"]:
            r = doc.add_paragraph()
            r.paragraph_format.space_before = Pt(4)
            r.paragraph_format.space_after = Pt(2)
            r.paragraph_format.keep_with_next = True
            t = r.add_run(role["title"])
            t.bold = True
            t.font.color.rgb = _rgb(ACCENT)
            r.add_run(f"   {role['period']}").font.color.rgb = _rgb(MUTED)
            for b in role["bullets"]:
                bullet(b)
            s = doc.add_paragraph()
            s.paragraph_format.space_after = Pt(4)
            st = s.add_run(f"Tecnologias: {role['stack']}")
            st.italic = True
            st.font.size = Pt(9.5)
            st.font.color.rgb = _rgb(MUTED)

    heading("Formação Acadêmica")
    for course, school, period, status in EDUCATION:
        p = doc.add_paragraph()
        p.paragraph_format.space_after = Pt(4)
        p.add_run(course).bold = True
        p.add_run().add_break()
        p.add_run(school)
        meta = f"   {period}" + (f"  |  {status}" if status else "")
        p.add_run(meta).font.color.rgb = _rgb(MUTED)

    heading("Idiomas")
    for lang, level in LANGUAGES:
        p = doc.add_paragraph()
        p.paragraph_format.space_after = Pt(2)
        lab = p.add_run(f"{lang}: ")
        lab.bold = True
        p.add_run(level)

    doc.save(path)


def build_pdf(path):
    base = ParagraphStyle("base", fontName="Helvetica", fontSize=9.5, leading=13,
                          spaceAfter=2, textColor=colors.HexColor(INK))
    name = ParagraphStyle("name", parent=base, fontName="Helvetica-Bold", fontSize=24,
                          leading=28, spaceAfter=2)
    title = ParagraphStyle("title", parent=base, fontName="Helvetica-Bold", fontSize=11,
                           leading=14, textColor=colors.HexColor(ACCENT), spaceAfter=3)
    contact = ParagraphStyle("contact", parent=base, fontSize=9, leading=12,
                             textColor=colors.HexColor(MUTED), spaceAfter=0)
    head = ParagraphStyle("head", parent=base, fontName="Helvetica-Bold", fontSize=10,
                          leading=13, textColor=colors.HexColor(ACCENT), spaceBefore=12, spaceAfter=5)
    company = ParagraphStyle("company", parent=base, fontName="Helvetica-Bold", fontSize=11,
                             leading=14, spaceBefore=6, spaceAfter=0)
    role = ParagraphStyle("role", parent=base, fontName="Helvetica-Bold", fontSize=9.8,
                          leading=13, textColor=colors.HexColor(ACCENT), spaceBefore=4, spaceAfter=2)
    stack = ParagraphStyle("stack", parent=base, fontName="Helvetica-Oblique", fontSize=8.8,
                           leading=12, textColor=colors.HexColor(MUTED), spaceAfter=4)
    bullet = ParagraphStyle("bullet", parent=base, leftIndent=13, bulletIndent=2, spaceAfter=2)

    def esc(t):
        return t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

    def section(text):
        # Titulo de secao com filete abaixo, desenhado pelo flowable HRFlowable.
        return [Paragraph(text.upper(), head), HRFlowable(width="100%", thickness=0.6,
                                                          color=colors.HexColor(RULE), spaceAfter=6)]

    story = [
        Paragraph(NAME, name),
        Paragraph(esc(TITLE), title),
        Paragraph("<br/>".join(esc(line) for line in CONTACT_LINES), contact),
        HRFlowable(width="100%", thickness=1.4, color=colors.HexColor(ACCENT), spaceBefore=6, spaceAfter=2),
    ]

    story += section("Resumo Profissional")
    story.append(Paragraph(esc(SUMMARY), base))

    story += section("Competências Técnicas")
    for label, items in SKILLS:
        story.append(Paragraph(f"<b>{esc(label)}:</b> {esc(items)}", base))

    story += section("Experiência Profissional")
    for co in EXPERIENCE:
        story.append(Paragraph(
            f"{esc(co['company'])}<font size=8.8 color='{MUTED}'>&nbsp;&nbsp;&nbsp;{esc(co['location'])}</font>",
            company))
        for ro in co["roles"]:
            story.append(Paragraph(
                f"{esc(ro['title'])}<font size=8.8 color='{MUTED}'>&nbsp;&nbsp;&nbsp;{esc(ro['period'])}</font>",
                role))
            for b in ro["bullets"]:
                story.append(Paragraph(esc(b), bullet, bulletText="•"))
            story.append(Paragraph(f"Tecnologias: {esc(ro['stack'])}", stack))

    story += section("Formação Acadêmica")
    for course, school, period, status in EDUCATION:
        extra = f"  |  {esc(status)}" if status else ""
        story.append(Paragraph(
            f"<b>{esc(course)}</b><br/>{esc(school)}<font color='{MUTED}'>&nbsp;&nbsp;&nbsp;"
            f"{esc(period)}{extra}</font>", base))
        story.append(Spacer(1, 4))

    story += section("Idiomas")
    for lang, level in LANGUAGES:
        story.append(Paragraph(f"<b>{esc(lang)}:</b> {esc(level)}", base))

    doc = SimpleDocTemplate(path, pagesize=A4, leftMargin=2 * cm, rightMargin=2 * cm,
                            topMargin=1.5 * cm, bottomMargin=1.5 * cm,
                            title=f"CV - {NAME}", author=NAME)
    doc.build(story)


if __name__ == "__main__":
    build_docx("cv.docx")
    build_pdf("cv.pdf")
    print("cv.docx e cv.pdf gerados")
