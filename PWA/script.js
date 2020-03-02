// if ('caches' in window) {
//   caches.match(url).then(function(response) {
//     if (response) {
//       response.json().then(function(json) {
//         // Only update if the XHR is still pending, otherwise the XHR
//         // has already returned and provided the latest data.
//         if (app.hasRequestPending) {
//           console.log('updated from cache');
//           json.key = key;
//           json.label = label;
//           app.updateForecastCard(json);
//         }
//       });
//     }
//   });
// }


var url='https://jsonplaceholder.typicode.com/posts'
let cache=[]

function getDataFromNetwork(url){
var req = new Request(url)

      fetch(url)
    .then(Response => Response.json() )
    .then(data => {
        cache=data
        let element=document.getElementById('element')
        element.innerHTML=`
        <div>
          <h1>Data API</h1>
          <p>${data[0].title}</p>
          <p>${data[1].body}</p>
          
        </div>`
        
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



// if ('caches' in window) {
//   caches.match(url).then(function(response) {
//     if (response) {
//       response.json().then(function(json) {
//         // Only update if the XHR is still pending, otherwise the XHR
//         // has already returned and provided the latest data.
//         console.log('updated from cache');
//         if (hasRequestPending) {
//           console.log('updated from cache');
//           json.key = key;
//           json.label = label;
//          // app.updateForecastCard(json);
//         }
//       });
//     }
//   });
// }
