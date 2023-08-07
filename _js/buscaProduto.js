import { conectaApi } from "./conectaApi.js";
import {constroiCard}  from "./mostrarProdutos.js";



async function buscarProduto(evento){
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaProduto(dadosDePesquisa);

    const lista = document.querySelector("[data-produtos]");

   while (lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    
    busca.forEach(elemento => {
        let modalId = `#exampleModal${elemento.id}`;
        lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.preco, elemento.imagem, modalId))});

}



const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarProduto(evento));