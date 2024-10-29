import styles from './LeftPanel.module.css';

export function LeftPanel({ children }) {
	return <div className={styles['left-panel']}>{children}</div>;
}
