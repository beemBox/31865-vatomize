// import VALogo from '../../../assets/static/logo.png'
import './Logo.css'
//* Mejor hago el logo con CSS

const Logo = (props: {className: string}) => {
  const {className} = props
  return <a href="/">
      <div className={className}>
        <span className="logo__text-up">vatomize</span>
        <span className="logo__text-bottom">vapes</span>
      </div>
    </a>
}

export default Logo