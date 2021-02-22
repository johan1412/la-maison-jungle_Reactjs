import '../styles/Cart.css';
import { useState, useEffect } from 'react';


function Cart({cart, updateCart}) {
    const [isOpen, setIsOpen] = useState(true);
    const total = cart.reduce((accumulator, current) => accumulator + (current.price * current.amount), 0);
    
    useEffect(() => {
        document.title = 'lmj: ' + total + '€ d\'achats';
    }, [total])

    return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
            {cart.length > 0 ? (
                <div>
                    <ul>
                        {cart.map(({name, price, amount}, index) => (
                            <div key={`${name}-${index}`}>
                                {name} {price} € x {amount}
                            </div>
                        ))}
                    </ul>
                    <h3>Total : {total}€</h3>
                    <button onClick={() => updateCart([])}>vider le panier</button>
                </div>
            ) : (
                <div>Votre panier est vide</div>
            )}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart