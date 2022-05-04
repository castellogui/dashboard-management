$(function () {
    $(".funcionario").click(function () {
        console.log(this)
    });
});

const carregarUsuarioLogado = () => {
    let user = buscarDadosUsuarioLogado();
    let userWrapper = document.getElementById('usuario-info');

    let img = document.createElement('img');
    img.height = 40;
    img.width = 40;
    img.src = user.url == '' ? '/images/nophoto.jpg' : user.url;
    userWrapper.appendChild(img);

    let div = document.createElement('div');
    userWrapper.appendChild(div);

    let h4 = document.createElement('h4');
    let espaco = " ";
    h4.innerHTML = user.nome + espaco + user.sobrenome;
    div.appendChild(h4);

    let small = document.createElement('small');
    small.innerHTML = user.cargo;
    div.appendChild(small);

    let a = document.createElement('a');
    a.setAttribute('href', "/index.html");
    div.appendChild(a);

    let smallSair = document.createElement('small');
    smallSair.innerText = 'Sair'
    a.appendChild(smallSair);
}

const carregarContadores = () => {
    let contadores = buscarContadorFuncoes();
    let i = 0;
    contadores.forEach(element => {
        let h1 = document.createElement('h1')
        h1.innerText = element.valor;
        let span = document.createElement('span')
        span.innerText = element.label;
        let div = document.getElementById(element.contador);
        div.appendChild(h1);
        div.appendChild(span);
        i++
    });

}

const carregarFuncionarios = () => {
    let funcionarios = buscarFuncionarios();
    funcionarios.forEach(element => {
        let li = document.createElement('li');
        let divCustomer = document.createElement('div');
        divCustomer.classList.add('customer');
        li.appendChild(divCustomer);
        let divInfo = document.createElement('div');
        divInfo.classList.add('info');
        divCustomer.appendChild(divInfo);
        let img = document.createElement('img');
        img.height = 40;
        img.width = 40;
        img.src = element.url;
        divInfo.appendChild(img);
        let div = document.createElement('div');
        divInfo.appendChild(div);
        let nome = document.createElement('h4');
        nome.innerText = element.nome;
        let cargo = document.createElement('small');
        cargo.innerText = element.cargo;
        div.appendChild(nome);
        div.appendChild(cargo);
        let divContact = document.createElement('div');
        divContact.classList.add('contact');
        divCustomer.appendChild(divContact);
        let icone = document.createElement('span');
        icone.classList.add('las');
        icone.classList.add('la-plus');
        divContact.appendChild(icone);
        document.getElementById('funcionarios').appendChild(li)
    });
}

const carregarServicos = () => {
    let servicos = buscarServicos();
    let table = document.createElement('table');
    table.setAttribute('width', '100%');
    let thead = document.createElement('thead');
    table.appendChild(thead);
    let tr = document.createElement('tr');
    thead.appendChild(tr);

    let tdNome = document.createElement('td');
    tdNome.innerText = 'Nome';
    tr.appendChild(tdNome);

    let tdTelefone = document.createElement('td');
    tdTelefone.innerText = 'Telefone';
    tr.appendChild(tdTelefone);

    let tdEndereco = document.createElement('td');
    tdEndereco.innerText = 'Endereço';
    tr.appendChild(tdEndereco);

    let tdTipo = document.createElement('td');
    tdTipo.innerText = 'Tipo de Serviço';
    tr.appendChild(tdTipo);

    let tbody = document.createElement('tbody');
    table.appendChild(tbody);

    servicos.forEach(element => {
        let trBody = document.createElement('tr');

        let tdNome = document.createElement('td');
        tdNome.innerText = element.nome;
        trBody.appendChild(tdNome);

        let tdTelefone = document.createElement('td');
        tdTelefone.innerText = element.telefone;
        trBody.appendChild(tdTelefone);

        let tdEndereco = document.createElement('td');
        tdEndereco.innerText = element.endereco;
        trBody.appendChild(tdEndereco);

        let tdTipo = document.createElement('td');
        trBody.appendChild(tdTipo);

        let span = document.createElement('span');
        let corTipo = definirTipo(element.tipo.value);
        tdTipo.appendChild(span);
        span.innerHTML = `<span class="status ${corTipo}"></span> ${element.tipo.label}`

        tbody.appendChild(trBody);

        document.getElementById('table-responsive').appendChild(table)
    });
}

const definirTipo = (tipo) => {
    let classe;
    switch (tipo) {
        case 'saude': {
            classe = 'green';
        }
            break;
        case 'grafico': {
            classe = 'pink';
        }
            break;
        case 'manual': {
            classe = 'orange';
        }
            break;
        case 'educacao': {
            classe = 'blue';
        }
            break;
    }
    return classe;
}

const buscarServicos = () => {
    let servicos = JSON.parse(localStorage.getItem('servicos'))
    return servicos;
}

const buscarFuncionarios = () => {
    let funcionarios = JSON.parse(localStorage.getItem('funcionarios'));
    return funcionarios;
}

const buscarContadorFuncoes = () => {
    let contadorFuncoes = JSON.parse(localStorage.getItem('contadorFuncoes'));
    return contadorFuncoes;
}

const buscarDadosUsuarioLogado = () => {
    let user = JSON.parse(sessionStorage.getItem('usuarioLogado'))
    return user;
}

const criarContadorFuncoes = () => {
    let contador =
        [{ "contador": "reunioes", "label": "Reuniões", "valor": 0 }, { "contador": "documentos", "label": "Documentos", "valor": "0" }, { "contador": "listaConvidados", "label": "Lista de Convidados", "valor": "0" }, { "contador": "entregas", "label": "Entregas", "valor": "0" }]

    localStorage.setItem("contadorFuncoes", JSON.stringify(contador))
}

const criarFuncionariosTest = () => {
    let funcionarios = [
        { "url": "/images/sindico.png", "nome": "Luiz Carlos Macedo", "cargo": "Síndico", "telefone": "(11) 912345678", "email": "luizcarlos@email.com.br" },
        { "url": "/images/advogada.jpg", "nome": "Paula Silva", "cargo": "Jurídico", "telefone": "(11) 912345678", "email": "emilysilva@email.com.br" },
        { "url": "/images/engenheiro.png", "nome": "Maria Carvalho", "cargo": "Engenharia", "telefone": "(11) 912345678", "email": "mariacarvalho@email.com.br" },
        { "url": "/images/porteiro.png", "nome": "João Vitor Pereira", "cargo": "Portaria", "telefone": "(11) 912345678", "email": "joaovitor@email.com.br" },
        { "url": "/images/seguranca.png", "nome": "Cléber Silva Rodrigues", "cargo": "Segurança", "telefone": "(11) 912345678", "email": "clebersilva@email.com.br" },
        { "url": "/images/designer.jpeg", "nome": "Emily Procopio", "cargo": "Designer", "telefone": "(11) 912345678", "email": "emilyprocopio@email.com.br" },
    ]
    localStorage.setItem("funcionarios", JSON.stringify(funcionarios))
}

const criarServicosTest = () => {
    let servicos = [
        { "nome": "Academia FitX", "telefone": "11 912345678", "endereco": "Rua X, 219", "bairro": "Bairro dos Silva", "tipo": { "label": "Saúde", "value": "saude" } },
        { "nome": "Gráfica Dashboard", "telefone": "11 998765432", "endereco": "Rua Y, 220", "bairro": "Bairro das Oliveiras", "tipo": { "label": "Gráfico", "value": "grafico" } },
        { "nome": "Marcenaria Z", "telefone": "11 987654321", "endereco": "Rua De Cima", "bairro": "Bairro de Longe", "tipo": { "label": "Manual", "value": "manual" } },
        { "nome": "Escola de Inglês", "telefone": "11 987651234", "endereco": "Rua Frenzy", "bairro": "Bairro To Be", "tipo": { "label": "Educação", "value": "educacao" } },
    ]
    localStorage.setItem("servicos", JSON.stringify(servicos))
}


carregarFuncionarios();
carregarServicos();
carregarContadores();
carregarUsuarioLogado();

criarFuncionariosTest();
criarServicosTest();
criarContadorFuncoes();