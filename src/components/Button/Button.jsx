import styles from './Button.module.css';

export function Button({ children, onClick }) {
	return (
		<button
			className={`${styles.button} ${styles.accent}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
