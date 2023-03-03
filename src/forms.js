import {useEffect, useState} from 'react';
import React from 'react';

export default function Form(props) {
		const [inputForm, setInputForm] = useState('')
		const inputElem = React.createRef();


		useEffect(() => {
				console.log(inputForm)
				setInputForm('')
		})
		const todoHigh = []
		function handleChange(e) {
				e.preventDefault()
				todoHigh.push(e.target[0].value)
				console.log(todoHigh)
				localStorage.setItem('todoHigh', JSON.stringify(todoHigh))
				setInputForm(e.target[0].value)
		}

		return (
					<form className="todo__addtask" id={props.id} onSubmit={handleChange}>
							<input type="text"
							       placeholder="Добавить важных дел"
							       className="todo__add"
							       id={props.id}
							       ref={inputElem}/>
							<button type="submit"
							        className="todo__plus"
							        id={props.id}/>
					</form>
		)
}