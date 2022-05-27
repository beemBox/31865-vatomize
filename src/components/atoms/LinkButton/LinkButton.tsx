import React from 'react' //! por inercia lo import, innecesario
import './LinkButton.css'

const LinkButton = (props: {text: string}) => {
  return (
    <>
    <button className="link__btn">{props.text}</button>
    <hr />
    </>
  )
}

export default LinkButton