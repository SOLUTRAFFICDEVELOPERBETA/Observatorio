import React, { Component } from "react"; // Modulo de React

/**
 * @param {hasError, info, error} props
 */

/**
 
 * @author Jose Fauricio Valencia
 * @description 
 * ErrorBoundary
 * contiene todo los errores del componente y los imprime en un h1.
 */

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false,message:"" };
  }

  //función que contiene dos variables error y info, lo que hace es que te muestra en error y la informacion detallada.
  componentDidCatch(error, info) {
    this.setState({ hasError: true,message: error.message });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Ocurrio un error</h1>
          <h3>{this.state.message}</h3>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
