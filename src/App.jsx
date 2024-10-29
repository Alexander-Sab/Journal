import { useState } from 'react';

import { LeftPanel } from './layouts/LeftPanel/LeftPanel.jsx';
import { Header } from './components/Header/Header.jsx';
import { JournalList } from './components/JournalList/JournalList.jsx';
import { JournalAddButton } from './components/JournalAddButton/JournalAddButton.jsx';
import { Body } from './layouts/Body/Body.jsx';
import { JournalForm } from './components/JournalForm/JournalForm.jsx';

import styles from './App.module.css';

const INITIAL_DATA = [
	// {
	// 	id: 1,
	// 	title: 'Подготовка к обновлениею курса',
	// 	date: new Date(),
	// 	text: 'Горные походы открывают удивительные природные ландшафты'
	// },
	// {
	// 	id: 2,
	// 	title: 'Поход в горы',
	// 	date: new Date(),
	// 	text: 'Думал что, что очень много времени'
	// }
];

function App() {
	const [items, setItems] = useState(INITIAL_DATA);
	const addItems = (item) => {
		setItems((oldItems) => [
			...oldItems,

			{
				text: item.text,
				title: item.title,
				date: new Date(item.date),
				id: oldItems.length > 0 ? Math.max(...oldItems.map((i) => i.id)) + 1 : 1
			}
		]);
	};

	return (
		<div className={styles.app}>
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList items={items}></JournalList>
			</LeftPanel>

			<Body>
				<JournalForm onSubmit={addItems} />
			</Body>
		</div>
	);
}

export default App;
