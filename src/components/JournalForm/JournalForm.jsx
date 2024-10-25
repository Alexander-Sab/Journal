import { useState } from 'react';

import { Button } from '../Button/Button.jsx';

import './JournalForm.css';

export function JournalForm() {
	const [inputData, setInputData] = useState('');
	const [state, setState] = useState({
		age: 31
	});
	const [state2, setState2] = useState([1, 2, 3]);

	const inputChange = (event) => {
		setInputData(event.target.value);
		console.log(inputData);
	};
	const addJournalItem = (e) => {
		e.preventDefault();
		state.age = 40;
		setState({ ...state });

		state2.push(4);
		setState2([...state2]);
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
	};
	return (
		<form className="journal-form" onSubmit={addJournalItem}>
			{state.age}
			{state2.length}
			<input type="text" name="title" />
			<input type="date" name="date" />
			<input type="text" name="tag" value={inputData} onChange={inputChange} />
			<textarea name="post" id="" cols="30" rows="10" />
			<Button
				text="Сохранить"
				onClick={() => {
					console.log('Нажали');
				}}
			/>
		</form>
	);
}
