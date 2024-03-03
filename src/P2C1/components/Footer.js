import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')
    
    function handleInput(e) {
		setInputValue(e.target.value)
	}
    function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}
	function buttonClick(inputValue) {
		if (!inputValue === "@"){ 
			return {handleBlur}
		} else {
			alert(`Votre mail a été bien saisie : ${inputValue}`)
			
		}


	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
			<button onClick={() => buttonClick(inputValue)}>Envoyer</button>
		</footer>
	)
}

export default Footer