import './LinkButton.css'

const LinkButton = (props: {text: string}) => {
  return<>
    <button className="link__btn">{props.text}</button>
    <hr />
    </>
}

export default LinkButton