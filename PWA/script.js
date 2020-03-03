//var url='https://jsonplaceholder.typicode.com/posts'
var url='http://api.openweathermap.org/data/2.5/weather?lat=19.7006&lon=-101.186&appid=dd40cd5feabb831330b03c42ba1e4f3f'

let cache=[]

function getDataFromNetwork(url){
      fetch(url)
    .then(Response => Response.json() )
    .then(data => {
        cache=data

        var iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

        let city=document.getElementById('city')
        city.innerHTML=`
        <div>
          <Center><h2>Weather in ${data.name} </h2></Center>
        </div>`

        let element=document.getElementById('element')
        element.innerHTML=`
        <Center>
        <div>
          <h1>Open Weather Data</h1>
          <hr>
          <p>Longitude: ${data.coord.lon} - Latitude: ${data.coord.lat}</p>
          <p>Min temp: ${data.main.temp_min} - Max temp: ${data.main.temp_max}</p>
          <p>Weather description</p>
          <p>${data.weather[0].description}</p>
          <div id='icon'>
          <img src=${iconUrl} alt="#Origen">Weather Icon</img>
          </div>
          </div>
        </Center>`
    })
    .catch(err => console.log(err))
}


function getDataFromCache(){
  if (!('caches' in window)) {
    return null;
  }
 
  return caches.match(url)
      .then((response) => {
        if (response) {
          console.log(response)
          return response.json();
        }
        return null;
      })
      .catch((err) => {
        console.error('Error getting data from cache', err);
        return null;
      });
}

getDataFromCache()
getDataFromNetwork(url)
