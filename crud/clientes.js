// CRUD
// C -> Creat -> Criar
// R -> Read -> Ler
// U -> Update -> Atualizar
// D -> Delete -> Apagar

// Banco de Dados
// SQL -> relacional -> estruturado -> Mysql, sqlserver, oracle, postgres
// NoSQL -> não é estruturado -> Mongodb, redis, cassandra, dinamo

import { open } from "sqlite";
import sqlite3 from "sqlite3";

/**
 * Cria a conexão com o DB
 */
async function conexao()
{
    const db = await open({
        filename: "clientes.db",
        driver: sqlite3.Database
    });

    return db;
}

/**
 * Inserindo um novo cliente
 * @param {string} nome
 * @param {string} email
 * @param {string} cidade
 * @param {string} telefone
 * @param {number} idade 
 * @returns 
 */
export async function cadastrar(nome, email, cidade, idade, telefone)
{
    let sql= 'INSERT INTO clientes'
        + '(nome, cidade, email, idade, telefone)'
        + 'VALUES'
        + "(?, ?, ?, ?, ?)";

    try{
        const db = await conexao();

        let retorno = await db.run(sql, nome, cidade, email, idade, telefone);
        return (retorno.changes == 1)? true : false;
    } catch (erro)
    {
        console.log("Deu ruim ao cadastrar");
        return false;
    }
}

/**
 * Alterar os dados de um cliente
 * @param {number} id 
 * @param {JSON} colunas 
 */
export async function atualizar(id, colunas)
{
    let set = [];

    if (colunas.nome)
        {
            set.push("nome = '"+ colunas.nome +"'");
        }

    if (colunas.cidade)
        {
            set.push("cidade = '"+ colunas.cidade +"'");
        }

    if (colunas.email)
        {
            set.push("email = '"+ colunas.email +"'");
        }

    if (colunas.idade)
        {
            set.push("idade = '"+ colunas.idade +"'");
        }

    if (colunas.telefone)
    {
        set.push("telefone = '"+ colunas.telefone +"'");
    }

    let sql = 'UPDATE clientes '
    + 'SET' + set.join(", ")
    + 'WHERE id = ?';

    const db = await conexao();
    const retorno = await db.run(sql, id);
    return (retorno.changes == 1)? true : false;
}

/**
 * Deleta o cliente pelo id
 * @param {number} id 
 * @returns {boolean}
 */
export async function deletar(id)
{
    let sql = 'DELETE FROM clientes WHERE id = ?';

    const db = await conexao();

    const retorno = await db.run(sql, id);

    return (retorno.changes == 1)? true : false;
}

/**
 * Retorna um cliente pelo id
 * @param {number} id 
 * @returns {JSON}
 */
export async function pesquisar(id)
{
    let sql = 'SELECT * FROM clientes WHERE id = ' + id;

    const db = await conexao();

    return await db.get(sql);
}

/**
 * Lista todos os clientes cadastrados ordenados pelo nome
 * @returns {JSON}
 */
export async function listar(coluna = "id", ordem = " ASC")
{
    let sql = "SELECT * FROM clientes ORDER BY "+ coluna +" "+ ordem;

    const db = await conexao();

    return await db.all(sql);
}

/**
 * Verifica se o usuario e senha estão corretos
 * @param {*} usuario 
 * @param {*} senha 
 */
export async function logar(usuario, senha) 
{
    let sql = "SELECT * FROM usuario "
        + " WHERE usuario = '"+ usuario +"'"
        + " AND senha = '"+ senha +"'";

    const db = await conexao();
    return await db.get(sql);
}