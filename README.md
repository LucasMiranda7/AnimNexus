

<div align="center">
 <img width="250" height="250" alt="Gemini_Generated_Image_wlbme4wlbme4wlbm" src="https://github.com/user-attachments/assets/4593b12d-5cfd-447e-86c0-9e9699ec9b09" />
  <div align="center">
  <h1>Base de Conhecimento e Catálago AniNexus</h1>
</div>
</div>

## Apresentação do Projeto: AniNexus 
<p>
  O AniNexus é mais do que um catálogo; é um Hub Interativo de Animes. Desenvolvido para centralizar informações, o projeto não só exibe e filtra títulos de forma dinâmica (carregados via animes.json), mas também oferece acesso direto a links para assistir os animes, ler o mangá e obter informações detalhadas de cada obra, tudo com uma experiência de usuário aprimorada pelo JavaScript e CSS Responsivo.
</p>
<img width="1700" height="908" alt="image" src="https://github.com/user-attachments/assets/c692a5bc-6469-4375-97b2-35416115a362" />



## Funcionalidades Principais
- **Catálogo Dinâmico:** Os cards dos animes são gerados e exibidos automaticamente a partir dos dados do arquivo animes.json usando JavaScript.
- **Busca em Tempo Real:** O campo de pesquisa **`(#input-busca)`** permite ao usuário filtrar a lista de animes de forma instantânea, buscando tanto pelo nome quanto pelos gêneros do título.
- **O script combina o nome** do anime e seus gêneros em uma única string para otimizar a busca **(veja `filtrarAnimes em script.js`).**
- **Seção de Destaque (Featured):** Uma seção fixa no topo é dedicada a um título principal, com sinopse e links diretos. O elemento HTML utilizado para isso é a `section` com a classe `<section class="featured-anime">`.
- **Design Responsivo:** O layout se adapta a diferentes tamanhos de tela (desktop e mobile), garantindo uma experiência de navegação otimizada.
---
### 🛠 Tecnologias e Estruturas Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias e conceitos:

| Tecnologia | Conceito Principal | Observações |
| :--- | :--- | :--- |
| **HTML5** | Estrutura Semântica | Utilização de tags como `header`, `main`, `section`, `footer`. |
| **CSS3** | Estilização Avançada | Uso de **Variáveis CSS** (definidas em `:root` no **`style.css`**) e **Media Queries** para o layout responsivo. |
| **JavaScript (Vanilla)** | Lógica Front-End | **Manipulação de DOM** (função **`mostrarCardsAnime`**) e **Event Listeners** para a funcionalidade de busca. |
| **JSON** | Persistência de Dados | O catálogo completo de animes é armazenado no arquivo **`animes.json`** e carregado de forma assíncrona. |

---
### 🚀 Como Acessar

Você pode visualizar o projeto rodando online ou configurar ele localmente.

* **Online:**
    🔗 [Clique aqui para acessar o Catálogo AniNexus](https://lucasmiranda7.github.io/AnimNexus/)
---
### 🎨 Layout

O design é focado na estética de um **catálogo noturno/escuro**, usando as fontes **Quicksand** e **Oswald** e uma paleta de cores contrastante definida no **`style.css`**:

**Fundo Principal (Dark Theme):** **`wallpaper-attack_on_titan`**
* **Fundo Secundário:** **`--color-darker-bg: #0f0f1c`** (Quase Preto)
* **Cor Primária/Links:** **`--color-primary-blue: #5b9bd5`** (Azul Claro/Ciano)
* **Acento de Alerta/Destaque:** **`--color-accent-red: #cc0000`** (Vermelho Intenso)
* **Destaque Secundário (Gold):** **`--color-highlight-gold: #fcc100`** (Amarelo/Ouro)
* **Texto/Elementos Claros:** **`--color-text-light: #e0e0e0`** (Cinza Muito Claro)
  
---
### 👩‍💻 Autor

* **[Lucas Miranda/LucasCodes]**
   
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lucas-miranda7/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/LucasMiranda7)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/ilucas_codes/)
