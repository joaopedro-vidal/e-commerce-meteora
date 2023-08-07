import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-produtos]");

export function constroiCard(titulo, descricao, preco, imagem, modalId){
    const produto = document.createElement('li');
    produto.className = "produtos_item";
    // Substituir \n por <br> na descrição
    descricao = descricao.replace(/\n/g, '<br>');
    produto.innerHTML = ` <img src="${imagem}" alt="">
    <h3>${titulo}</h3>
    <p>${descricao}</p>
    <h3>${preco}</h3>
    <button type="button" class="btn btn-primary btn_bombando" data-toggle="modal" data-target="${modalId}" data-whatever="@mdo">Ver mais</button>`

    return produto;
}

 async function listaItem() {
    const listaApi = await conectaApi.listaProdutos();
    listaApi.forEach(elemento => {
      let modalId = `#exampleModal${elemento.id}`; // Suponha que cada elemento tenha uma propriedade 'id'
      lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.preco, elemento.imagem, modalId));
    });
  }

listaItem();


