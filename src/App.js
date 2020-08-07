import React, { Component } from 'react';
import './App-styles.scss';
import Navigation from './components/Navigation/Navigation-component';
import Logo from './components/Logo/Logo-component';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Clarifai from "clarifai"
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

let app = new Clarifai.App({
  apiKey:"479f1e89ce1f400fb480b63805612332"
})

class App extends Component {
  constructor(){
    super()
    this.state = {
      input: "",
      imageURL: "https://samples.clarifai.com/face-det.jpg",
      box: {}
    }
  }
  //https://samples.clarifai.com/face-det.jpg

  calculateFaceLocation = (data) => {
   const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;

   const image = document.getElementById("inputimage")
   const width = Number(image.width);
   const height = Number(image.height);

   return{
     leftCol: clarifaiFace.left_col * width,
     topRow: clarifaiFace.top_row * height,
     rightCol:  width - (clarifaiFace.right_col * width),
     bottomRow: height - (clarifaiFace.bottom_row * height)
   }
  }

  displayBoxes = (box) => {
    console.log(box)
    this.setState({box: box})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onSubmit = () => {
    this.setState({imageURL:this.state.input })

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => {this.displayBoxes(this.calculateFaceLocation(response))
      console.log(response)

      .catch(err => console.log(err))

      //  response.outputs[0].data.regions.map(x=> {
      //   console.log(x.region_info.bounding_box)
      //  })
      
    },
  );
  }

  
 
  render(){
  return (
    <div className="App">

      <div className="nav">
        <Logo logo={"/assets/png/logo.png"}/>
        <Navigation/>
      </div>

      <ImageLinkForm 
      onChange={this.onInputChange} 
      onClick={this.onSubmit}
      />

      <FaceRecognition image={this.state.imageURL} box={this.state.box}/>

     
    </div>
  );
}
}

export default App;
