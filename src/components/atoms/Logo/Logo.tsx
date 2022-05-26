import VALogo from '../../../assets/static/logo.png'

const Logo = (props: {className: string}) => {
  const {className} = props
  return <a className={className} href="/">
      <img src={VALogo} alt='VAtomize' />
    </a>
}

export default Logo