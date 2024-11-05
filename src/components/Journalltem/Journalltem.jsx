import styles from './Journalltem.module.css';

export function JournalItem({ title, post, date }) {
	return (
		<>
			<h2 className={styles['journal-item__header']}>{title}</h2>
			<h2 className={styles['journal-item__body']}>
				<div className={styles['journal-item__date']}>
					{date.toLocaleString()}
				</div>
				<div className={styles['journal-item__text']}>{post}</div>
			</h2>
		</>
	);
}
