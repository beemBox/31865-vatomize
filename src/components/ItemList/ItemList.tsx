import './ItemList.css'

const ItemList = ({title, children}) => (  
  <section className="section">
    <h2 className='section__heading'>{title}</h2>
    <div className="item-list">
      {children}
    </div>
  </section>
)

export default ItemList 