# 18 é Par — instalação

## GitHub Pages
Suba os arquivos do ZIP para a raiz do repositório.

## Supabase
1. Crie um projeto no Supabase.
2. Abra SQL Editor.
3. Cole e rode o conteúdo de `18EPAR_SUPABASE.sql`.
4. No projeto, abra `Connect` e copie:
   - Project URL
   - Publishable key (`sb_publishable_...`)
5. Edite `config.js`:
```js
window.EPAR_CONFIG = {
  SUPABASE_URL: "https://SEU-PROJETO.supabase.co",
  SUPABASE_PUBLISHABLE_KEY: "sb_publishable_..."
};
```
6. Faça commit do `config.js` atualizado e publique no GitHub Pages.

A publishable key é própria para código que roda no navegador. NÃO use Secret key no GitHub.
