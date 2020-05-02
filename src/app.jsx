import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'EricLowryUser3000'
    };
  }

  render() {
    return (
      <h1>This is the app</h1>
    );
  }
}

export default App;
