import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('');

    function handleBlur() {
        if(!inputValue.includes('@')) {
            alert('Attention, l\'email doit contenir un \'@\'');
        }
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				la maison jungle
			</div>
			<div className='lmj-footer-elem'>pour vous sentir chez vous</div>
		</footer>
	)
}

export default Footer