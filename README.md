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
    Memória        Cores              Emoções
