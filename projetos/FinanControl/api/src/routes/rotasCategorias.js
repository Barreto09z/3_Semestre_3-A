import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//Criando o endpoint para listar todos os usuarios
router.get('/categorias', async(req, res) =>{
    try{
        //cria uma variavel para enviar o comando sql
        const query = `SELECT * FROM categorias ORDER BY id_categoria`

        //cria uma variavel para receber o retorno do sql
        const categorias = await BD.query(query);

        //retorno para a pagina, o json com os dados 
        //buscados do sql
       return res.status(200).json(categorias.rows);//200 ok
    }catch(error){
        console.error('Erro ao listar categorias', error.message);
        return res.status(500).json({error: 'Erro ao listar categorias'})
    }
})

//Endpoint seguro contra sql Injection
router.post('/categorias', async(req, res) => {
    const { nome, descricao, cor, icone, tipo} = req.body;
    try{
        const comando = `INSERT INTO CATEGORIAS(nome, descricao, cor, icone, tipo) VALUES($1, $2, $3, $4, $5)`
        const valores = [nome, descricao, cor, icone, tipo];

        await BD.query(comando, valores)
        console.log(comando,valores);

    return res.status(201).json("Categoria cadastrada.");
    }catch(error){
        console.error('Erro ao cadastrar categorias', error.message);
        return  res.status(500).json({error: 'Erro ao cadastrar categorias'})
    }
})

// endpoint para atualizar um unico usuário
// recebendo o parametro pelo id e buscando o usuario
router.put('/categorias/:id_categoria', async(req, res) =>{
    // Id recebido via parametro
    const {id_categoria} = req.params;

    // Dados da categoria recebido via Corpo da página
    const {nome, descricao, cor, icone, tipo} = req.body;
    try{
        //Verificar se a categoria existe
        const verificarCategoria = await BD.query(`SELECT * FROM CATEGORIAS
            WHERE id_categoria = $1`, [id_categoria])
        if(verificarCategoria.rows.length === 0){
            return res.status(404).json({message: 'Categoria não encontrada'})
        }
        // Atualiza todos os campos da tabela(PUT Substituição completa)
        const comando = `UPDATE CATEGORIAS SET nome = $1, descricao = $2, cor = $3, icone = $4, tipo = $5 WHERE id_categoria = $6`;
        const valores = [nome, descricao, cor, icone, tipo, id_categoria];
        await BD.query(comando, valores);

        return res.status(200).json('Categoria foi atualizada!');
    }catch(error){
        console.error('Erro ao atualizar categorias', error.message);
        return  res.status(500).json({error: 'Erro ao atualizar categorias'})
    }
})

//Rota patch atualizando parcialmente as informações
router.patch('/categorias/:id_categoria', async(req,res) =>{
    const { id_categoria } = req.params;
    const {nome, descricao} = req.body;

    try{
         //Verificar se a categoria existe
        const verificarCategoria = await BD.query(`SELECT * FROM CATEGORIAS
            WHERE id_categoria = $1`, [id_categoria])
        if(verificarCategoria.rows.length === 0){
            return res.status(404).json({message: 'Categoria não encontrada'})
        }

        //Montar o update dinamicamente(apenas campos enviados)
        const campos = [];
        const valores = [];
        let contador = 1;

        if(nome !== undefined){
            campos.push(`nome = $${contador}`);
            valores.push(nome);
            contador++;
        }
        if(descricao !== undefined){
            campos.push(`descricao = $${contador}`);
            valores.push(descricao);
            contador++;
        }

        //se nenhum campo foi enviado
        if(campos.length === 0 ){
            return res.status(400).json({message: "Nenhum campo a atualizar"})
        }

        //Adicionando ID ao final de valores
        valores.push(id_categoria)
        
        //montando a query dinamicamente
        const comando = `UPDATE CATEGORIAS SET ${campos.join(', ')} WHERE id_categoria = $${contador}`
        await BD.query(comando, valores)

        return res.status(200).json('Categoria atualizada com sucesso');
    }catch(error){
        console.error('Erro ao atualizar categoria', error.message)
        return res.status(500).json({message: "Erro interno so servidor" + error.message})
    }
})

router.delete('/categorias/:id_categoria', async(req, res) =>{
    const {id_categoria} = req.params;
    try{
        //Executa o comando de delete
        const comando = `DELETE FROM CATEGORIAS WHERE id_categoria = $1`
        await BD.query(comando, [id_categoria])
        return res.status(200).json({message: "Categoria removida com sucesso"})
    }catch(error){
        console.error('Erro ao atualizar categoria', error.message)
        return res.status(500).json({message: "Erro interno so servidor" + error.message})
    }
})

export default router