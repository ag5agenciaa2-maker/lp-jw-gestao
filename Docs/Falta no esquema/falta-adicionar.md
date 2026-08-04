# 📋 Falta Adicionar no Schema
**Empresa:** Síndico Profissional Barra da Tijuca RJ - JW Gestão de Condomínios e Facilities | Administração Condominial | Facilities
**Data de geração:** 03/08/2026

---

## 🔴 CRÍTICOS — Impactam SEO diretamente

- [ ] `email` — Não encontrado em nenhuma fonte (site nem arquivo de raiz).

## 🟡 IMPORTANTES

- [ ] `sameAs` Facebook — Página da empresa não encontrada nas fontes disponíveis.
- [ ] `sameAs` LinkedIn — Não encontrado; verificar se aplicável para B2B condominial.
- [ ] `aggregateRating` — Pleper mostra 1 avaliação com nota 1 (dado real, mas muito fraco). Decisão AG5: **omitido intencionalmente** do schema, pois não é prova social forte e não há estrelas visíveis no site. Reavaliar quando o Google Business Profile acumular avaliações melhores (ideal: nota ≥ 4.7 e ≥ 30 avaliações, conforme régua AG5 de destaque de avaliações).
- [ ] Link de avaliação Google (`writereview`) — Pleper indica "Não tem". Gerar via https://www.superchat.com/pt/tools/google-review-link-generator quando houver Place ID confirmado (já disponível: `ChIJRS7CiM7bmwARhs41HgmHkKU`).

## 🔵 COMPLEMENTARES

- [ ] `priceRange` — Faixa de preço não informada (mercado B2B condominial, proposta sob consulta — pode não se aplicar).
- [ ] `paymentAccepted` — Formas de pagamento não listadas no site.
- [ ] `legalName` — Razão social (CNPJ/nome empresarial formal) não informada em nenhuma fonte.
- [ ] `datePublished` / `dateModified` da WebPage — Datas de publicação/atualização da LP não disponíveis.

---

## ✅ Resolvidos Automaticamente

- [x] `identifier.Google CID` — `11930183886135742086` (extraído do Pleper, raiz `Docs/Informações-da-Empresa-Raiz.md`)
- [x] `identifier.Google Place ID` — `ChIJRS7CiM7bmwARhs41HgmHkKU` (Pleper)
- [x] `hasMap` + `sameAs[0]` — URL canônica `https://maps.google.com/?cid=11930183886135742086` aplicada (trocado do antigo `share.google/...`)
- [x] `geo.latitude` / `geo.longitude` — Coordenadas do Pleper: `-22.99893180, -43.35366390` (mais precisas que geocodificação por endereço)
- [x] `name` — `JW Gestão de Condomínios e Facilities` (nome oficial do Google Business Profile)
- [x] `alternateName` — Fórmula AG5 aplicada: `Síndico Profissional Barra da Tijuca RJ - JW Gestão de Condomínios e Facilities | Administração Condominial | Facilities`. Mesmo valor copiado em `WebSite.name`.
- [x] `areaServed` — Barra da Tijuca (bairro base) + 5 adjacentes da tabela AG5 (Recreio dos Bandeirantes, Jacarepaguá, Camorim, Vargem Grande, Itanhangá)
- [x] `foundingDate` — `2023-04-25` (Pleper: "Data da Abertura: 25/04/2023")
- [x] `founder.name` — John Wayne, com `jobTitle` "Fundador e Síndico Profissional" e `sameAs` do Instagram pessoal/profissional (@chamaojohn — perfil único usado para ambos)
- [x] `hasOfferCatalog` — 9 serviços extraídos do site/raiz, cada um com `Offer` → `Service` → `provider`
- [x] `FAQPage` — 10 perguntas/respostas já visíveis no FAQ do site
- [x] `@graph` com `@id` únicos: `#negocio`, `#website`, `#webpage`, `#faq`
- [x] `@type` classificado como `ProfessionalService` (nenhum subtipo específico da tabela — advogado, dentista etc. — se aplica a gestão condominial)

---

📌 **Após preencher cada item:** remover o `[ ]`, substituir o placeholder no Schema e revalidar em https://validator.schema.org/
📌 **NAP** deve ser idêntico ao Google Business Profile após edição
