const form = document.getElementById('form-comparador');
const numA = document.querySelector('input#campoA');
const numB = document.querySelector('input#campoB');
const mensagemErro = document.getElementById('mensagem-erro');

function check() {
    let a = numA.value;
    let b = numB.value;

    if (a > b){
        return false;

    } else {
        return true;
    }
}

form.addEventListener ('submit', function (e) {
    e.preventDefault();
    const mensagemSucesso = `Deu certo, o primeiro número é <b>menor</b> que o segundo.`;
    const mensagemErro = `O primeiro número está <b>maior</b> que o segundo, isso não esta correto.`;
    const estiloMensagemErro = document.querySelector('.mensagem-erro');
    const estiloMensagemSucesso = document.querySelector('.mensagem-sucesso');
    const numerosDigitados = `Você digitou o seguinte: ${numA.value} no campo A e ${numB.value} no campo B`;
    const estiloNumerosDigitados = document.querySelector('.numeros-digitados');

    if (check()) {
        estiloMensagemSucesso.innerHTML = mensagemSucesso;
        estiloMensagemSucesso.style.display = 'block';
        estiloMensagemErro.style.display = 'none';
        estiloNumerosDigitados.innerHTML = numerosDigitados
        estiloNumerosDigitados.style.display = 'block';

        numA.value = '';
        numB.value = '';
    } else {
        estiloMensagemErro.innerHTML = mensagemErro;
        estiloMensagemErro.style.display = 'block';
        estiloMensagemSucesso.style.display = 'none'
        numA.value = '';
        numB.value = '';
    }
})

numA.addEventListener ('keyup', function(e){
    console.log(e.target.value)
    if (check()) {
        estiloMensagemSucesso.style.display = 'none'
    } else {
        estiloMensagemErro.style.display = 'none'
    }

})