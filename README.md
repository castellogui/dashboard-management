# Dashboard Management ⚙💻

![background](https://user-images.githubusercontent.com/78494604/166401181-39adf3ee-1ca7-4fb7-b010-4351dd8bb6e5.png)

**Olá! <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px">**

O projeto Dashboard Management foi inicialmente idealizado para servir como treinamento para minhas habilidades em CSS, HTML e Javascript em suas formas nativas. Busquei
inspirações em sistemas onde a utilização de dashboards é muito comum, como em ERPs ou softwares do ramo imobiliário, onde é muito útil se ter uma visão macro com 
facilidade. 

O Dashboard Management foi projetado para ter uma interface mais clean e de fácil utilização possível, tendo uma curva pequena de aprendizado por parte do usuário.
Neste projeto, pude aplicar conceitos da web como manipulação de objetos no DOM, manipulação de webstorage para sessões e responsividade, também tendo foco a versão
mobile do sistema. 
Nos sistemas de gestão de condomínio, é muito comum ter funções básicas como autorização prévia de pessoas/visitantes, reuniões de condomínio, anexo de documentos,
lista de convidados para eventos, marcação de eventos, informaçãoes sobre entregas, notificações e etc, e seguindo esta linha de requisitos, o Dasboard Management
oferece uma forma facil de acesso a estas funções.

Como o foco deste projeto foi criar um sistema onde fosse possível treinar o design de componentes, manipulação de elementos em grid e utilização de CSS puro,
as funções listadas anteriormente estão desacopladas de um servidor ou banco de dados, ou seja, todas elas estão funcionando somente através de Javascript, apenas 
para demonstração do que o Dashboard Management será em suas próximas atualizações. 

## Menu
1. [Tela de Login](#login)
   - [Inputs](#inputs)
   - [WebStorage / Lembrar-me](#webstoragelembrar-me)
   - [Contas / Senhas](#contassenhas)
   - [Animação/SVG](#animaçãosvg)
   - [Erro ao Logar](#errologin)

2. [Dashboard](#dashboard)


### 🗝Login
Para todo o sistema, a cor escolhida foi o roxo escuro. É uma cor fria que cai bem para o layout clean e aconchegante que o minimalismo da tela de login procura trazer.

![ondascortado](https://user-images.githubusercontent.com/78494604/166313745-c712ab36-b0a0-4de0-945d-984e3c89b5ec.gif)

Foi optado por não inserir imagens, nem links externos pois além da falta de necessidade neste sistema, poderiam atrapalhar o conceito do layout. A forma com que 
encontrei para linkar as redes sociais do condomínio/construtora usuária, foi adicionando botões circulares de forma sutil, em cima dos inputs de login e senha. 
Os ícones funcionaram muito bem, evitando o acúmulo de informações de texto.

Na barra superior, encontra-se um botão para este repositório no GitHub, que apenas existirá em um projeto de teste/demonstração. Este botão será retirado nas versões
finais do projeto pronto para produção.

#### Inputs
Os inputs são completamente simples, sem nenhum tipo de implementações além das validações dos campos ao fazer o submit do formulário com o próprio required do HTML.

![required-campos](https://user-images.githubusercontent.com/78494604/166316637-3cffdc07-e484-4068-887e-2510a5b7fb56.gif)

Para fugir do hábito de nomear cada campo do formulário (mesmo com apenas duas opções de texto) e, ao mesmo tempo utilizar um placeholder (que incusive, eu gosto muito), fiz uma animação onde ao input receber o focus, o placeholder sobe e se torna o titulo do input. Um recurso muito simples mas que de forma simples, deixa o formulário mais limpo e dinâmico.

![exemplo-placeholder](https://user-images.githubusercontent.com/78494604/166318652-ecfde72f-0602-485f-8ce9-e1948580d6e2.gif)


#### WebStorage/Lembrar-me

A checkbox de lembrar-me está inserida logo após os inputs. Essa implementação permite ao usuário não ter que logar novamente ao entrar na plataforma, utilizando tokens que serão usados também para a verificação de permissões dos tipos de usuário e também para validar o tempo logado de cada usuário.

![image](https://user-images.githubusercontent.com/78494604/166325129-6cf29c83-207a-448f-8a5c-659a522636d0.png)

Por enquanto, como ainda não implementei nenhum banco de dados, nem servidor para o projeto, todos os dados serão gerados ao iniciar na aplicação para testes, e serão guardados como coockies pela plataforma.

#### Contas/Senhas

Acredito que seja a sessão mais simples da tela de login. Links que levarão a páginas com formulários de recuperação de senha e criação de contas. Como minha prioridade foi desenvolver a página de dashboard, essas interfaces ainda não foram desenvolvidas. 
Para a recuperação de senha, o usuário preencherá um campo indicando um e-mail provavel vinculado a sua conta, e será enviado um link para alterar a senha do mesmo. 
Já o formulário paracriação de senhas, terá integração com as APIs do Google e Facebook, bem como a possibilidade de criação de conta sem o vinculo dessas redes.


#### Animação/SVG

Bom, o primeiro elemento a se notar ao entrar na página é a animação de ondas que se encontra na parte debaixo do login. O conceito aqui foi o seguinte: eu queria poder dar o sentimento de leveza, e flow que as ondas tem para a experiência do usuário. O objetivo deste layout foi trazer o ideal de que mesmo com uma plataforma com muitos dados e números, a experiência não deve ser afetada e se tornar mais pesada por isso. Essa animação foi um novo desafio para mim pois eu nunca havia trabalhado com SVG anteriormente.

Basicamente criei os formatos de onda aleatóriamente através de um [gerador de ondas svg](https://getwaves.io), e depois fiz a animação horizontal dos elementos através da tag `animation`, utilizando `@keyframes` e passando as coordenadas de inicio e fim na tag `transform: translateX()`. A velocidade e a distância variada de cada onda, causa o efeito de Paralax, o que nos trás a sensação de profundidade e suavidade na animação.


#### Erro/Login

![image](https://user-images.githubusercontent.com/78494604/166396173-45eb7d18-c581-4041-9b92-69625ec8edd9.png)

Digitando uma combinação incorreta de usuário e senha, a interface nos informa numa mensagem abaixo da senha que a combinação não foi aprovada. Neste momento, a validação está sendo feita no front-end através do Javascript, e será a primeira implementação de validação ao inserir um banco de dados e servidor.


![removendo-mensagem](https://user-images.githubusercontent.com/78494604/166399863-d1db30a3-fb38-466f-ae43-9757c685afdb.gif)

Ao clicar novamente nas input boxes, a mensagem é removida para uma nova tentativa.


### Dashboard

![image](https://user-images.githubusercontent.com/78494604/167056754-ff8f51c9-456f-40cc-83e4-d23a2db4274f.png)

