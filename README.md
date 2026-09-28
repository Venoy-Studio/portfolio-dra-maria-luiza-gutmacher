# Clone: Dra. Maria Luiza Gutmacher (Estética Dental)

Clone estático fiel 1:1 do site [dra-mariagutmacher.vercel.app](https://dra-mariagutmacher.vercel.app/) preservando toda a experiência visual, transições, animações cinematográficas, carrossel 3D interativo, vídeos em tela cheia e fluxo de agendamento, configurado com **dados de contato fictícios**.

---

## 📁 Estrutura de Arquivos

```
.
├── index.html          # Estrutura completa, hero com vídeo/frames, seções Sobre, Serviços e Agendamento
├── config.js           # Dados centrais da clínica, horários, serviços e contatos fictícios
├── privacy.html        # Página informativa de privacidade com contato fictício
├── favicon.svg         # Favicon em formato vetorial SVG
└── assets/
    ├── hero-clareamento.mp4   # Vídeo em alta definição do hero
    ├── intro-camera.mp4       # Vídeo da transição de abertura (cinematic)
    ├── video-consultorio.mp4  # Vídeo institucional da seção Sobre
    ├── maria-*.webp / .png    # Retratos e fotos dos procedimentos odontológicos
    └── frames/                # 129 quadros WebP (f_000.webp a f_128.webp) para renderização em canvas
```

---

## 📇 Dados de Contato Fictícios Configurados

Em atendimento à solicitação, todas as informações de contato reais foram substituídas por dados fictícios:

- **WhatsApp**: `(61) 99999-0000` (`5561999990000`)
- **Endereço**: `Edifício Prime Business Center, Sala 501 · Asa Sul · Brasília, DF`
- **Link do Google Maps**: `https://maps.google.com/?q=Brasilia+DF`
- **Instagram**: `@dra.exemplo` (`https://www.instagram.com/dra.exemplo/`)
- **Registro Profissional**: `CRO-DF 00000`

---

## 🚀 Como Executar Localmente

Você pode abrir diretamente o arquivo [index.html](file:///c:/Users/paulovenoy/Documents/antigravity/vibrant-lovelace/index.html) no navegador ou iniciar um servidor estático local:

```bash
# Python
python -m http.server 8080

# Ou com Node.js (npx)
npx serve .
```

Acesse: `http://localhost:8080`
