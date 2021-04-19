const apiKey = "39d66861333e3d4df5367ef8fadff970";
const apiBase = "api.openweathermap.org/data/2.5/weather";

const getWetherdata = (city) => {
  const url = `${apiBase}?q=${city}&units=matric&appid=${apiKey}`;
  fetch(url)
    .then((response) => response.json)
    .then((data) => console.log(data));
};
