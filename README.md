# Design System — v1.0

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse: http://localhost:3000

---

## Como adicionar sua fonte PiePie

1. Coloque os arquivos da fonte em `/public/fonts/`
   - `PiePie.woff2` (preferido)
   - `PiePie.woff` (fallback)

2. Abra `app/globals.css` e descomente o bloco `@font-face`:

```css
@font-face {
  font-family: 'PiePie';
  src: url('/fonts/PiePie.woff2') format('woff2'),
       url('/fonts/PiePie.woff')  format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

3. Pronto. A variável `--font-display: 'PiePie', Georgia, serif` já está configurada.

---

## Deploy no Vercel

1. Suba o projeto para um repositório no GitHub
2. Acesse vercel.com → "New Project"
3. Conecte o repositório
4. Clique em "Deploy" — nenhuma configuração extra necessária

---

## Estrutura do projeto

```
design-system/
├── app/
│   ├── globals.css          ← tokens de cor, fontes, reset
│   ├── layout.tsx           ← layout raiz
│   ├── page.tsx             ← redirect para /design-system
│   └── design-system/
│       ├── page.tsx         ← toda a página do design system
│       └── page.module.css  ← estilos da página
├── public/
│   └── fonts/               ← coloque sua fonte PiePie aqui
├── package.json
└── next.config.js
```
