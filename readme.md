# Encurtador de url
Este é meu primeiro projeto! Estou criando o banckend de um encurtador de url, não estou seguindo nenhum tutorial, então muito das funcionalidades que estou implementando são com base do que pesquisei sobre esses encurtadores.
Fiz criando as variaveis em português para fluir melhor neste momnto, mas começarei a criar todos os projetos com o idioma primordial da programação. Preciso também melhorar o nome das minhas variaveis kkk, mas acredito que será uma evolução natural.

### Tecnologias usadas:
 - Estou Usando o **NodeJS** ;
 - Framework **Express** 
 - **Nodemon** como dependência de desenvolvimento
 - Biblioteca **UUID** para gerar os IDs dos usuários
 - Mais tecnologias serão adicionadas com a evolução do Projeto...

### Para rodar o projeto
 Para rodar esse projeto Você precisa ter instalado o NodeJS.
 Clone o projeto ou faça o download do zip aqui no GITHUB
 Abra o terminal na raiz da pasta e digite:
 ```nodejs
 npm i
 //ou
 yarn install
 
 ```

Para subir o servidor digite:
```nodejs
npm run dev
//ou
yarn dev
```

Usei o Insomnia para fazr todos os testes, não tem um front ainda. O único teste que é possível fazer no browse é exatamente a função principal que é o redirecionamento.
OBS: Para o redirecionamento funcionar você precisa já ter cadastrado o usuário e a url e sua abreviação.
As rotas estão abaixo!
### Progresso do Projeto
 - Primeira etapa
	- [x] Criar dois arrays para servirem de banco de dados em tempo de execução
    - [x] Criar Rotas para inserir um novo usuários do serviço
    - [x] Verificar se Usuário já existe
    - [x] Rota para cadastrar **url** e **abreviação** que o usuário deseja usar 
    - [x] Verifica se a **abreviação** já existe, pois a **abreviação** escolhida pelo o usuário tem que ser única e com no minimo 3 caracteres
    - [x] Redirecionar para a url informada, exemplo "http://localhost:1992/goo" encaminha para "https://google.com"
 - Segunda Etapa
    - [ ] Criar um Banco de Dados com um Arquivo **JSON**
    - [ ] Fornecer estatísticas de quantas vezes o link foi acessado e qual a data do último acesso.
    - [ ] Editar url ou abreviação
 -  Terceira Etapa
    - [ ] Usar **MongoDB** com framework **Mongoose**
    - [ ] Adicionar e-mail no cadastro do usuário
    - [ ] Rota para o adm do Sistema com estaticas de quantos usuários e quantas urls abreviadas
    - [ ] Rota para o usuário poder administrar suas urls e abreviações
 -  Quarta Etapa
	-  [ ] Criar o Front com HTML, CSS e JS sem framework, para todas as telas
	-  [ ] Verificar se a url é um site valida
 -  Quinta Etapa
	 -  [ ] Refazer o Front usando um framework (React ou Vue)
	 -  [ ] E-mail para validar a conta
	 -  [ ] Login e recuperar sua senha



#### Primeira Etapa
- Criar dois arrays para servirem de banco de dados em tempo de execução
 ```javascript

 const usuarios = []
 const abreviacoes = []
 ```
  O array de usuários está guardando todos os dados do usuário
  ```javascript
const usuarios = [
		{
			"id": "108b2a63-b72a-4a27-bdcd-da39ef9d2dfb",
			"nome": "Nome",
			"nomeDeUsuario": "nomeUsuario",
			"abreviacao":[
				{
					url": "https://produtodigital.com.br/utndls12lfj",
					"abreviacao": "nu123"
				}
			]
		}
]
  ```
  O array de abreviacoes está guardando a abreviacao e a url, para facilitar na hora de validar se a abreviacao já existe. Lembrando que as urls podem se repetir pelo mesmo usuário ou por outros usuários cadastrados.
  ```javascript
const abreviacoes = [
		{
					url": "https://produtodigital.com.br/utndls12lfj",
					"abreviacao": "nu123"
				}
]
  
  ```
  
  - Criar Rotas para inserir um novo usuários do serviço
     http://localhost:1992/criar -> essa rota está esperando receber no body "nome", "nomeDeUsuario". 
	  - Caso falte algum desses dados retorna uma mensagem de erro informado a ausência;
	  - Faço a verificação se o nome de usuário já existe, antes de salvar os dados;
 - Rota para cadastrar **url** e **abreviação** que o usuário deseja usar
   http://localhost:1992/criar-abreviacao -> essa rota está esperando receber no headers o "nomedeusuario" para validação do usuário e no body "url", "abreviacao".
    - Caso o nome de usuário não exista é retornado uma mensagem informando que o usuário não existe;
    -  É verificado se está vindos os dados "url" e "abreviacao", e a "abreviacao" passa pela validacao para ver se é >= 3 caracteres, pois é o mínimo perdmitido;
    -  É verificado se "abreviacao" já existe, caso já esteja cadastrada por esse usuário ou outro é retornada uma menssagem informando.
    -  Se passa por esse teste é casatrado no banco de dados;
 - Redirecionar para a url informada
    http://localhost:1992/abreviacao -> digite no navegado localhost na porta 1992 e a abreviação que você escolheu   
	
	#### Segunda Etapa