# Atividade Avaliativa Individual 04
Crud usando Sequelize ORM -- Utilizando como banco de dados MySQL.

## Observações
Durante a execução alguns console logs aparecem no terminal mostrando que os processos estão sendo executados.

Para ver cada processo separadamente basta comentar os outros. Os processos estão com comentários que separam uns dos outros para fácil localização.

O script roda todos os processos de uma vez ou seja ao final da execução o banco de dados estará vazio pois os procedimentos foram realizados no seguinte sequência:
- CREATE
- READ
- UPDATE
- DELETE

Como o DELETE é o último processo o banco termina **VAZIO**.

Algumas variáveis precisam ser configuradas antes de rodar o script. O guia para configuração das variáveis e execução do script está na seção logo abaixo.

## Como executar

### Instalando dependências
```bash
npm i
```

### Variáveis
Algumas variáveis precisam ser configuradas antes de rodar o script, essas são:
- database -- Nome do banco de dados (DEVE SER CRIADO ATRAVÉS DO CLI DO BANCO ANTES DE EXECUTAR O SCRIPT, O MESMO NÃO CRIA AUTOMATICAMENTE)
- username -- Nome de usuário que vai ter acesso ao banco (POR PADRÃO USUÁRIO ROOT)
- password -- Senha do usuário que vai ter acesso ao banco (fatec É A SENHA DO USUÁRIO DO MySQL DA MINHA MÁQUINA)

**Trecho do código com as variáveis a serem alteradas:**
```js
// É NECESSÁRIO CRIAR O BANCO DE DADOS COM O RESPECTIVO NOME NA VARIÁVEL LOGO ABAIXO
const database = "atv4"; // Nome do banco de dados (por padrão definido atv4)
const username = "root"; // Usuário do banco de dados (por padrão definido root)
const password = "fatec"; // Senha do usuário do banco (fatec é a senha do usuário do mysql da minha máquina)
```

### Executando
```bash
npm start
```
