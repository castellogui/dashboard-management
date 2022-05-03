(function($) {

    "use strict";

    $(".toggle-password").click(function() {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

})(jQuery);


const validarUsuario = form => {
    let user = JSON.parse(localStorage.getItem('user'))
    if (user.user == document.getElementById('user-field').value && user.password == document.getElementById('password-field').value) {
        console.log('Login bem sucedido!')
        return true;
    } else {
        console.log('Erro no login')
        exibirMensagem();
        return false
    }
}

const exibirMensagem = () => {
    document.getElementById('error-message').style = 'display: block;'

}

const retirarMensagem = () => { 
    document.getElementById('error-message').style = 'display: none;'
}


const criarUsuarioTest = () => {
    let user = { user: 'guilhermecastello', password: '123' }
    localStorage.setItem('user', JSON.stringify(user))
}

criarUsuarioTest();