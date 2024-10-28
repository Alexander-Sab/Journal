import { CardButton } from '../CardButton/CardButton.jsx';
import './JournalAddButton.css';

export function JournalAddButton() {
	return (
		<CardButton className="journal-add">
			<img className="plus" src="/plus.svg" alt="plus" />
			Новое воспоминание
		</CardButton>
	);
}
