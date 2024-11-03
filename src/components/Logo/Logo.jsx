import { memo } from 'react';

import styles from './Logo.module.css';

function LogoComponent({ image }) {
	console.log('Logo ');
	return <img className={styles.logo} src={image} alt="Magazine logo" />;
}

export const Logo = memo(LogoComponent);
