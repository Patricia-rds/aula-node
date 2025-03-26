import { listar, pesquisar, cadastrar, deletar, atualizar } from "./index.js";

async function teste(){

    let valores = {
        idade: 22,
        telefone: "(13)1231-2314"
    }

    let res = await atualizar(3, valores);

    console.log(res);
}

teste();