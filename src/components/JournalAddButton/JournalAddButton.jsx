import { CardButton } from '../CardButton/CardButton.jsx';
import styles from './JournalAddButton.module.css';

export function JournalAddButton() {
	return (
		<CardButton className={styles['journal-add']}>
			<img className={styles.plus} src="/plus.svg" alt="plus" />
			Новое воспоминание
		</CardButton>
	);
}
