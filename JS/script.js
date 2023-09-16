const inputConta = document.getElementById('dinheiro');

const percent5 = document.getElementById('tipPerc5');
const percent10 = document.getElementById('tipPerc10');
const percent15 = document.getElementById('tipPerc15');
const percent25 = document.getElementById('tipPerc25');
const percent50 = document.getElementById('tipPerc50');
const customPercent = document.getElementById('inputPorcentagem');

const inputPessoas = document.getElementById('qntdPessoasInput');

const errorMessagePessoas = document.getElementById('errorMessagePessoas');

const displayGorjeta = document.getElementById('tipNumber');
const displayTotal = document.getElementById('totalNumber');


var percentValue;
var percentOpt

var precoConta;

var precoGorjeta;
var precoGorjetaPessoa;
var precoTotal;
var precoTotalPessoa;

function percentageSelector(index) {
    switch(index) {
        case 1:
            percentValue = 5;
            percentOpt = 1;

            percent5.className = "tipBtn tipBtnSelected";
            percent10.className = "tipBtn";
            percent15.className = "tipBtn";
            percent25.className = "tipBtn";
            percent50.className = "tipBtn";
            customPercent.className = "tipBtn";
            break;

        case 2:
            percentValue = 10;
            percentOpt = 2;

            percent10.className = "tipBtn tipBtnSelected";
            percent5.className = "tipBtn";
            percent15.className = "tipBtn";
            percent25.className = "tipBtn";
            percent50.className = "tipBtn";
            customPercent.className = "tipBtn";
            break;

        case 3:
            percentValue = 15;
            percentOpt = 3;

            percent15.className = "tipBtn tipBtnSelected";
            percent10.className = "tipBtn";
            percent5.className = "tipBtn";
            percent25.className = "tipBtn";
            percent50.className = "tipBtn";
            customPercent.className = "tipBtn";
            break;

        case 4:
            percentValue = 25;
            percentOpt = 4;

            percent25.className = "tipBtn tipBtnSelected";
            percent10.className = "tipBtn";
            percent15.className = "tipBtn";
            percent5.className = "tipBtn";
            percent50.className = "tipBtn";
            customPercent.className = "tipBtn";
            break;

        case 5:
            percentValue = 50;
            percentOpt = 5;

            percent50.className = "tipBtn tipBtnSelected";
            percent10.className = "tipBtn";
            percent15.className = "tipBtn";
            percent25.className = "tipBtn";
            percent5.className = "tipBtn";
            customPercent.className = "tipBtn";
            break;

        case 6:
            percentValue = customPercent.value;
            percentOpt = 6;

            customPercent.className = "tipBtn tipBtnSelected";
            percent10.className = "tipBtn";
            percent15.className = "tipBtn";
            percent25.className = "tipBtn";
            percent50.className = "tipBtn";
            percent5.className = "tipBtn";
            break;
    }

    console.log("A porcentagem é: "+percentOpt)
}


function calcular()
{
    let qntdPessoas = inputPessoas.value;
    console.log("A quantidade de pessoas é: "+qntdPessoas);

    let valorConta = inputConta.value;
    console.log("O valor da conta é: "+valorConta);

    if (qntdPessoas <= 0 || qntdPessoas == null || qntdPessoas == undefined) {
        inputPessoas.className = "qntdPessoasClassWrong";
        errorMessagePessoas.className = "errorPessoas";

    }

    else 
    {
        inputPessoas.className = "qntdPessoasClass";
        errorMessagePessoas.className = "errorPessoas hidden";

        precoConta = inputConta.value;
        precoConta = Number(precoConta);
        console.log(typeof precoConta)

        precoGorjeta = precoConta * (percentValue / 100);
        console.log("O valor da gorjeta é: "+precoGorjeta)
        console.log(typeof precoGorjeta)

        precoGorjetaPessoa = precoGorjeta / qntdPessoas;

        precoGorjetaPessoa = precoGorjetaPessoa.toFixed(2);

        if(!(precoGorjeta <= 0) && (precoConta != null || precoConta != undefined)){
            displayGorjeta.textContent = `$${precoGorjetaPessoa}`;
        }

        precoTotal = precoConta + precoGorjeta;
        console.log("O preço total é: "+precoTotal)
        precoTotalPessoa = precoTotal / qntdPessoas;
        precoTotalPessoa = precoTotalPessoa.toFixed(2);

        if(!(precoConta <= 0)){
            displayTotal.textContent = `$${precoTotalPessoa}`
        }
    }
}