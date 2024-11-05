import { useState } from 'react';

import { LeftPanel } from './layouts/LeftPanel/LeftPanel.jsx';
import { Header } from './components/Header/Header.jsx';
import { JournalList } from './components/JournalList/JournalList.jsx';
import { JournalAddButton } from './components/JournalAddButton/JournalAddButton.jsx';
import { Body } from './layouts/Body/Body.jsx';
import { JournalForm } from './components/JournalForm/JournalForm.jsx';
import { useLocalStorage } from './hooks/use-localstorage.hooks.js';
import { UserContextProvider } from './context/user.context.jsx';

import styles from './App.module.css';

function mapItems(items) {
	if (!items) {
		return [];
	}
	return items.map((i) => ({ ...i, date: new Date(i.date) }));
}

function App() {
	const [items, setItems] = useLocalStorage('data', []);
	const [selectedItem, setSelectedItem] = useState(null);

	const addItems = (item) => {
		const validItems = Array.isArray(items) ? items : []; // Проверка на массив
		if (!item.id) {
			setItems([
				...mapItems(validItems),

				{
					...item,
					date: new Date(item.date),
					id:
						validItems.length > 0
							? Math.max(...validItems.map((i) => i.id)) + 1
							: 1
				}
			]);
		} else {
			setItems([
				...mapItems(items).map((i) => {
					if (i.id === item.id) {
						return { ...item };
					}
					return i;
				})
			]);
		}
	};

	const deleteItem = (id) => {
		setItems([...mapItems(items).filter((i) => i.id !== id)]);
		setSelectedItem({});
	};

	return (
		<UserContextProvider>
			<div className={styles.app}>
				<LeftPanel>
					<Header />
					<JournalAddButton clearForm={() => setSelectedItem(null)} />
					<JournalList
						items={mapItems(items)}
						setItem={setSelectedItem}
					></JournalList>
				</LeftPanel>

				<Body>
					<JournalForm
						onSubmit={addItems}
						data={selectedItem}
						onDelete={deleteItem}
					/>
				</Body>
			</div>
		</UserContextProvider>
	);
}

export default App;
