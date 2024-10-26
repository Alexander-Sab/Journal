import { useState } from 'react';

import { JournalItem } from './components/Journalltem/Journalltem.jsx';
import { CardButton } from './components/CardButton/CardButton.jsx';
import { LeftPanel } from './layouts/LeftPanel/LeftPanel.jsx';
import { Header } from './components/Header/Header.jsx';
import { JournalList } from './components/JournalList/JournalList.jsx';
import { JournalAddButton } from './components/JournalAddButton/JournalAddButton.jsx';
import { Body } from './layouts/Body/Body.jsx';
import { JournalForm } from './components/JournalForm/JournalForm.jsx';

import './App.css';

const INITIAL_DATA = [
	{
		title: 'Подготовка к обновлениею курса',
		date: new Date(),
		text: 'Горные походы открывают удивительные природные ландшафты'
	},
	{
		title: 'Поход в горы',
		date: new Date(),
		text: 'Думал что, что очень много времени'
	}
];

function App() {
	const [items, setItems] = useState(INITIAL_DATA);
	const addItems = (item) => {
		setItems((oldItems) => [
			...oldItems,

			{
				text: item.text,
				title: item.title,
				date: new Date(item.date)
			}
		]);
	};

	return (
		<div className="app">
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList>
					{items.map((el) => (
						<CardButton>
							<JournalItem title={el.title} text={el.text} date={el.date} />
						</CardButton>
					))}
				</JournalList>
			</LeftPanel>

			<Body>
				<JournalForm onSubmit={addItems} />
			</Body>
		</div>
	);
}

export default App;
