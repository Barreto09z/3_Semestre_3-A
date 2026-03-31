import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//Criando o endpoint para listar todos os usuarios
router.get('/subcategorias', async(req, res) =>{
    try{
        //cria uma variavel para enviar o comando sql
        const query = `SELECT * FROM subcategorias ORDER BY id_subcategoria`

        //cria uma variavel para receber o retorno do sql
        const subcategorias = await BD.query(query);

        //retorno para a pagina, o json com os dados 
        //buscados do sql
       return res.status(200).json(subcategorias.rows);//200 ok
    }catch(error){
        console.error('Erro ao listar subcategorias', error.message);
        return res.status(500).json({error: 'Erro ao listar subcategorias'})
    }
})

//Endpoint seguro contra sql Injection
router.post('/subcategorias', async(req, res) => {
    const { nome, ativo, id_categoria} = req.body;
    try{
        const comando = `INSERT INTO SUBCATEGORIAS(nome, ativo, id_categoria) VALUES($1, $2, $3)`
        const valores = [nome, ativo, id_categoria];

        await BD.query(comando, valores)
        console.log(comando,valores);

    return res.status(201).json("Subcategoria cadastrada.");
    }catch(error){
        console.error('Erro ao cadastrar subcategorias', error.message);
        return  res.status(500).json({error: 'Erro ao cadastrar subcategorias'})
    }
})

// endpoint para atualizar um unico usuário
// recebendo o parametro pelo id e buscando o usuario
router.put('/subcategorias/:id_subcategoria', async(req, res) =>{
    // Id recebido via parametro
    const {id_subcategoria} = req.params;

    // Dados da subcategoria recebido via Corpo da página
    const {nome, ativo, id_categoria} = req.body;
    try{
        //Verificar se a subcategoria existe
        const verificarSubcategoria = await BD.query(`SELECT * FROM SUBCATEGORIAS
            WHERE id_subcategoria = $1`, [id_subcategoria])
        if(verificarSubcategoria.rows.length === 0){
            return res.status(404).json({message: 'Subcategoria não encontrada'})
        }
        // Atualiza todos os campos da tabela(PUT Substituição completa)
        const comando = `UPDATE SUBCATEGORIAS SET nome = $1, ativo = $2, id_categoria = $3 WHERE id_subcategoria = $4`;
        const valores = [nome, ativo, id_categoria, id_subcategoria];
        await BD.query(comando, valores);

        return res.status(200).json('Subcategoria foi atualizada!');
    }catch(error){
        console.error('Erro ao atualizar subcategorias', error.message);
        return  res.status(500).json({error: 'Erro ao atualizar subcategorias'})
    }
})

router.delete('/subcategorias/:id_subcategoria', async(req, res) =>{
    const {id_subcategoria} = req.params;
    try{
        //Executa o comando de delete
        const comando = `DELETE FROM SUBCATEGORIAS WHERE id_subcategoria = $1`
        await BD.query(comando, [id_subcategoria])
        return res.status(200).json({message: "Subcategoria removida com sucesso"})
    }catch(error){
        console.error('Erro ao remover subcategoria', error.message)
        return res.status(500).json({message: "Erro interno so servidor" + error.message})
    }
})

export default router