import './Logo.css'

const Logo = (props: {className: string}) => {
  const {className} = props
  return <>
      <div className={className}>
        
        <span className="logo__text-up">vatomize</span>
        <span className="logo__text-bottom">vapes</span>
      </div>
    </>
}

export default Logo