import { CardButton } from '../CardButton/CardButton.jsx';
import styles from './JournalAddButton.module.css';

export function JournalAddButton({ clearForm }) {
	return (
		<CardButton className={styles['journal-add']} onClick={clearForm}>
			<img className={styles.plus} src="/plus.svg" alt="plus" />
			Новое воспоминание
		</CardButton>
	);
}
