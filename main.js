import axios from "axios";

const buttonMail = document.querySelector("#mail");
const buttonHighway = document.querySelector("#highway");
const buttonChurch = document.querySelector("#church");
const buttonSchedule = document.querySelector("#schedule");
const content = document.querySelector(".content");
const ul = document.createElement("ul");
const table = document.querySelector(".table");

// navigator.geolocation.getCurrentPosition((position) => {
//   const lat = position.coords.latitude;
//   const lon = position.coords.longitude;
//   console.log(lat, lon)
// })

async function fetchMail() {
  const stoppingMail = `https://yandex.ru/maps/213/moscow/stops/stop__9643717/?ll=37.826208%2C55.777070&tab=overview&z=16`;
  try {
    const response = await axios.get(
      "https://ostanovka-seregas-projects-86df702c.vercel.app/data",
      {
        params: {
          stopping: stoppingMail,
        },
      }
    );
    const data = response.data;
    ul.innerHTML = data;
    content.append(ul);
  } catch (error) {
    console.error(error);
  }
}

async function fetchHighway() {
  const stoppingHighway =
    "https://yandex.ru/maps/213/moscow/stops/stop__9643755/?ll=37.842545%2C55.780370&tab=overview&z=16";
  try {
    const response = await axios.get(
      "https://ostanovka-seregas-projects-86df702c.vercel.app/data",
      {
        params: {
          stopping: stoppingHighway,
        },
      }
    );
    const data = response.data;
    ul.innerHTML = data;
    content.append(ul);
  } catch (error) {
    console.error(error);
  }
}

async function fetchChurch() {
  const stoppingChurch =
    "https://yandex.ru/maps/213/moscow/stops/stop__9646059/?ll=37.842783%2C55.769091&tab=overview&z=16.72";
  try {
    const response = await axios.get(
      "https://ostanovka-seregas-projects-86df702c.vercel.app/data",
      {
        params: {
          stopping: stoppingChurch,
        },
      }
    );
    const data = response.data;
    ul.innerHTML = data;
    content.append(ul);
  } catch (error) {
    console.error(error);
  }
}

async function getSchedule() {
  const urlSchedule = "https://i-hram.ru/schedule/";
  const response = await axios.get(
    "https://ostanovka-seregas-projects-86df702c.vercel.app/schedule",
    {
      params: {
        stopping: urlSchedule,
      },
    }
  );
  const data = response.data;
  table.innerHTML = data;
}

buttonMail.addEventListener("click", fetchMail);
buttonHighway.addEventListener("click", fetchHighway);
buttonChurch.addEventListener("click", fetchChurch);
buttonSchedule.addEventListener("click", getSchedule);
