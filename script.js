// Referências para elementos do DOM
const inputBusca = document.getElementById("input-busca");
const botaoBusca = document.getElementById("botao-busca");
const gridAnimes = document.getElementById("grid-animes");

let todosAnimes = [];

/**
 * Renderiza a lista de animes no grid, criando o HTML de cada card
 * internamente (formato 'mostrarCards' solicitado).
 * @param {array} animes - A lista de objetos de anime a serem exibidos.
 */
function mostrarCardsAnime(animes) {
    gridAnimes.innerHTML = "";

    // Filtra animes que não são destaque
    const animesParaGrid = animes.filter((anime) => !anime.destaque);

    for (let anime of animesParaGrid) {
        const categoriasParaBusca = anime.generos.toLowerCase().replace(/,\s*/g, " ");
        
        // Cria e insere o HTML do card diretamente na iteração
        gridAnimes.innerHTML += `
            <article
                class="anime-card"
                data-categoria="${categoriasParaBusca}"
            >
                <img src="${anime.imagem}" alt="${anime.nome} Poster" />
                <div class="card-info">
                    <h4>${anime.nome}</h4>
                    <div class="card-links">
                        <div class="links-superior">
                            <a href="${anime.linkAssistir}" class="link-assistir" target="_blank">Assistir</a>
                            <a href="${anime.linkManga}" class="link-manga" target="_blank" >Mangá</a>
                        </div>
                        <a href="${anime.linkInfos}" class="link-infos" target="_blank" >Informação</a>
                    </div>
                </div>
            </article>
        `;
    }
}

async function carregarCatalogo() {
  try {
    const response = await fetch("animes.json");
    if (!response.ok) {
      throw new Error(`Erro ao carregar o JSON: ${response.statusText}`);
    }
    const data = await response.json();

    todosAnimes = data;
    
    mostrarCardsAnime(todosAnimes);

    // Adiciona ouvintes de evento após o catálogo ser carregado
    botaoBusca.addEventListener("click", filtrarAnimes);
    inputBusca.addEventListener("input", filtrarAnimes);
    inputBusca.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        filtrarAnimes();
      }
    });
  } catch (error) {
    console.error("Não foi possível carregar o catálogo de animes:", error);
    gridAnimes.innerHTML =
      "<p>Ocorreu um erro ao carregar os dados. Tente novamente mais tarde.</p>";
  }
}

function filtrarAnimes() {
  const termoBusca = inputBusca.value.toLowerCase().trim();
  const animesFiltrados = todosAnimes.filter((anime) => {

    const nomeAnime = anime.nome.toLowerCase();
    const categorias = anime.generos.toLowerCase().replace(/,\s*/g, " ");
    //Combina nome e categorias para a busca
    const conteudoBusca = nomeAnime + " " + categorias;
    return conteudoBusca.includes(termoBusca);
  });

  // Usa a função única 'mostrarCardsAnime' para renderizar os filtrados
  mostrarCardsAnime(animesFiltrados);

  // Se a busca estiver vazia, renderiza a lista completa novamente
  if (termoBusca === "") {
    mostrarCardsAnime(todosAnimes);
  }
}

carregarCatalogo();