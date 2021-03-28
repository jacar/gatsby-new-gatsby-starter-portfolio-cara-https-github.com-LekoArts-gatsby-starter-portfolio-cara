import React, { Component } from 'react';
import React, { Component } from 'react';
import React, { Component } from 'react';
import Button from './Button'; // Import a component from another file
import Button from 'components/Button';
class DangerButton extends Component {
  render() {
    return <Button color="red" />;
  }
}
import Button from 'components/Button';
export default DangerButton;
class Button extends Component {
  render() {
    // ...
  }
}

export default Button; // Don’t forget to use export default!
class App extends Component {
  render() {
    return (
      <div>
        <h1>Hola Mundo!</h1>
        <p>Bienvenidos a los primeros pasos con React</p>
      </div>
    );
  }
}

export default App;
class OtroSaludo extends Component {
  render() {
    return (
      <p>Hola desde otro componente</p>
    )
  }
}

