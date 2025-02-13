
document.querySelector('#searchCity').addEventListener('click', findCityWeather )


function findCityWeather(){

const cityChoice = document.querySelector('#site-search').value


console.log(cityChoice)

const url = `http://api.weatherstack.com/current?access_key=0ffb7890169cf30d996bb33fec685f76&query=${cityChoice}`

fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        document.querySelector('#cityName').innerText = data.location.name
        document.querySelector('#tempVal').innerText = data.current.temperature
        document.querySelector('#weatherDesc').innerText = `${data.current.weather_descriptions[0]}`
        document.querySelector("img").src = data.current.weather_icons
        console.log(data.current.weather_icons)


      })
      .catch(err => {
          console.log(`error ${err}`)
      });
    }