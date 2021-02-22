import PlantItem from './PlantItem';
import { plantList } from '../datas/plantList.js';
import Categories from './Categories';
import '../styles/ShoppingList.css';
import { useState } from 'react';


function ShoppingList({cart, updateCart}) {
    const [activeCategory, setActiveCategory] = useState('')

    let categories = []
    plantList.forEach((plant) => (!categories.includes(plant.category) && categories.push(plant.category)));
    
    function addToCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name);
        if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
    }

	return <div className="lmj-shopping-list">
        <Categories 
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
        />
        <ul className='lmj-plant-list'>
			{plantList.map(({ name, cover, id, price, category}) => (
                (!activeCategory || activeCategory === category) ? (
                    <div key={id} className='lmj-list-item'>
                        <PlantItem name={name} cover={cover} id={id} price={price} />
                        <button className='button-add-cart' onClick={() => addToCart(name, price)}>ajouter au panier</button>
                    </div>
                ) : (
                    null
                )
            ))}
		</ul>
    </div>
}


export default ShoppingList