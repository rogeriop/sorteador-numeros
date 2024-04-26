
let quantidadeNumeros = 0;
let doNumero = 0;
let aoNumero = 0;
let guardaNumeros = [];

function sorteiaNumeros(fator) {
    guardaNumeros = [];
    let qtdNumerosEncontrados = 0;
    let sorteio = 0;
    while(quantidadeNumeros != qtdNumerosEncontrados) {
        let calcula = true;
        while(calcula) {
            sorteio = Number((Math.random() * fator)).toFixed(0);
            if(!guardaNumeros.includes(sorteio)) {
                break;
            }
        }
        if(sorteio >= parseInt(doNumero) && sorteio <= parseInt(aoNumero)) {
            guardaNumeros.push(sorteio);
            qtdNumerosEncontrados++;
        }
    }

}

function exibeMensagemDeErro(mensagem) {
    document.querySelector("#mensagem").innerHTML = mensagem;
}

function pegaDadosDaPagina() {
    let errosEncontrados = [];
    quantidadeNumeros = document.getElementById('quantidade').value;
    doNumero = document.getElementById('de').value;
    aoNumero = document.getElementById('ate').value;

    if(quantidadeNumeros == 0) {
        errosEncontrados.push("Erro: Quantidade de números tem que ser maior que zero.\n");
    }
    if(aoNumero == 0) {
        errosEncontrados.push("Erro: [Até o número] tem que ser diferente de zero.\n");
    }
    if(parseInt(aoNumero) <= parseInt(doNumero)) {
        errosEncontrados.push("Erro: [Até o número] tem que ser maior que [Do número].\n");
    }
    if((parseInt(aoNumero) - parseInt(doNumero)) < parseInt(quantidadeNumeros)) {
        errosEncontrados.push("Erro: Intervalo [Do número]. . . [Até o número] tem que ser maior que [Quantidade de números]\n");
    }
    if(doNumero.length > 3) {
        errosEncontrados.push("Erro: [Do número] tem que ser menor que mil.\n");
    }
    if(aoNumero.length > 3) {
        errosEncontrados.push("Erro: [Do número] tem que ser menor ou igual a mil.\n");
    }
    return errosEncontrados;
}

function identificaFatorSorteio() {
    const fator = [0,10,100,1000];
    return fator[aoNumero.length];
}

function restabeleceBotoesParaReiniciarJogo() {
    document.getElementById('btn-reiniciar').className = "container__botao";
    document.getElementById('btn-sortear').className = "container__botao-desabilitado";
}

function restabeleceFormularioParaUmNovoJogo() {
    document.getElementById('btn-reiniciar').className = "container__botao-desabilitado";
    document.getElementById('btn-sortear').className = "container__botao"
    document.getElementById('quantidade').value = "";
    document.getElementById('de').value = "";
    document.getElementById('ate').value = "";
}

function sortear() {
    let erros = pegaDadosDaPagina();
    if(erros.length == 0) {
        sorteiaNumeros(identificaFatorSorteio());
        document.querySelector("#mensagem").innerHTML = `Números sorteados: ${guardaNumeros.sort()} `;
        restabeleceBotoesParaReiniciarJogo();

    } else {
        alert(erros);
        reiniciar();
    }  
}

function reiniciar() {
    document.querySelector("#mensagem").innerHTML = "Números sorteados:  nenhum até agora";
    restabeleceFormularioParaUmNovoJogo();
}

