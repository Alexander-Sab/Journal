import styles from './Journalltem.module.css';

export function JournalItem({ title, date, text }) {
	// const formattedDate = new Intl.DateTimeFormat('ru-RU', {
	// 	day: '2-digit',
	// 	month: '2-digit',
	// 	year: 'numeric'
	// }).format(date);
	return (
		<>
			<h2 className={styles['journal-item__header']}>{title}</h2>
			<h2 className={styles['journal-item__body']}>
				<div className={styles['journal-item__date']}>
					{date.toLocaleString()}
				</div>
				<div className={styles['journal-item__text']}>{text}</div>
			</h2>
		</>
	);
}
