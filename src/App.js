import React from 'react';
import './css/main.css';
import particles from './components/ParticleImage.js'

try {
  particles()
} catch {
  // Error
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <div className="introOverlay"></div>
      </div>
    );
  }
}

export default App;
