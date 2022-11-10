const apiDetails = {
  url: "https://api.openweathermap.org/data/2.5/",
  apiKey: "60bbd59ec7556e88c0f6b5a2080aebaa",
};

const showData = async (cityName) => {
  const data = await fetch(
    `${apiDetails.url}weather?q=${cityName}&units=metric&APPID=${apiDetails.apiKey}`
  );
  const fdata = await data.json();

  if (fdata.message === "city not found") {
    alert("City not found");
  } else {
    displayData(fdata);
  }
};

const displayData = (Adata) => {
  var locationCity = document.querySelector("#city");
  locationCity.innerHTML = `${Adata.name},${Adata.sys.country}`;

  var locationTemp = document.querySelector("#temp");
  locationTemp.innerHTML = `${Math.round(Adata.main.temp)}<span>°C</span>`;

  var locationWeather = document.querySelector("#weather");
  locationWeather.innerHTML = `${Adata.weather[0].main}`;

  switch (Adata.weather[0].main) {
      case "Mist":
      document.querySelector(".abcd").style.backgroundImage = "url('images/mist.jpg')";
          break;
      case "Smoke":
      document.querySelector(".abcd").style.backgroundImage = "url('images/smoke2.jpg')";
          break;
      case "Clouds":
      document.querySelector(".abcd").style.backgroundImage = "url('images/clouds1.jpg')";
          break;
      case "Fog":
      document.querySelector(".abcd").style.backgroundImage = "url('images/fog1.jpg')";
          break;
      case "Haze":
      document.querySelector(".abcd").style.backgroundImage = "url('images/haze.jpg')";
          break;
      case "Clear":
      document.querySelector(".abcd").style.backgroundImage = "url('images/clear1.jpg')";
          break;
      case "Snow":
      document.querySelector(".abcd").style.backgroundImage = "url('images/snow1.jpg')";
          break;
      case "Drizzle":
      document.querySelector(".abcd").style.backgroundImage = "url('images/rain1.png')";
          break;
      case "Rain":
      document.querySelector(".abcd").style.backgroundImage = "url('images/rain1.png')";
          break;
      case "Thunderstrom":
        document.querySelector(".abcd").style.backgroundImage = "url('images/thunder.png')";
          break;
      default:
      document.querySelector(".abcd").style.background = "linear-gradient(rgb(47, 150, 163), rgb(48, 62, 143))";
          break;

  }

  let monthsYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let daysWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date();

  var day = daysWeek[date.getDay()];
  var pdate = date.getDate();
  var month = monthsYear[date.getMonth()];
  var year = date.getFullYear();

  var locationDay = document.querySelector("#day")
  locationDay.innerHTML = `${pdate} ${month} ${year}`

  var locationTime = document.querySelector("#time")
  locationTime.innerHTML = `${day}`
};

var selectedCity = document.querySelector("#searchCity")
selectedCity.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
    e.preventDefault()
    showData(e.target.value)
    e.target.value = ""
    }
})



