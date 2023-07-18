async function buscaEndereco(cep) {
    const mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = "";

    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCEPCovertida = await consultaCEP.json();
        if (consultaCEPCovertida.erro) {
            throw Error('Cep não existe!');
        }
        console.log(consultaCEPCovertida);
        const cidade = document.getElementById('cidade');
        cidade.value = consultaCEPCovertida.localidade;
        const estado = document.getElementById('estado');
        estado.value = consultaCEPCovertida.uf;
        const bairro = document.getElementById('bairro');
        bairro.value = consultaCEPCovertida.bairro;
        const endereco = document.getElementById('endereco');
        endereco.value = consultaCEPCovertida.logradouro
        console.log(consultaCEPCovertida);
    }
    catch (erro) {
        mensagemErro.innerHTML = '<p>CEP iválido tente novamente</p>'
        console.log(erro);
    }
}

const cep = document.getElementById(`cep`);
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

//-----síncrona

//function processa1() {
//console.log('Processo 1 iniciado');
//console.log('Processo 1 finalizado');

///}

//function processa2() {
//console.log('Processo 2 iniciado');
//console.log('Processo 2 finalizado');

//}

//processa1();
//processa2();

//-----assíncrona

//function processa1() {
//console.log('Processo 1 iniciado');
//setTimeout(() => {
// console.log('Processo 1 finalizado');
//}, 2000);
//}

//function processa2() {
//console.log('Processo 2 iniciado');
//console.log('Processo 2 finalizado');

//}

//processa1();
//processa2();

//-----Call Stack

//function funcao1() {
//funcao2();
//console.log('Executou a função 1');
//}

//function funcao2() {
//console.log('Executou a função 2');
//}

//funcao1();

//------Task Queue/EVENT LOOP

//console.log('Início');

//setTimeout(() => {
//console.log('Callback do setTimeout');
//}, 0);

//console.log('Fim');

//fetch('http://api.weatherapi.com/v1/current.json?key=7ce5a12fad9449c589f01524230407&q=Sao_Paulo')
//.then(response => response.json())
//.then(data => {
//console.log('Condições climáticas em São Paulo:');
//console.log('Temperatura: ' + data.current.temp_c + ' graus Celsius');
//console.log('Condição: ' + data.current.condition.text);
//})

//.catch(error => console.log('Erro:', error));

//const consultaCEP = fetch('https://viacep.com.br/ws/01001002/json/')
    //.then(resposta => resposta.json())
    //.then(r => {
        //if (r.erro) {
            //throw Error('Esse CEP não existe!');

        //} else {
            //console.log(r);
        //}
    //})
    //.catch(err => console.log(err))
    //.finally(mensagem => console.log('Processamento concluído'));

//console.log(consultaCEP);