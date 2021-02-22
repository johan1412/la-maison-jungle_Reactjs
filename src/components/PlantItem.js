import '../styles/PlantItem.css';


function PlantItem({ name, cover, id, price }) {
    return <li key={id} className='lmj-plant-item'>
        <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
        {name}
        <strong>{price}€</strong>
    </li>
}

export default PlantItem