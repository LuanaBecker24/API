async function buscarCidade(cidade) {
  const mensagemErro = document.getElementById("erro");
  mensagemErro.innerHTML = "";
  let containerTemp = document.querySelector(".containerTemp");

  try {
    containerTemp.innerHTML = "";

    let temperatura = document.createElement("p");
    let sensacao = document.createElement("p");
    let umidade = document.createElement("p");
    let vento = document.createElement("p");

    const consultaCidade = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=bfa037559b7d45be88b234151231107&q=${cidade}`
    );

    const consultaCidadeAtualizada = await consultaCidade.json();
    console.log(consultaCidadeAtualizada);

    temperatura.innerHTML = '<i class="fa-solid fa-sun"></i> ' + " Temperatura: " + consultaCidadeAtualizada.current.temp_c + "°C";
    containerTemp.appendChild(temperatura);

    sensacao.innerHTML = '<i class="fa-solid fa-temperature-half"></i> ' + " Sensação térmica: " + consultaCidadeAtualizada.current.feelslike_c + "°C";
    containerTemp.appendChild(sensacao);

    umidade.innerHTML = '<i class="fa-solid fa-droplet"></i> ' + " Umidade: " + consultaCidadeAtualizada.current.humidity + "%";
    containerTemp.appendChild(umidade);

    vento.innerHTML = '<i class="fa-solid fa-wind"></i> ' + " Velocidade do vento: " + consultaCidadeAtualizada.current.wind_kph + "kph";
    containerTemp.appendChild(vento);

    
  } catch (erro) {
    mensagemErro.innerHTML = "<p>Cidade inválida tente novamente</p>";
    console.log(erro);
  }
}

const pesquisa = document.getElementById("pesquisa");
const cidade = document.getElementById("caixa-de-texto");
pesquisa.addEventListener("click", () => buscarCidade(cidade.value));
