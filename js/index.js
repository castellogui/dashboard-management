(function ($) {

    "use strict";

    $(".toggle-password").click(function () {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

})(jQuery);


const buscarUsuarios = () => {
    let users = JSON.parse(localStorage.getItem('users'));
    return users;
}

const validarUsuario = form => {
    let users = buscarUsuarios();

    let inputUsername = document.getElementById('user-field').value;
    let inputPassword = document.getElementById('password-field').value;

    if (validarFiltroUsuario(users, inputUsername) != 0) {
        let user = validarFiltroUsuario(users, inputUsername);
        if (user[0].username == inputUsername && user[0].password == inputPassword) {
            registrarUsuarioLogado(user[0]);
            return true;
        }
        exibirMensagem('Senha incorreta.');
        return false;
    } else {
        console.log('Erro no login: usuário não encontrado.');
        exibirMensagem('Usuário não encontrado.');
        return false
    }
}

const validarFiltroUsuario = (jsons, inputUsername) => {
    let checkArray = jsons.filter(json => json.username == inputUsername);
    return checkArray
}

const registrarUsuarioLogado = (usuarioValidado) => {
    let usuarioLogado = usuarioValidado;
    sessionStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado))
}

const exibirMensagem = (mensagem) => {
    let caixaMensagem = document.getElementById('error-message');
    caixaMensagem.style = 'display: block;';
    caixaMensagem.innerText = mensagem;
}

const retirarMensagem = () => {
    document.getElementById('error-message').style = 'display: none;'
}


const criarUsuarioTest = () => {
    let users = [
        { "username": "guilhermecastello", "nome": "Guilherme", "sobrenome": "Castello", "password": "123", "url": "/images/2.jpg", "cargo": "Super Admin" },
        { "username": "emilyprocopio", "nome": "Emily", "sobrenome": "Procopio", "password": "123", "url": "/images/nic.jpeg", "cargo": "Super Admin" },
        { "username": "teste", "nome": "Teste", "sobrenome": "Teste", "password": "123", "url": "", "cargo": "Teste" }
    ]
    localStorage.setItem('users', JSON.stringify(users));
}

criarUsuarioTest();