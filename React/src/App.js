import React ,{ Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Album from './components/album';
import InputSearch from './components/input-serch';

class Albums extends Component {
  state = {
    album: []
  }

  componentDidMount() {
    //'http://jsonplaceholder.typicode.com/users'
    const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=dragonforce"
 
    fetch(url, {
      metod:'get',
      headers: new Headers({
        "x-rapidapi-host" : "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "3d41c5e6e3msh0fbb749fc8657b6p13f2aejsn45687ff1b0c0"
      })
    })
        .then(res => res.json())
        .then((data) => {
            this.setState({ album: data.data })
        })
        .catch(console.log)

        
  }
  render() {
      return (
          <Album album={this.state.album} />
      )
  }
}

function App(){

  return (
    <div className="App">
      <center>
        <img src="https://brandpalettes.com/wp-content/uploads/2018/11/Spotify_Logo_CMYK_Green.png" alt="Logo" id="logo"></img>
      </center>
      <InputSearch></InputSearch>

      <Albums></Albums>
    </div>
  )
}

export default App
