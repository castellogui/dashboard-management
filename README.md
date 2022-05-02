# Dashboard Management ⚙💻

Olá! <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px">

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
- [Login](#login)

### 🗝Login

![ondascortado](https://user-images.githubusercontent.com/78494604/166313745-c712ab36-b0a0-4de0-945d-984e3c89b5ec.gif)

Para todo o sistema, a cor escolhida foi o roxo escuro. É uma cor fria que cai bem para o layout clean e aconchegante que o minimalismo da tela de login procura trazer.
Foi optado por não inserir imagens, nem links externos pois além da falta de necessidade neste sistema, poderiam atrapalhar o conceito do layout. A forma com que 
encontrei para linkar as redes sociais do condomínio/construtora usuária, foi adicionando botões circulares de forma sutil, em cima dos inputs de login e senha. 
Os ícones funcionaram muito bem, evitando o acúmulo de informações de texto.

Na barra superior, encontra-se um botão para este repositório no GitHub, que apenas existirá em um projeto de teste/demonstração. Este botão será retirado nas versões
finais do projeto pronto para produção.

#### Inputs
Os inputs são completamente simples, sem nenhum tipo de implementações além das validações dos campos ao fazer o submit do formulário com o próprio required do HTML.

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ![required-campos](https://user-images.githubusercontent.com/78494604/166316637-3cffdc07-e484-4068-887e-2510a5b7fb56.gif)

Para fugir do hábito de nomear cada campo do formulário (mesmo com apenas duas opções de texto) e, ao mesmo tempo utilizar um placeholder (que incusive, eu gosto muito), fiz uma animação onde ao input receber o focus, o placeholder sobe e se torna o titulo do input. Um recurso muito simples mas que de forma simples, deixa o formulário mais limpo e dinâmico.

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ![exemplo-placeholder](https://user-images.githubusercontent.com/78494604/166318652-ecfde72f-0602-485f-8ce9-e1948580d6e2.gif)


#### Lembrar-me / WebStorage

![image](https://user-images.githubusercontent.com/78494604/166325129-6cf29c83-207a-448f-8a5c-659a522636d0.png)

A checkbox de lembrar-me está inserida logo após os inputs. Essa implementação permite ao usuário não ter que logar novamente ao entrar na plataforma, utilizando tokens que serão usados também para a verificação de permissões dos tipos de usuário e também para validar o tempo logado de cada usuário.
Por enquanto, como ainda não implementei nenhum banco de dados, nem servidor para o projeto, todos os dados serão gerados ao iniciar na aplicação para testes, e serão guardados como coockies pela plataforma.





