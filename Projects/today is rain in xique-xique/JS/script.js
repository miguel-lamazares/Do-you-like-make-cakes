// ./JS/script.js
const form = document.querySelector('.card form');
const input = form.querySelector('input');

const elCard = document.querySelector('.card');          // <--- card para ativar animação
const elIconWeather = document.getElementById('icon-weather');
const elTemperature = document.getElementById('temperature');
const elLocal = document.getElementById('local');
const elHumidity = document.getElementById('humidity');
const elSpeedWind = document.getElementById('speed-wind');

const APIKey = 'de5e135a273ee57caaa98fbb7c71dab9'; // <- substitua pela sua key ativa

// imagens (ajuste caminhos se necessário)
const IMG_LOADING = "./IMG/clima/search.gif";
const IMG_NOTFOUND = "./IMG/clima/not-found.png";
const IMG_ERROR = "./IMG/clima/error.png";
const IMG_DEFAULT = "./IMG/clima/clouds.png";

function setLoadingState() {
  // mostra o estado de procurando e EXPANDE a card
  elIconWeather.src = IMG_LOADING;
  elTemperature.innerHTML = "...";
  elLocal.innerText = "Procurando...";
  elHumidity.innerText = "--%";
  elSpeedWind.innerHTML = "-- Km/h";
  elCard.classList.add('active'); // <--- faz a animação de crescer
}

function setNotFoundState() {
  elIconWeather.src = IMG_NOTFOUND;
  elTemperature.innerHTML = "--";
  elLocal.innerText = "Cidade não encontrada";
  elHumidity.innerText = "--%";
  elSpeedWind.innerHTML = "-- Km/h";
  elCard.classList.add('active'); // garante que a card abra para mostrar o erro
}

function setErrorState(message = "Erro inesperado") {
  elIconWeather.src = IMG_ERROR;
  elTemperature.innerHTML = "--";
  elLocal.innerText = message;
  elHumidity.innerText = "--%";
  elSpeedWind.innerHTML = "-- Km/h";
  elCard.classList.add('active');
}

function setWeatherUI(json) {
  elLocal.innerText = `${json.name}${json.sys && json.sys.country ? ', ' + json.sys.country : ''}`;

  const condition = json.weather && json.weather[0] && json.weather[0].main;
  switch (condition) {
    case 'Clear': elIconWeather.src = './IMG/clima/clear.png'; break;
    case 'Rain':  elIconWeather.src = './IMG/clima/rain.png'; break;
    case 'Snow':  elIconWeather.src = './IMG/clima/snow.png'; break;
    case 'Clouds':elIconWeather.src = './IMG/clima/clouds.png'; break;
    case 'Mist':
    case 'Haze':  elIconWeather.src = './IMG/clima/mist.png'; break;
    default:      elIconWeather.src = IMG_DEFAULT;
  }

  elTemperature.innerHTML = `${Math.round(json.main.temp)}<span>ºC</span>`;
  elHumidity.innerText = `${json.main.humidity}%`;
  const windKmh = Math.round((json.wind && json.wind.speed ? json.wind.speed : 0) * 3.6);
  elSpeedWind.innerHTML = `${windKmh} Km/h`;

  // garante que a card esteja expandida ao mostrar resultado
  elCard.classList.add('active');
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const city = input.value.trim();
  if (!city) return;

  // mostra loading & abre a card
  setLoadingState();

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${APIKey}&lang=pt_br`;
    const res = await fetch(url);

    // tratar status HTTP primeiro
    if (!res.ok) {
      if (res.status === 401) {
        setErrorState('API key inválida (401). Verifique a chave.');
        console.error('401 - Invalid API key');
        return;
      }
      if (res.status === 404) {
        setNotFoundState();
        return;
      }
      if (res.status === 429) {
        setErrorState('Limite de requisições atingido (429). Tente novamente mais tarde.');
        return;
      }
      setErrorState(`Erro servidor (${res.status})`);
      return;
    }

    const json = await res.json();

    // algumas vezes a API devolve cod no JSON mesmo com 200 HTTP
    if (json.cod === "404" || json.cod === 404) {
      setNotFoundState();
      return;
    }
    if (json.cod === "401" || json.cod === 401) {
      setErrorState('API key inválida (401)');
      return;
    }

    // sucesso: atualiza UI e garante card aberta
    setWeatherUI(json);

  } catch (err) {
    console.error('Erro ao buscar API:', err);
    setErrorState('Erro de rede');
  }
});
