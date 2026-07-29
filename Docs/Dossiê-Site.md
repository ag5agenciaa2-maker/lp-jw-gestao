Quero que você crie o Site institucional "Governança Editorial" em 3 arquivos (index.html, style.css e script.js), usando APENAS HTML5 semântico, CSS3 (Flexbox, Grid, variáveis CSS) e JavaScript Vanilla ES6, sem qualquer framework ou biblioteca externa.

REGRA: Use imagens genéricas premium (Unsplash) relacionadas ao nicho caso não haja imagens reais. Inclua URLs diretas das imagens.

IDENTIDADE VISUAL BASE:

Paleta:

--grafite-profundo: #101215 (base / fundo dominante)
--grafite-superficie: #1B1E23 (cards, blocos elevados)
--bronze: #C08A3E (cor primária de marca / acento, links, destaque "AG5")
--bronze-claro: #E3C48D (hover, detalhes finos, bordas)
--areia: #F4F1EA (fundo claro alternado, texto sobre escuro)
--cinza-texto: #8A8F98 (texto secundário)
--verde-indicador: #2F6B52 (uso exclusivo em selos de status/KPI, nunca em títulos)

Tipografia:

Títulos display: Instrument Serif (400 / 400 italic) — Google Fonts
Corpo e UI: Figtree (400 / 500 / 600 / 700) — Google Fonts
Rótulos, numeração, dados e KPIs: JetBrains Mono (400 / 500) — Google Fonts

Estilo: Editorial patrimonial escuro — serifa display de alto contraste sobre grafite profundo, acento bronze usado com parcimônia (linhas de 1px, numeração mono, underline animado), respiro generoso, grid assimétrico. Referência de linguagem: relatório de governança corporativa + revista de arquitetura, não "site de administradora".

Sensação: Autoridade discreta, controle, patrimônio protegido, transparência. Sensação de quem presta contas — não de quem vende.

LAYOUT ESCOLHIDO:

Hero: OPÇÃO C — Editorial tipográfico. Título em Instrument Serif ocupando 8–12vw e ~70% da largura útil, alinhado à esquerda, quebrado em 3 linhas com a última linha recuada e em itálico. Retrato real do fundador em frame vertical pequeno (máx. 260px de largura, ratio 3:4) flutuando à direita, deslocado para baixo da linha de base do título, com moldura de 1px --bronze deslocada 12px em diagonal (offset frame). Acima do título, rótulo em JetBrains Mono uppercase 12px com tracking 0.18em: "SÍNDICO PROFISSIONAL · FACILITIES · BARRA DA TIJUCA". Abaixo, linha de dados horizontal em mono separada por barras verticais finas. Sem imagem de fundo, sem overlay escuro sobre foto. Extraído do padrão de hierarquia tipográfica do Cohen (rótulo curto → H1 grande → subtítulo curto → 2 CTAs) mas invertendo a proporção: no Cohen a foto domina; aqui a tipografia domina.
Serviços: OPÇÃO A — Bento Grid com cards de tamanhos variados. Grid 12 colunas / 4 linhas, gap 16px, 9 blocos com spans desiguais: 2 blocos grandes (span 6×2 e 4×2), 3 médios (span 4×1), 4 pequenos (span 3×1). Cada card: numeração mono 01.–09. no topo esquerdo em --bronze, título Figtree 600, descrição de 1 linha em --cinza-texto revelada só no hover nos cards pequenos. Fundo --grafite-superficie, borda 1px rgba(224,196,141,0.12). Derivado do bloco "Offer / Selection" do Cohen (numeração 01. 02. 03. com títulos curtos) escalado para grid bento.
Depoimentos: OPÇÃO B — Frase poderosa fullscreen (editorial). Seção de 100vh, fundo --areia, texto --grafite-profundo. Uma única declaração institucional em Instrument Serif 5–7vw, centrada verticalmente, com aspas decorativas em --bronze a 14vw e opacidade 0.15 posicionadas atrás do texto. Assinatura abaixo em mono: nome + cargo. ATENÇÃO: não existem avaliações reais do Google disponíveis. NÃO invente depoimentos, nomes ou notas. Use exclusivamente o texto institucional fornecido no dossiê e deixe marcado <!-- BLOCO PENDENTE: substituir por avaliação real do Google quando disponível -->. Não renderizar estrelas, nota média nem logo do Google enquanto não houver dado real.
Sobre/Credenciais: OPÇÃO D — Split 50/50 com imagem fixada. Coluna esquerda 50%: player de vídeo da trajetória do fundador (john_wayne_tragetoria-marciopav.mp4) em position: sticky; top: 12vh, com poster frame, controls, sem autoplay, borda 1px bronze. Coluna direita 50%: texto da história institucional em blocos rolantes separados por linhas horizontais de 1px, cada bloco com um rótulo mono à esquerda (ORIGEM / MÉTODO / ATUAÇÃO / COMPROMISSO). Sem contadores animados — não há números verificados para exibir.

ANIMAÇÕES DO PROJETO (do breakdown Webflow):

Hero H1 (por linha, clip-path wrapper) → de translateY(110%) para translateY(0) em 900ms, easing: cubic-bezier(0.16, 1, 0.3, 1), trigger: load, stagger: sim (120ms entre linhas)
Hero rótulo mono → de opacity: 0 para opacity: 1 em 500ms, easing: ease-out, trigger: load com delay 200ms, stagger: não
Hero frame do retrato → de opacity:0, scale(1.06), translateY(24px) para opacity:1, scale(1), translateY(0) em 1100ms, easing: cubic-bezier(0.22, 1, 0.36, 1), trigger: load com delay 500ms, stagger: não
Moldura offset bronze do retrato → de translate(0,0) para translate(12px,12px) em 700ms, easing: cubic-bezier(0.65,0,0.35,1), trigger: load com delay 900ms
Navbar → de background: transparent; padding-block: 28px para background: rgba(16,18,21,0.88); backdrop-filter: blur(14px); padding-block: 14px; border-bottom: 1px solid rgba(224,196,141,0.14) em 320ms, easing: ease, trigger: scroll > 80px
Links da nav (hover) → underline pseudo-elemento de scaleX(0) para scaleX(1) em 280ms, easing: cubic-bezier(0.4,0,0.2,1), transform-origin: left, trigger: hover
Cards do bento (serviços) → de opacity:0, translateY(40px) para opacity:1, translateY(0) em 620ms, easing: cubic-bezier(0.16,1,0.3,1), trigger: scroll (IntersectionObserver, threshold 0.18), stagger: sim (70ms por card, ordem de leitura do grid)
Card bento (hover) → de border-color: rgba(224,196,141,0.12); translateY(0) para border-color: #C08A3E; translateY(-4px) em 300ms, easing: ease-out, trigger: hover
Numeração mono do card (hover) → de color: #C08A3E; opacity:0.7 para color:#E3C48D; opacity:1 em 300ms, trigger: hover
Divisores horizontais de seção (linha 1px) → de scaleX(0) para scaleX(1) em 900ms, easing: cubic-bezier(0.83,0,0.17,1), transform-origin: left, trigger: scroll, stagger: não
Seção de vídeos verticais → cada card de opacity:0, translateY(56px), rotate(1.5deg) para opacity:1, translateY(0), rotate(0) em 700ms, easing: cubic-bezier(0.16,1,0.3,1), trigger: scroll, stagger: sim (90ms)
Frase editorial dos depoimentos → de opacity:0, translateY(30px) para opacity:1, translateY(0) em 800ms, easing: ease-out, trigger: scroll (threshold 0.4), stagger: não
Aspas decorativas → parallax leve de translateY(0) para translateY(-40px) ao longo da seção, via IntersectionObserver + requestAnimationFrame com progresso normalizado, easing: linear
Blocos de texto do Sobre → de opacity:0, translateX(24px) para opacity:1, translateX(0) em 600ms, easing: cubic-bezier(0.16,1,0.3,1), trigger: scroll, stagger: sim (110ms)
Barra marquee horizontal → translateX(0) para translateX(-50%) em 32000ms, easing: linear, animation-iteration-count: infinite, trigger: load, pausa no hover
Itens do FAQ (abertura) → max-height de 0 para scrollHeightpx + ícone + rotacionando 0deg → 45deg em 380ms, easing: cubic-bezier(0.4,0,0.2,1), trigger: click
Botões primários (hover) → preenchimento de fundo pseudo-elemento de scaleY(0) para scaleY(1) com transform-origin: bottom em 340ms, easing: cubic-bezier(0.65,0,0.35,1), texto muda de --areia para --grafite-profundo, trigger: hover
Todas as animações de scroll devem ser desativadas dentro de @media (prefers-reduced-motion: reduce) (elementos entram em estado final imediatamente)

SEÇÕES OBRIGATÓRIAS (na ordem):

Navbar
Hero [Editorial tipográfico — opção C]
Barra marquee horizontal animada: SÍNDICO PROFISSIONAL · GESTÃO OPERACIONAL · FACILITIES · MANUTENÇÃO PREDIAL · GESTÃO DE OBRAS · BARRA DA TIJUCA · RIO DE JANEIRO
Seção de alto impacto: dor e solução do público-alvo (condomínios de alto padrão com administração amadora, custos sem controle, manutenção reativa, conflitos e falta de prestação de contas → gestão profissional por processos e indicadores)
Serviços [Bento Grid — opção A, 9 blocos]
Seção de encantamento: imagens de resultado/segurança/pessoas (áreas comuns, portaria, manutenção preventiva, assembleia — Unsplash premium, tratamento escuro e desaturado, sem stock genérico de aperto de mão)
Sobre/Credenciais [Split 50/50 com vídeo fixado — opção D]
Seção de nicho — "Gestão na prática": parede de 5 vídeos verticais (ratio 9:16) em scroll horizontal com snap, cada card com título real do conteúdo e link para o reel original no Instagram. Vídeos com preload="none", playsinline, muted, play ao clique.
Depoimentos [Frase editorial fullscreen — opção B, com bloco marcado como pendente]
FAQ (20 perguntas reais fornecidas, acordeão)
Localização: endereço + iframe do mapa (usar o código fornecido verbatim) + botão "Como Chegar" + contatos e redes sociais
CTA com formulário ao lado (nome, condomínio, nº de unidades, telefone/WhatsApp, mensagem)
Rodapé + Créditos

RODAPÉ — coluna de contato (com ícones, todos clicáveis):

Nome → https://share.google/YadlORS5SsAcujL6U
Endereço → link de rota Google Maps (URL longa fornecida no dossiê)
Telefone/WhatsApp → (21) 97059-0248 → tel:+5521970590248 e https://wa.me/5521970590248
Instagram → https://www.instagram.com/chamaojohn/

CRÉDITOS:

Esquerda: © JW Gestão de Condomínios e Facilities 2026
Direita: Desenvolvido por AG5 Agência (AG5 em destaque na cor --bronze 
#C08A3E, link para www.ag5agencia.com.br)

DIRETRIZES ANTI-GENÉRICO:

Sem hero centralizado com fundo escuro e texto branco genérico
Sem fade-up igual em todas as seções
Sem paleta azul + branco + cinza (proibição reforçada: azul corporativo é o clichê absoluto do nicho de administração condominial — zero azul no projeto)
Sem 3 colunas de ícone + título + texto
Sem foto de aperto de mão, sem foto de família feliz recebendo chave, sem foto de prédio com céu azul e lens flare, sem ícone de casinha estilizada
Sem badge falso de "anos de mercado", "condomínios atendidos" ou nota de avaliação — nenhum número foi verificado
Sem selo/estrelas do Google enquanto não houver avaliação real
Sem gradiente azul-para-ciano em qualquer elemento
Sem ícones genéricos de biblioteca em cards de serviço: usar apenas numeração mono e tipografia

QUALIDADE DE CÓDIGO:

HTML semântico + IDs de ancoragem em todas as seções
Variáveis CSS no :root para cores, fontes e espaçamentos
Mobile-first com media queries em 480 / 768 / 1024 / 1280px
IntersectionObserver para animações de scroll (nunca scroll event direto)
will-change: transform, @media (prefers-reduced-motion: reduce), loading="lazy" em imagens e preload="none" em vídeos
Formulário com validação real (regex de telefone BR, campos obrigatórios, mensagens de erro inline) e serialização para WhatsApp
JSON-LD LocalBusiness com nome, endereço, telefone, horário, coordenadas -22.99893180, -43.35366390 e sameAs do Instagram

OPCIONAL (aplicar):

Barra animada horizontal: nome / serviços / área de atendimento → SIM (item 3)
Seção de avaliações Google com logo oficial e cards animados → NÃO APLICAR (não há avaliações reais; aplicar somente após entrega do cliente)
1 — MÍDIAS PRINCIPAIS
Tipo	Status	Arquivo
Foto da fachada	❌ Ausente	—
Fotos internas (escritório)	❌ Ausente	—
Fotos da equipe	❌ Ausente	—
Foto do proprietário	✅ 1 unidade	SaveClip_App_449694533_...n.jpg — retrato de estúdio, fundo grafite neutro, camiseta preta, enquadramento 1:1, alta qualidade
Logo	❌ Ausente	—
Print do Instagram	✅ Referência	Print-Instagram.png (apoio, não uso em site)

Vídeos — 6 declarados:

#	Título informado	Arquivo local	Link Instagram
1	Trajetória do John Wayne	john_wayne_tragetoria-marciopav.mp4 (283 MB)	—
2	Uber pode entrar no condomínio	não identificado	instagram.com/reel/DZpbK4-hi_Q/
3	Muitos problemas condominiais poderiam ser evitados com orientação jurídica preventiva	não identificado	instagram.com/reel/DZmyh0MREW-/
4	Toda grande trajetória na gestão condominial começa com um primeiro passo	não identificado	instagram.com/reel/DZKcZHnhtNr/
5	Gestão condominial começa pelos valores de quem a conduz?	não identificado	instagram.com/reel/DZH8pBQRZqi/
6	Manutenção preventiva do condomínio	não identificado	instagram.com/reel/DZFcOzdxiaZ/

⚠️ Foram enviados apenas 4 arquivos SAVECL_1.MP4 a SAVECL_4.MP4 para 5 reels listados. Falta 1 arquivo e falta o mapeamento arquivo → título. Vai para o checklist.

Direcionamento de seções conforme quantidade de mídia (1 foto + 6 vídeos):

1 foto real → Hero (frame flutuante do fundador). Não reutilizar em outras seções.
1 vídeo longo (trajetória) → Seção Sobre, em coluna sticky.
5 vídeos curtos → Seção dedicada "Gestão na prática", scroll horizontal com snap, formato vertical 9:16.
Todas as demais imagens (dor/solução, encantamento, localização) → Unsplash premium com tratamento escuro/desaturado.
Não criar galeria de resultados nem grid de equipe — não há mídia para sustentar.
2 — INFORMAÇÕES DA EMPRESA

Nome: JW Gestão de Condomínios e Facilities
Nicho: Gestão Integrada de Condomínios e Facilities / Síndico Profissional
Data de abertura: 25/04/2023
Descrição institucional: Empresa especializada em gestão de condomínios residenciais e comerciais, oferecendo serviços de síndico profissional, gestão operacional, administrativa, financeira, manutenção predial, gestão de contratos e facilities, com foco em eficiência, transparência e valorização do patrimônio.
Proposta de valor: Gestão condominial conduzida com práticas de governança corporativa — processos documentados, indicadores de desempenho e prestação de contas transparente.
Público-alvo: Condomínios de alto padrão na Barra da Tijuca.

Principais serviços (9 declarados como principais):
Síndico Profissional · Gestão Administrativa · Gestão Financeira · Gestão Operacional · Gestão de Manutenção · Gestão de Contratos · Gestão de Obras · Gestão de Fornecedores · Facilities

Escopo completo declarado (24 serviços): os 9 acima + Planejamento Orçamentário · Redução de Custos · Compliance Condominial · Gestão de Pessoas · Mediação de Conflitos · Atendimento ao Morador · Organização de Assembleias · Gestão de Indicadores (KPIs) · Auditoria Operacional · Implantação de Processos · Gestão de Riscos · Consultoria para Condomínios · Comunicação Institucional · Acompanhamento Jurídico · Gestão de Seguros

Diferenciais declarados:

Gestão baseada em indicadores de desempenho (KPIs)
Processos operacionais padronizados e documentados
Avaliação contínua de fornecedores e prestadores de serviços
Transparência na prestação de contas e na comunicação
Forte atuação em manutenção preventiva para redução de custos futuros
Gestão integrada de facilities
Foco na valorização do patrimônio, segurança e qualidade de vida
Atendimento próximo, ágil e orientado à solução

História: Nasceu da experiência prática do fundador, John Wayne, que construiu carreira em grandes instituições financeiras antes de direcionar sua trajetória para a gestão condominial. Ao identificar desafios recorrentes de administração, manutenção, gestão de equipes e controle de fornecedores, decidiu criar uma empresa capaz de aproximar a administração condominial das melhores práticas de governança do ambiente corporativo. Desde a fundação atua na administração de condomínios residenciais de grande porte, tendo desenvolvido processos próprios, manuais operacionais, indicadores de desempenho, sistemas de avaliação de fornecedores e metodologias de acompanhamento de manutenção, atendimento, compras, segurança e operação diária.

Contato

Telefone: (21) 97059-0248
WhatsApp: (21) 97059-0248
E-mail: ❌ não informado
Endereço: Av. das Américas, 4200 — Bl. 1, sala 305 — Barra da Tijuca, Rio de Janeiro — RJ, 22640-907
Coordenadas: -22.99893180, -43.35366390
Cidade/Estado: Rio de Janeiro — RJ
Área de abrangência: Barra da Tijuca (atuação concentrada no Estado do Rio de Janeiro)
Horário: Seg. a Sex. 9h–18h · Sáb., Dom. e Feriados: Fechado

Links

Site atual: www.jwcondominios.com.br (informado pelo cliente; não localizei indexação pública — verificar se está no ar)
Instagram: https://www.instagram.com/chamaojohn/ — @chamaojohn · John Wayne · 131 posts · 782 seguidores
Facebook / LinkedIn / YouTube: ❌ não informados
Google Business: https://share.google/YadlORS5SsAcujL6U
Place ID: ChIJRS7CiM7bmwARhs41HgmHkKU · CID: 11930183886135742086
Rota Google Maps: URL longa fornecida no formulário (usar verbatim no botão "Como Chegar")
Iframe do mapa: fornecido — usar verbatim
Tour virtual: ❌ não tem
Link de avaliação: ❌ não tem (gerar via superchat.com/pt/tools/google-review-link-generator)

Documentação

CNPJ: ❌ não informado
Registro profissional (ex.: certificação de síndico profissional / CRA / curso reconhecido): ❌ não informado
Autorização de uso de imagem das redes sociais: ✅ SIM

Quantidade de mídia: 1 foto (sem logo) · 6 vídeos

3 — AVALIAÇÕES

Plataforma: Google Business Profile
Total de avaliações: 1 registrada pela extensão PlePer Local
Nota média: o campo retornado pela extensão é Rating 1 — valor ambíguo (pode ser contagem, não nota). Não confirmado.
Texto das avaliações: ❌ nenhum texto disponível. O cliente informou textualmente: "Não tem Avaliação do google relevante".

Listagem por ordem decrescente de estrelas: não aplicável — nenhuma avaliação com nome, data e texto foi fornecida.

⛔ Instrução ao agente construtor: não gerar, inferir, adaptar ou "inspirar-se" em depoimentos. Não exibir estrelas, nota média, contador de avaliações ou logo do Google. A seção de depoimentos deve ser construída no formato editorial (frase institucional própria) e conter comentário HTML sinalizando o bloco pendente.

4 — ANÁLISE DE BRANDING

Nicho: Gestão condominial profissional e facilities — B2B de decisão coletiva (assembleia), ciclo longo, alto valor de contrato.

Posicionamento: Premium. Público declarado é condomínio de alto padrão na Barra da Tijuca. O contrato é aprovado em assembleia por moradores de renda alta — o site não vende para um consumidor impulsivo, ele credencia um profissional diante de um conselho. A leitura precisa ser de sobriedade institucional, não de captação promocional.

Estilo visual predominante recomendado: Editorial institucional escuro (cruzamento de minimalismo elegante com luxury branding corporativo). Tipografia serifada de display como principal elemento gráfico, acento metálico usado em quantidade mínima, ausência total de ilustração e de ícone decorativo.

Paleta recomendada (hex):

Papel	Hex	Uso
Base	
#101215	Fundo dominante do site
Superfície	
#1B1E23	Cards, blocos elevados, navbar sólida
Primária de marca	
#C08A3E	Acento bronze — numeração, linhas, links, "AG5" no rodapé
Primária clara	
#E3C48D	Hover, bordas finas, detalhes
Neutro claro	
#F4F1EA	Seções invertidas, texto sobre escuro
Texto secundário	
#8A8F98	Descrições, legendas
Indicador	
#2F6B52	Exclusivo para selos de status/KPI

Justificativa: sem logo, a cor precisa vir do posicionamento. O bronze/champanhe é o oposto exato do azul-corporativo que satura o nicho de administração condominial e comunica patrimônio, durabilidade e discrição — atributos centrais do serviço (valorização do patrimônio, gestão de longo prazo). O grafite profundo dialoga com a única foto real disponível (retrato em fundo de estúdio escuro), garantindo integração visual entre a peça real e o layout.

Direção estética: Grid assimétrico, respiro alto (seções com 120–180px de padding vertical no desktop), linhas divisórias de 1px como principal elemento gráfico, numeração e rótulos em monoespaçada para transmitir controle e mensuração, fotografia sempre em tratamento escuro e desaturado. Zero gradiente, zero sombra difusa colorida, zero ilustração vetorial.

Sensação de marca: Autoridade discreta · Controle · Patrimônio protegido · Prestação de contas · Longevidade.

Referências premium do mesmo nicho / adjacências: JLL, CBRE e Cushman & Wakefield (property & facility management global — sobriedade tipográfica, dados como elemento visual); Sodexo e ISS Facility Services (facilities corporativo); Cyrela e Mitre Realty (patrimônio de alto padrão no Brasil — uso de serifa editorial e paleta terrosa/metálica).

5 — CHECKLIST DE PENDÊNCIAS

Mídias

 Logo da empresa (vetor ou PNG alta resolução) — sem ela a paleta é recomendação, não extração
 Foto da fachada / entrada do escritório (Av. das Américas, 4200)
 Fotos internas do escritório
 Fotos da equipe (individuais)
 Fotos de condomínios sob gestão (áreas comuns, portaria, manutenção) — com autorização
 Fotos de assembleia / reunião de conselho
 1 arquivo de vídeo faltando — foram enviados 4 (SAVECL_1 a SAVECL_4) para 5 reels listados
 Mapeamento arquivo → título dos vídeos SAVECL (qual arquivo corresponde a qual tema)
 Poster frame / thumbnail do vídeo de trajetória
 Confirmar se o arquivo de trajetória (283 MB) pode ser comprimido ou substituído por link do YouTube

Contatos e links

 E-mail institucional (não informado)
 Confirmar se www.jwcondominios.com.br está no ar e se o site novo substituirá ou usará esse domínio
 Confirmar telefone fixo, se houver (só há celular)
 LinkedIn da empresa ou do fundador (relevante para B2B premium)
 Facebook / YouTube, se existirem
 Corrigir o campo "Website" do Google Business — hoje aponta para o Instagram, não para o site

Avaliações

 Textos reais de avaliações do Google com nome, data e nota — bloqueia a seção de depoimentos
 Gerar link direto de avaliação e iniciar campanha de coleta com condomínios atendidos
 Confirmar a nota real do perfil (o dado Rating 1 retornado é ambíguo)

Documentação e credenciais

 CNPJ
 Certificação / curso de síndico profissional, se houver
 Registro de corretor de seguros (SUSEP) — o Instagram menciona a atividade; confirmar se entra no site
 Número de condomínios sob gestão / unidades administradas — necessário para qualquer contador ou dado numérico
 Nomes de condomínios que autorizem citação (cases)
 Confirmar razão social completa para os créditos do rodapé

Interno AG5

 Anexar BASE_CONHECIMENTO_AG5.md — sem ele não há checagem de diferenciação contra sites já entregues no nicho
6 — ANÁLISE DE REFERÊNCIAS WEBFLOW

Templates localizados pela busca do nicho property management, com preview ao vivo acessado e página Home analisada. Um terceiro candidato (homura.webflow.io, real estate single-page) bloqueia acesso automatizado — descartado, não retentado.

TEMPLATE 1 — Cohen (Metrik Studio)

Preview: https://cohen-real-estate-template.webflow.io/ · Home analisada: /home-1
Marketplace: https://webflow.com/templates/html/cohen

HERO: Proporção ~50/50 vertical — bloco de texto ocupa o terço superior esquerdo, imagem larga full-bleed ocupa a metade inferior. Rótulo curto ("Real Estate") em caixa pequena acima do H1, H1 em duas palavras-chave, subtítulo de uma linha, dois CTAs lado a lado (primário sólido "Explore" + secundário outline "Consultation"). Elemento diferenciador: faixa de 4 KPIs imediatamente abaixo do hero (+12 / +15 / 99% / +700) funcionando como prova social antes de qualquer scroll. Entrada: rótulo → H1 → subtítulo → botões → imagem, em cascata.
NAV: Barra superior fina com endereço do escritório + links secundários (Expertise / Lifestyle / Cities / States) que colapsa ao rolar; nav principal fica sticky sólida. Hover dos links: underline que cresce da esquerda. Ícone de busca abre overlay fullscreen.
TIPOGRAFIA: Serifa de peso médio para H1/H2 (títulos curtos, 1–3 palavras: "Company", "Selection", "Agents"), sans neutra para corpo. H1 ~4.5–5.5rem desktop; H2 ~3rem; corpo 1rem/1.6. Uso criativo: títulos deliberadamente monolexicais com o parágrafo explicativo carregando toda a informação — cria hierarquia forte com pouca tipografia.
CORES (aplicar as do branding JW): base 
#101215, superfície 
#1B1E23, acento 
#C08A3E, hover 
#E3C48D, invertido 
#F4F1EA, secundário 
#8A8F98.
SERVIÇOS/CARDS: Grid de 3 colunas, cada card com numeração 01. 02. 03. acima do título, título em H2, imagem retangular abaixo com ratio ~4:3, link "Service" discreto. Gap ~24px. Padrão repetido em dois blocos ("Offer/Selection" e "Trustworthy/Agents") com listas numeradas de 3 itens cada, sem ícones.
ANIMAÇÕES:
H1 → de translateY(100%) (mascarado) para translateY(0) em ~800ms, easing cubic-bezier(0.16,1,0.3,1), trigger: load, stagger: sim
Imagem do hero → de scale(1.08) para scale(1) em ~1200ms, easing ease-out, trigger: load, stagger: não
KPIs → contador numérico de 0 ao valor final em ~1500ms, easing ease-out, trigger: scroll, stagger: sim (100ms)
Cards de serviço → de opacity:0, translateY(48px) para opacity:1, translateY(0) em ~600ms, easing ease-out, trigger: scroll, stagger: sim
Cards de imóvel/agente → imagem de scale(1) para scale(1.05) em 500ms, easing ease, trigger: hover
Marquee "Real ⌂ Estate ⌂ Real ⌂ Estate" → translateX(0) para translateX(-50%) em ~25000ms, linear, infinito, trigger: load
MICRO-INTERAÇÕES: Botões com preenchimento que sobe de baixo no hover; cards de propriedade elevam levemente e revelam o link "Details"; setas circulares que rotacionam no hover; overlay de busca com fade + blur.
ELEMENTOS DECORATIVOS: Ícone de casinha usado como separador dentro do marquee (não como ícone de serviço); linhas divisórias finas entre blocos; ausência de blobs, formas orgânicas ou texturas.
RESUMO CONSTRUTIVO: Para recriar: monte cada seção com um rótulo curto em caixa pequena, um título de 1–3 palavras em serifa grande e um parágrafo explicativo curto — nunca título longo. Numere itens com 01. em vez de usar ícones. Use uma faixa de dados logo abaixo do hero como âncora de credibilidade. Reserve todo o movimento para revelações de máscara vertical no título e cascata suave nos cards; nada de fade genérico uniforme. O marquee entre seções serve como respiro rítmico, não como decoração.
TEMPLATE 2 — Property X (BRIX Templates)

Preview: https://propertytemplates.webflow.io/ · Home analisada: /home-pages/home-v2
Marketplace: https://webflow.com/templates/html/propertyx-real-estate-website-template

HERO: Split ~55/45 — texto à esquerda (H1 em três linhas + parágrafo de apoio + dois CTAs), imagem principal à direita com segunda imagem menor flutuando sobrepondo o canto inferior esquerdo da primeira (float image), criando profundidade em camadas. Elemento diferenciador: faixa "As seen on" com 6 logos monocromáticos imediatamente abaixo do hero. Entrada: H1 → parágrafo → CTAs → imagem principal → imagem flutuante (última, com delay maior).
NAV: Header com logo à esquerda, links centrais e CTA sólido à direita; menu "Pages" abre mega-dropdown em 3 colunas. Ao rolar, o header ganha fundo sólido e sombra sutil. Hover: cor do link transiciona para o acento.
TIPOGRAFIA: Sans geométrica em todo o site. H1 ~4rem, H2 ~2.75rem, rótulo de seção ~0.875rem uppercase acompanhado de ícone SVG circular à esquerda. Corpo 1rem/1.7. Uso criativo: cada seção abre com o par ícone + rótulo, criando ritmo previsível de leitura.
CORES (aplicar as do branding JW): mesmas variáveis do Template 1 — nenhuma cor do template original deve ser transportada.
SERVIÇOS/CARDS: Bloco "Our process" em 3 colunas com numeração grande 01 02 03 e imagem abaixo de cada passo. Cards de imóvel em grid 3×3 com carrossel horizontal, cada card contendo badge de status, título, endereço com ícone e linha de 4 metadados em ícone+valor. Gap ~24px, cantos arredondados ~12px.
ANIMAÇÕES:
H1 → de opacity:0, translateY(30px) para opacity:1, translateY(0) em ~700ms, easing ease-out, trigger: load, stagger: sim (linha a linha)
Imagem flutuante do hero → de opacity:0, translateY(40px), scale(0.95) para estado final em ~900ms, easing cubic-bezier(0.22,1,0.36,1), trigger: load com delay ~600ms
Faixa de logos → translateX contínuo em loop lento, linear, infinito, trigger: load
Trio de imagens da missão → entrada sequencial de opacity:0, scale(0.94) para opacity:1, scale(1) em ~650ms, easing ease-out, trigger: scroll, stagger: sim (150ms)
Cards de propriedade → carrossel com translateX por slide em ~500ms, easing cubic-bezier(0.4,0,0.2,1), trigger: click nas setas
Card (hover) → translateY(-6px) + sombra em 300ms, easing ease-out
Depoimentos → avatares circulares posicionados ao redor de uma imagem central, cada balão de citação entrando com opacity:0 → 1 e scale(0.9) → 1 em ~500ms, trigger: scroll, stagger: sim
MICRO-INTERAÇÕES: Setas do carrossel com fundo que inverte no hover; badges "For rent / For sale" com leve mudança de cor; campos de newsletter com borda que muda de cor no focus; botões com ícone de seta que desliza para a direita no hover.
ELEMENTOS DECORATIVOS: Ícones SVG circulares como marcadores de rótulo de seção; imagem flutuante sobreposta em dois pontos da página (hero e bloco "About us"); cartões de metadado sobrepostos à imagem no bloco "Why us"; sem texturas ou blobs.
RESUMO CONSTRUTIVO: Para recriar: use sobreposição de duas imagens em profundidade sempre que houver mídia real disponível — é o recurso que dá dimensão ao layout sem custo de animação. Marque toda abertura de seção com o par rótulo + marcador visual consistente. Numere processos com dígitos grandes em vez de ícones. Distribua depoimentos como constelação em torno de um elemento central em vez de carrossel linear. Mantenha os hovers curtos (≤300ms) e reserve as entradas longas (≥700ms) para o hero.

Nota de aplicação para o projeto JW: o Template 1 fornece a arquitetura de hierarquia tipográfica (rótulo → título curto → parágrafo → numeração) e o marquee; o Template 2 fornece a técnica de sobreposição de mídia em camadas (frame flutuante do retrato no hero) e a coluna sticky. Nenhuma cor, imagem ou texto dos templates deve ser transportada — apenas estrutura, proporção e comportamento de animação.

7 — SISTEMA DE VARIAÇÃO DE LAYOUT — ESCOLHAS REGISTRADAS
Categoria	Escolha	Código	Justificativa
HERO	C) Editorial — tipografia 8–12vw dominando ~70% da tela, imagem pequena floating	HERO-C	Só existe 1 foto real. Um hero fullscreen ou de vídeo exigiria mídia que não temos ou forçaria stock genérico. A tipografia editorial carrega a página sozinha e é o formato mais alinhado ao posicionamento premium/institucional. Evita HERO-D (vídeo loop), já usado no portfólio.
SERVIÇOS	A) Bento Grid com cards de tamanhos variados	SERV-A	9 serviços principais com pesos diferentes se acomodam naturalmente em spans desiguais. Evita deliberadamente SERV-F (numeração grande), que é a escolha mais repetida do portfólio AG5.
DEPOIMENTOS	B) Frase poderosa fullscreen (editorial)	DEPO-B	Escolha imposta pela ausência de avaliações reais. É o único formato que funciona com uma declaração institucional própria sem simular prova social inexistente. Evita DEPO-A e DEPO-E, já usados.
SOBRE/CREDENCIAIS	D) Split 50/50 com imagem fixada	SOBRE-D	A coluna sticky abriga o vídeo de trajetória (a peça de mídia mais forte do cliente) enquanto o texto institucional rola ao lado. Descartei SOBRE-A (counters) porque não há um único número verificado; descartei SOBRE-E (grid de equipe) porque não há fotos de equipe.

Combinação registrada: HERO-C · SERV-A · DEPO-B · SOBRE-D
⚠️ Combinação não validada contra a base de conhecimento — BASE_CONHECIMENTO_AG5.md ausente nesta sessão.