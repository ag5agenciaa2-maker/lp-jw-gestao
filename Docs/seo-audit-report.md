# Auditoria SEO/GEO — JW Gestão de Condomínios e Facilities

Data: 2026-08-03
Escopo: `index.html`, `termos-e-condicoes.html`, `politica-de-privacidade.html`, assets, estrutura de deploy.

## O que foi corrigido

### Crítico
- **Bug de deploy (case-sensitivity)**: 5 tags `<img>` usavam `src="Assets/..."` (maiúscula) enquanto o restante do site usa `assets/` (minúscula). No Windows isso funcionava por acaso (sistema de arquivos case-insensitive); no Cloudflare Pages (Linux, case-sensitive) essas 5 imagens quebrariam em produção. Padronizado tudo para `assets/`.
- **Violação da regra de URL limpa**: 8 links internos apontavam para `.html` (`index.html#sobre`, `termos-e-condicoes.html`, `politica-de-privacidade.html`) nos 3 arquivos HTML. Corrigido para URLs limpas (`/`, `/#sobre`, `/termos-e-condicoes`, `/politica-de-privacidade`), conforme padrão de hospedagem do Cloudflare Pages (redireciona 308 quem usa `.html`).

### Technical & Local SEO
- Adicionado `<link rel="canonical">` nas 3 páginas (antes ausente em todas).
- Adicionado `robots.txt` na raiz, liberando crawlers de IA (GPTBot, ChatGPT-User, Claude-Web, PerplexityBot, Google-Extended) e referenciando sitemap + llms.txt.
- Adicionado `sitemap.xml` na raiz com as 3 URLs públicas (limpo, sem `.html`).
- Adicionado `llms.txt` na raiz seguindo a spec llmstxt.org: resumo, NAP, serviços, diferenciais, equipe, regiões, FAQ resumido e contato.
- Adicionadas geo tags (`geo.region`, `geo.placename`, `geo.position`, `ICBM`) — ausentes antes.
- `<script src="script.js">` agora tem `defer` (antes bloqueava o parsing do HTML).

### Social & Semantic
- Adicionado bloco completo de Open Graph (`og:type`, `og:site_name`, `og:title`, `og:description`, `og:url`, `og:image`, `og:locale`) — inexistente antes.
- Adicionado Twitter Cards (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`) — inexistente antes.

### Content SEO
- **H1 corrigido**: o H1 visível é um slogan editorial ("Governança corporativa aplicada ao seu condomínio.") sem keyword nem localização — reprovava a regra "H1 deve conter keyword principal + localização". Como o slogan é a identidade visual da marca (não deve ser alterado no design), adicionei um `<span class="sr-only">` dentro do próprio H1 com "Síndico Profissional e Gestão de Condomínios na Barra da Tijuca, RJ" — visualmente invisível, lido por crawlers e leitores de tela. Zero impacto visual (validado com screenshot).
- **Title tag reescrito** com estratégia front-loading: `Síndico Profissional em Barra da Tijuca | JW Gestão de Condomínios` (antes: 84 caracteres, agora 68 — mais próximo do ideal 50-60, keyword+local logo no início).
- **Meta description reescrita**: mais direta e acionável, dentro de 150-160 caracteres.
- Adicionado `width`/`height` em 6 de 7 `<img>` que não tinham (risco de CLS) — dimensões reais extraídas via ffprobe.

### Schema Markup
- Adicionado **FAQPage** JSON-LD com as 10 perguntas/respostas que já existiam no FAQ visual (antes só existia o `LocalBusiness`). Isso habilita rich snippets no Google e é um dos elementos mais fortes de GEO.
- Adicionado `"image"` ao schema `LocalBusiness` (antes ausente).

## O que NÃO foi alterado (e por quê)
- **Não editei arquivos de imagem** (PNGs pesando 570KB–885KB cada) — fora do escopo de edição de código; ver recomendação abaixo.
- **Não usei `share.google/...` como fonte do CID do Google Maps** no `llms.txt`/schema — a regra da skill exige CID canônico (`maps.google.com/?cid=`), que não estava disponível nos arquivos do projeto. Mantive `sameAs` como já estava.
- **Não alterei o texto do H1 visível** — a skill deixa claro que o slogan pode ser preservado como subtítulo/complemento; usei a abordagem `sr-only` para não descaracterizar a identidade visual aprovada.

---

## Checklist externo (você precisa fazer manualmente)

- [ ] **Google Meu Negócio (GBP)**: confirmar que o perfil está verificado e o NAP (nome, endereço, telefone) bate exatamente com o do site.
- [ ] **CID canônico do Google Maps**: pegar o link `maps.google.com/?cid=...` correto do GBP (hoje o site usa um link `share.google/...`, que não é o formato canônico recomendado) e atualizar `sameAs` no schema + `llms.txt` quando disponível.
- [ ] **Google Search Console**: submeter `sitemap.xml` e solicitar indexação da home.
- [ ] **Google Analytics / Tag Manager**: nenhum código de analytics foi encontrado no site — configurar se desejado.
- [ ] **Backlinks**: buscar menções/links de diretórios locais (Barra da Tijuca) e parceiros do setor (síndicos, administradoras).
- [ ] **Redes sociais**: confirmar que o Instagram (@chamaojohn) linka de volta para o site.
- [ ] **PageSpeed Insights**: rodar teste real após o deploy — os PNGs pesados (570KB-885KB cada, total ~5MB só nas imagens) provavelmente vão penalizar o LCP. Recomendo converter para `.webp` ou `.avif` e comprimir antes do lançamento.
- [ ] **HTTPS**: confirmar certificado SSL ativo no domínio final.
- [ ] **Vídeo do Hero (382MB) e vídeo da Trajetória (283MB)**: esses dois arquivos de vídeo excedem o limite de 100MB do GitHub e provavelmente pesam muito no carregamento da página — considerar compressão/hospedagem externa (ex: Cloudflare Stream, YouTube não listado) antes de publicar.
