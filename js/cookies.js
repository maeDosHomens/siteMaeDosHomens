var mensagemCookies = document.getElementById('cookies');

function aceito() {
    localStorage.lgpd = "cookies aceito";
    mensagemCookies.classList.remove('mostrarCookies');
}

if (localStorage.lgpd == 'cookies aceito') {
    mensagemCookies.classList.remove('mostrarCookies');
}else {
    mensagemCookies.classList.add('mostrarCookies');
}