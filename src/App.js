import React, { Component } from 'react';
import './App.css';
import Left from './Components/Left/Left';
import RightDefault from './Components/Right/RightDefault/RightDefault'
import RightUpload from './Components/Right/RightUpload/RightUpload'
import RightProcess from './Components/Right/RightProcess/RightProcess'
import RightResult from './Components/Right/RightResult/RightResult'
import RightError from './Components/Right/RightError/RightError'
import Refresh from './Components/Refresh/Refresh'
import Info from './Components/Info/Info'
import Modal from 'react-responsive-modal'
import ModalInfo from './Components/ModalInfo/ModalInfo'
import LeftAudio from './Components/Left/LeftAudio'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      uploadMessage : "Drag N drop, or click to select files",
      openModal: false,
      file : "",
      filename : "",
      uploadStatus : false,
      processingStatus : false,
      resultStatus : false,
      errorWhileFetch : false,
      errorFetchMessage : "",
      result : null,
      audio: null,
      playingAudio : false
    };
  }

  onOpenModal = () => this.setState({ openModal: true });

  onCloseModal = () => this.setState({ openModal: false });

  refresh = () => {
    this.setState({
      uploadMessage : "Drag N drop, or click to select files",
      file : "",
      filename : "",
      uploadStatus : false,
      processingStatus : false,
      resultStatus : false,
      errorWhileFetch: false,
      playingAudio: false
    })
  }

  getFile = (acceptedFiles) => {
    if ( acceptedFiles.length > 1 ) {
      this.setState({
        uploadMessage : "Only one file at a time."
      }) 
    } else {
      this.setState({
        uploadMessage : acceptedFiles[0].name,
        file : acceptedFiles,
        uploadStatus : true,
        resultStatus: false,
        errorWhileFetch : false
      })
      this.upload(acceptedFiles[0])
    }
  } 

  upload = (file) => {
    let formData = new FormData();
    formData.append('files', file)

    fetch('http://localhost:5000/upload', { // Your POST endpoint
        method: 'POST',
        body: formData // This is your file object
    }).then((response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status)
          return;
      }

      response.json().then((data) => {
        if (data.message === 'extension') {
			this.setState({
				errorWhileFetch : true,
				uploadStatus : false,
				processingStatus : false,
				errorFetchMessage : {
				  'line1' : 'Uh Oh!',
				  'line2' : 'Cannot Upload',
				  'line3' : 'Wrong file',
				  'line4' : 'Check again.'
				}})
        } else {
          	this.setState({
				filename : data.filename_server,
				uploadStatus : false,
				processingStatus : true,
        errorWhileFetch : false,
        audio : "http://localhost:5000/static/" + data.filename_server,
        playingAudio : true
          })
        	this.process()
        }
      });
    }).catch((err) => {
        if (err) {
          console.log('YO')
          this.setState({
            errorWhileFetch : true,
            errorFetchMessage : {
              'line1' : 'Uh Oh!',
              'line2' : 'Cannot Upload',
              'line3' : 'Server',
              'line4' : 'Down'
            },
            uploadStatus: false
          })
        }
    })
  }

  process = () => {
    fetch('http://localhost:5000/process', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "filename" : this.state.filename
        })  // This is your file object
    }).then((response) => {  
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status)
        this.setState({
          errorWhileFetch : true,
          errorFetchMessage : {
            'line1' : 'Uh Oh!',
            'line2' : 'Cannot Process',
            'line3' : 'Server',
            'line4' : 'Down'
          },
          processingStatus : false
        })
        return;
      } 

      response.json().then((data) => {
        this.setState({
          processingStatus : false,
          resultStatus: true,
          errorWhileFetch : false,
          result : data.result
        })
      })
    }).catch((err) => {
      if (err) {
        this.setState({
          errorWhileFetch : true,
          errorFetchMessage : {
            'line1' : 'Uh Oh!',
            'line2' : 'Cannot Process',
            'line3' : 'Server',
            'line4' : 'Down'
          },
          processingStatus : false
        })
      }
  })
  }

  render() {

    let svg = <path fill="#0A2348" d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z" />

    return (
      <div className="App">
        { this.state.playingAudio && <LeftAudio src = {this.state.audio} message = {this.state.uploadMessage} />}
        { !this.state.playingAudio && <Left message = {this.state.uploadMessage} file = {this.getFile} refresh = {this.refresh} /> }
        <Refresh refresh = {this.refresh} />
        <Info modal =  {this.onOpenModal} />
        <Modal open = {this.state.openModal} 
              onClose = {this.onCloseModal} 
              center 
              closeOnEsc = {true} 
              closeIconSvgPath = {svg} 
              closeIconSize = {50} 
              classNames={{
                overlay: 'customOverlay',
                modal: 'customModal',
                closeIcon: 'customButton'
              }}
        >
          <ModalInfo/>
        </Modal>
        { this.state.uploadStatus && <RightUpload/> }
        { this.state.processingStatus && <RightProcess/> }
        { this.state.resultStatus && <RightResult result = {this.state.result} /> }
        { this.state.errorWhileFetch && <RightError errorMessage = {this.state.errorFetchMessage} /> }
        { 
          !this.state.uploadStatus && 
          !this.state.processingStatus && 
          !this.state.resultStatus && 
          !this.state.errorWhileFetch && 
          <RightDefault/> 
        }
      </div>
    );
  }
}

export default App;
