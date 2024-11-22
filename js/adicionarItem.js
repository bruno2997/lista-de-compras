import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");

export function adicionarItem(evento) {
    evento.preventDefault()
    /*console.log(evento.type)
    console.log(evento.target)*/
    if (item.value === "") {
        alert("Por favor, insira um item!");
        return;
    }

    const itemDaLista = criarItemDaLista(item.value, listaDeCompras);
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
    item.value = "";
}
