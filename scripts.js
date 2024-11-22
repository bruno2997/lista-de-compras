import { adicionarItem } from "./js/adicionarItem.js";
//import { criarItemDaLista } from "./js/criarItemDaLista.js";
import { verificarListaComprados } from "./js/verificarListaComprados.js";

const botaoSalvarItem = document.getElementById("adicionar-item");
botaoSalvarItem.addEventListener("click", adicionarItem);

const listaComprados = document.getElementById("lista-comprados");
verificarListaComprados(listaComprados);