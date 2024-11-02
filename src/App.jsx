import { LeftPanel } from './layouts/LeftPanel/LeftPanel.jsx';
import { Header } from './components/Header/Header.jsx';
import { JournalList } from './components/JournalList/JournalList.jsx';
import { JournalAddButton } from './components/JournalAddButton/JournalAddButton.jsx';
import { Body } from './layouts/Body/Body.jsx';
import { JournalForm } from './components/JournalForm/JournalForm.jsx';
import { useLocalStorage } from './hooks/use-localstorage.hooks.js';

import styles from './App.module.css';

// const INITIAL_DATA = [
// 	{
// 		id: 1,
// 		title: 'Подготовка к обновлениею курса',
// 		date: new Date(),
// 		text: 'Горные походы открывают удивительные природные ландшафты'
// 	},
// 	{
// 		id: 2,
// 		title: 'Поход в горы',
// 		date: new Date(),
// 		text: 'Думал что, что очень много времени'
// 	}
// ];

function mapItems(items) {
	if (!items) {
		return [];
	}
	return items.map((i) => ({ ...i, date: new Date(i.date) }));
}

function App() {
	const [items, setItems] = useLocalStorage(['data']);

	const addItems = (item) => {
		setItems([
			...mapItems(items),

			{
				post: item.post,
				title: item.title,
				date: new Date(item.date),
				id:
					items.length > 0
						? Math.max(...items.map((i) => i.id)) + 1
						: 1
			}
		]);
	};

	return (
		<div className={styles.app}>
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList items={mapItems(items)}></JournalList>
			</LeftPanel>

			<Body>
				<JournalForm onSubmit={addItems} />
			</Body>
		</div>
	);
}

export default App;
