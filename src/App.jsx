// import { Button } from './components/Button/Button.jsx';
import { JournalItem } from './components/Journalltem/Journalltem.jsx';
import { CardButton } from './components/CardButton/CardButton.jsx';
import { LeftPanel } from './layouts/LeftPanel/LeftPanel.jsx';
import { Header } from './components/Header/Header.jsx';
import { JournalList } from './components/JournalList/JournalList.jsx';
import { JournalAddButton } from './components/JournalAddButton/JournalAddButton.jsx';
import { Body } from './layouts/Body/Body.jsx';
import { JournalForm } from './components/JournalForm/JournalForm.jsx';

import './App.css';
import { Button } from './components/Button/Button.jsx';

function App() {
	const data = [
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

	return (
		<div className="app">
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList>
					{[<Button>1</Button>, <Button>2</Button>]}
					<CardButton>
						<JournalItem
							title={data[0].title}
							text={data[0].text}
							date={data[0].date}
						/>
					</CardButton>
					<CardButton>
						<JournalItem
							title={data[1].title}
							text={data[1].text}
							date={data[1].date}
						/>
					</CardButton>
				</JournalList>
			</LeftPanel>

			<Body>
				<JournalForm />
			</Body>
		</div>
	);
}

export default App;
