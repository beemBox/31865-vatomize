import React from 'react' //! por inercia lo import, innecesario
import './LinkButton.css'

const LinkButton = (props: {text: string}) => {
  return <button className="btn__link">{props.text}</button> //? oneline se puede retornar sin () similar a arrow fn's
}

export default LinkButton