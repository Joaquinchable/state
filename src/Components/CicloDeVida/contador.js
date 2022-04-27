import React from 'react';
import Boton from './boton'

class ContadorClass extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            contador: 200
        }
    }

    handleClick = () => {
         // setState actuliza el estado incial 
       this.setState({
        // linea de Ejc
        contador: this.state.contador + 1
      
    })
    }

    render(){
    return(
       <>
        
        <div>
        Estado con Class 
        <br/>
          {this.state.contador}
          <br/>
         <Boton
           texto={this.state.contador}
           handleClick={this.handleClick}
         />

        </div>
    
      </>
    )
    }

}

export default ContadorClass;