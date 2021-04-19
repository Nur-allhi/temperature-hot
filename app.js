const apiKey = "39d66861333e3d4df5367ef8fadff970";
const apiBase = "https://api.openweathermap.org/data/2.5/weather";

const getWetherData = (city) => {
  const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => updateUi(data));
};

const searchBtn = document
  .getElementById("search-btn")
  .addEventListener("click", () => {
    const inputCity = document.getElementById("input-city").value;
    getWetherData(inputCity);
  });

const updateUi = (data) => {
  document.getElementById("display-city").innerText =
    data.name || "Unknown Location!";

  document.getElementById("show-temp").innerText = data.main.temp;
  document.getElementById("weather-status").innerText = data.weather[0].main;
  document.getElementById("feels-like").innerText = data.weather[0].description;
  document
    .getElementById("icon")
    .setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );
  document.getElementById("input-city").value = "";
};

getWetherData("chittagong");
