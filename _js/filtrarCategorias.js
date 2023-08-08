import { conectaApi } from "./conectaApi.js";
import { constroiCard } from "./mostrarProdutos.js";

// Função para listar os produtos de acordo com a categoria
async function listarProdutosPorCategoria(categoria) {
  const listaApi = await conectaApi.listaProdutos();
  const lista = document.querySelector("[data-produtos]");

  // Limpar a lista atual
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  // Filtrar produtos pela categoria
  const produtosFiltrados = listaApi.filter(elemento => elemento.categoria === categoria);

  // Criar os cards dos produtos filtrados
  produtosFiltrados.forEach(elemento => {
    let modalId = `#exampleModal${elemento.id}`;
    lista.appendChild(
      constroiCard(elemento.titulo, elemento.descricao, elemento.preco, elemento.imagem, modalId)
    );
  });
}

// Definir categorias e seus IDs correspondentes
const categorias = [
  { id: 'categoria_camisetas', nome: 'Camisetas' },
  { id: 'categoria_bolsas', nome: 'Bolsa' },
  { id:'categoria_calcados', nome:'Tenis' },
  { id:'categoria_calcas', nome:'Calca' },
  { id:'categoria_casacos', nome:'Casacos' },
  { id:'categoria_oculos', nome:'Oculos' }
  // Adicione mais categorias conforme necessário
];

// Adicionar evento de clique a todas as categorias
categorias.forEach(categoria => {
  const categoriaElemento = document.getElementById(categoria.id);
  categoriaElemento.addEventListener('click', () => {
    listarProdutosPorCategoria(categoria.nome);
  });
});
