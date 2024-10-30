import styles from './Body.module.css';

export function Body({ children }) {
	return <div className={styles.body}>{children}</div>;
}
