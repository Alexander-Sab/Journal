import { SelectUser } from '../SelectUser/SelectUser';
import styles from './Header.module.css';

export function Header() {
	return (
		<>
			<img className={styles.logo} src="/Group.svg" alt="Magazine logo" />
			<SelectUser />
		</>
	);
}
