"""Gera cv.docx e cv.pdf a partir do mesmo conteudo.

Layout de coluna unica, sem tabelas, icones ou colunas, para que os
parsers de ATS (sistemas de RH) leiam o texto na ordem correta.
Uso: .tools-venv/bin/python build_cv.py
"""

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Cm, Pt
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import cm
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer

NAME = "Ali Mohamed Khodr"
TITLE = "Software Engineer | Full-stack: Vue, Nuxt, Ruby on Rails, Node.js"
CONTACT = [
    "São José dos Campos, SP",
    "ali.m.khodr@gmail.com",
    "(12) 98859-4305",
    "linkedin.com/in/alimohamedkhodr",
    "github.com/alimkhodr",
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


def build_docx(path):
    doc = Document()
    for section in doc.sections:
        section.top_margin = section.bottom_margin = Cm(1.8)
        section.left_margin = section.right_margin = Cm(2)

    normal = doc.styles["Normal"]
    normal.font.name = "Calibri"
    normal.font.size = Pt(10.5)
    normal.paragraph_format.space_after = Pt(2)

    name_p = doc.add_paragraph()
    name_p.alignment = WD_ALIGN_PARAGRAPH.LEFT
    run = name_p.add_run(NAME)
    run.bold = True
    run.font.size = Pt(20)

    doc.add_paragraph(TITLE).runs[0].bold = True
    doc.add_paragraph(" | ".join(CONTACT))

    def heading(text):
        h = doc.add_heading(text, level=2)
        h.paragraph_format.space_before = Pt(10)
        h.paragraph_format.space_after = Pt(3)

    def bullet(text):
        doc.add_paragraph(text, style="List Bullet")

    heading("Resumo Profissional")
    doc.add_paragraph(SUMMARY)

    heading("Competências Técnicas")
    for label, items in SKILLS:
        p = doc.add_paragraph()
        p.add_run(f"{label}: ").bold = True
        p.add_run(items)

    heading("Experiência Profissional")
    for company in EXPERIENCE:
        p = doc.add_paragraph()
        p.add_run(company["company"]).bold = True
        p.add_run(f" | {company['location']}")
        for role in company["roles"]:
            r = doc.add_paragraph()
            r.add_run(role["title"]).bold = True
            r.add_run(f" | {role['period']}")
            for b in role["bullets"]:
                bullet(b)
            s = doc.add_paragraph()
            s.add_run(f"Tecnologias: {role['stack']}").italic = True

    heading("Formação Acadêmica")
    for course, school, period, status in EDUCATION:
        p = doc.add_paragraph()
        p.add_run(course).bold = True
        p.add_run(f" | {school} | {period}" + (f" | {status}" if status else ""))

    heading("Idiomas")
    for lang, level in LANGUAGES:
        p = doc.add_paragraph()
        p.add_run(f"{lang}: ").bold = True
        p.add_run(level)

    doc.save(path)


def build_pdf(path):
    base = ParagraphStyle("base", fontName="Helvetica", fontSize=9.5, leading=12.5, spaceAfter=2)
    name = ParagraphStyle("name", parent=base, fontName="Helvetica-Bold", fontSize=18, leading=22)
    title = ParagraphStyle("title", parent=base, fontName="Helvetica-Bold", fontSize=10.5)
    head = ParagraphStyle("head", parent=base, fontName="Helvetica-Bold", fontSize=11, leading=14,
                          spaceBefore=9, spaceAfter=3)
    bullet = ParagraphStyle("bullet", parent=base, leftIndent=12, bulletIndent=2)

    def esc(t):
        return t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

    story = [Paragraph(NAME, name), Paragraph(esc(TITLE), title),
             Paragraph(esc(" | ".join(CONTACT)), base)]

    story.append(Paragraph("Resumo Profissional", head))
    story.append(Paragraph(esc(SUMMARY), base))

    story.append(Paragraph("Competências Técnicas", head))
    for label, items in SKILLS:
        story.append(Paragraph(f"<b>{esc(label)}:</b> {esc(items)}", base))

    story.append(Paragraph("Experiência Profissional", head))
    for company in EXPERIENCE:
        story.append(Paragraph(f"<b>{esc(company['company'])}</b> | {esc(company['location'])}", base))
        for role in company["roles"]:
            story.append(Paragraph(f"<b>{esc(role['title'])}</b> | {esc(role['period'])}", base))
            for b in role["bullets"]:
                story.append(Paragraph(esc(b), bullet, bulletText="-"))
            story.append(Paragraph(f"<i>Tecnologias: {esc(role['stack'])}</i>", base))

    story.append(Paragraph("Formação Acadêmica", head))
    for course, school, period, status in EDUCATION:
        extra = f" | {status}" if status else ""
        story.append(Paragraph(f"<b>{esc(course)}</b> | {esc(school)} | {esc(period)}{esc(extra)}", base))

    story.append(Paragraph("Idiomas", head))
    for lang, level in LANGUAGES:
        story.append(Paragraph(f"<b>{esc(lang)}:</b> {esc(level)}", base))

    doc = SimpleDocTemplate(path, pagesize=A4, leftMargin=2 * cm, rightMargin=2 * cm,
                            topMargin=1.6 * cm, bottomMargin=1.6 * cm,
                            title=f"CV - {NAME}", author=NAME)
    doc.build(story)


if __name__ == "__main__":
    build_docx("cv.docx")
    build_pdf("cv.pdf")
    print("cv.docx e cv.pdf gerados")
