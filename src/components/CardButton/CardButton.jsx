import styles from './CardButton.module.css';

export function CardButton({ children, className }) {
	const cl = `${styles['card-button ']}  ${className ? '' + className : ''}`;
	return <button className={cl}>{children}</button>;
}
