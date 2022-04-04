/**
 * 
 * Un componente React creado en una función (functional component).
 *  Cuando hagamos click en el botón, este va a tomar un color aleatorio RGB
 * Voy a definir un estado para el botón que sea el color de fondo actual
 *  * Cuando hagamos click en el botón, queremos cambiar el color de fondo de toda la APP
 */
 function Button(props) {
  
    // button si dispone del evento onClick
  
    return (<button onClick={props.changeColor}
                    style={{ 'font-size': '20px' }}
                    className='Btn'> {props.texto}
            </button>);
  }

export default Button;