const { Sequelize, DataTypes } = require("sequelize");


// É NECESSÁRIO CRIAR O BANCO DE DADOS COM O RESPECTIVO NOME NA VARIÁVEL LOGO ABAIXO
const database = "atv4"; // Nome do banco de dados (por padrão definido atv4)
const username = "root"; // Usuário do banco de dados (por padrão definido root)
const password = "fatec"; // Senha do usuário do banco (fatec é a senha do usuário do mysql da minha máquina)

// Instanciando a conexão com o banco de dados
const sequelize = new Sequelize(database, username, password, {
    host: "localhost",
    dialect: "mysql"
});


// CRIAÇÃO DAS TABELAS //

// Criando tabela dos usuários
const Usuario = sequelize.define("usuario", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Criando tabela dos posts
const Post = sequelize.define("Post", {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    corpo: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Chave estrangeira do usuário na tabela de posts
Post.belongsTo(Usuario);

(
    async () => {
        // Sincronizando o banco de dados
        await sequelize.sync({ force: true });

        // CRUD //

        // Criando um usuário (CREATE)
        let nome = "Usuario 1";
        let email = "usuario1@usuario.com";
        let senha = "senhausuario1";
        let user = await Usuario.create({
            nome: nome,
            email: email,
            senha: senha
        });
        console.log(`Usuário criado com sucesso! Informações: {\n\tnome: ${nome},\n\temail: ${email}\n\tsenha: ${senha}\n}`);

        // Criando um post (CREATE)
        let titulo = "POST 1";
        let corpo = "CORPO DO POST 1";
        let chave_estrangeira = user.id; // Chave estrangeira do usuário
        let post = await Post.create({
            titulo: titulo,
            corpo: corpo,
            usuarioId: chave_estrangeira
        });
        console.log(`Post criado com sucesso! Informações: {\n\ttitulo: ${titulo},\n\tcorpo: ${corpo}\n}`);

        // Buscando todos os usuários (READ)
        let usuarios = await Usuario.findAll();
        console.log("Usuários encontrados:");
        usuarios.forEach(usuario => {
            console.log(`\tNome: ${usuario.nome}, Email: ${usuario.email}`);
        });

        // Buscando todos os posts (READ)
        let posts = await Post.findAll();
        console.log("Posts encontrados:");
        posts.forEach(post => {
            console.log(`\tTitulo: ${post.titulo}, Corpo: ${post.corpo}`);
        });

        // Atualizando um usuário (UPDATE)
        let id = user.id;
        let novo_nome = "Usuario 1 Atualizado";
        let novo_email = "usuario1@usuarioatualizado.com";
        let novo_senha = "senhausuario1atualizado";
        await Usuario.update({
            nome: novo_nome,
            email: novo_email,
            senha: novo_senha
        }, {
            where: {
                id: id
            }
        });
        console.log(`Usuário atualizado com sucesso! Informações: {\n\tnome: ${novo_nome},\n\temail: ${novo_email}\n\tsenha: ${novo_senha}\n}`);

        // Atualizando um post (UPDATE)
        id = post.id;
        let novo_titulo = "POST 1 ATUALIZADO";
        let novo_corpo = "CORPO DO POST 1 ATUALIZADO";
        await Post.update({
            titulo: novo_titulo,
            corpo: novo_corpo
        }, {
            where: {
                id: id
            }
        });
        console.log(`Post atualizado com sucesso! Informações: {\n\ttitulo: ${novo_titulo},\n\tcorpo: ${novo_corpo}\n}`);

        // Deletando um usuário (DELETE)
        id = user.id;
        await Usuario.destroy({
            where: {
                id: id
            }
        });
        console.log(`Usuário deletado com sucesso!`);

        // Deletando um post (DELETE)
        id = post.id;
        await Post.destroy({
            where: {
                id: id
            }
        });
        console.log(`Post deletado com sucesso!`);
    }
)();
