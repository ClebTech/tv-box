# TV Box MXQ Pro 4K
# Biblioteca de Jogos Educativos para TV Box MXQ Pro 4K

## Sobre o Projeto

Este projeto consiste em uma biblioteca de jogos educativos desenvolvida para execução em uma **TV Box MXQ Pro 4K**, utilizando o sistema operacional **Debian 10**.

A aplicação foi construída utilizando tecnologias web (**HTML5, CSS3 e JavaScript**) e funciona totalmente de forma local, sem necessidade de conexão com a internet. O sistema utiliza um servidor HTTP simples em Python para disponibilizar os arquivos da aplicação e o navegador Chromium é iniciado automaticamente em **modo quiosque (Kiosk Mode)**, proporcionando uma experiência semelhante a um aplicativo dedicado.

O projeto foi desenvolvido com foco em **baixo custo, simplicidade e compatibilidade com dispositivos de hardware limitado**, permitindo sua utilização em ambientes educacionais.

---

# Arquitetura do Sistema

                TV Box MXQ Pro 4K
             Debian 10 + XFCE Desktop
                       │
                       ▼
          Servidor HTTP Local (Python)
          python3 -m http.server 8000
                       │
                       ▼
          Navegador Chromium (Kiosk Mode)
                       │
                       ▼
          Biblioteca de Jogos Educativos
                       │
    ┌──────────────────┼──────────────────┐
    ▼                  ▼                  ▼
    Memória          Cores              Emoções



---

# Tecnologias Utilizadas

| Componente | Tecnologia / Especificação |
|---|---|
| Hardware | TV Box MXQ Pro 4K |
| Sistema Operacional | Debian GNU/Linux 10 (Buster) |
| Interface Gráfica | XFCE Desktop |
| Navegador | Chromium em modo quiosque |
| Servidor Local | Python 3 HTTP Server |
| Front-end | HTML5, CSS3 e JavaScript ES6 |
| Armazenamento | LocalStorage do navegador |
| Funcionamento | Totalmente offline |

---

# Estrutura do Projeto

BibliotecaTEA/

├── index.html
├── style.css
├── app.js
│
├── jogos/
│ │
│ ├── memoria/
│ │ ├── index.html
│ │ ├── memoria.css
│ │ └── memoria.js
│ │
│ ├── cores/
│ │ ├── index.html
│ │ ├── cores.css
│ │ └── cores.js
│ │
│ └── emocoes/
│ ├── index.html
│ ├── emocoes.css
│ └── emocoes.js
│
└── assets/
├── img/
└── audio/


---

# Funcionamento

O funcionamento da aplicação ocorre da seguinte forma:

1. A TV Box é ligada.
2. O sistema Debian inicializa automaticamente.
3. Um script de inicialização executa o servidor HTTP local utilizando Python.
4. O navegador Chromium é iniciado automaticamente em modo quiosque.
5. A aplicação é carregada através do endereço:
http://localhost:8000

6. O usuário acessa a biblioteca de jogos pela tela inicial.
7. Os jogos são executados localmente, sem dependência de internet.
8. Dados simples, como pontuação e progresso, podem ser armazenados utilizando o recurso **LocalStorage** do navegador.

---

# Jogos Disponíveis

## 🧠 Jogo da Memória

Jogo baseado na associação de imagens, estimulando:

- Memória visual;
- Atenção;
- Reconhecimento de padrões.

---

## 🎨 Descubra as Cores

Jogo voltado para identificação e associação de cores, trabalhando:

- Percepção visual;
- Associação entre elementos;
- Coordenação cognitiva.

---

## 🙂 Reconhecendo Emoções

Jogo focado no reconhecimento de expressões e emoções, auxiliando no desenvolvimento de:

- Identificação emocional;
- Interpretação de expressões faciais;
- Interação social.

---

# Execução Local

Para executar o projeto em um computador ou na TV Box:

## 1. Instale o Python 3

Verifique a instalação:

```bash
python3 --version

No terminal: cd BibliotecaTEA
Ainda no terminal: python3 -m http.server 8000
No navegador: http://localhost:8000
