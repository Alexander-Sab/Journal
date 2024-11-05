import { useState } from 'react';
import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';
import { SelectUser } from '../SelectUser/SelectUser';
//import styles from './Header.module.css';

const logos = ['/Group.svg', '/vite.svg'];

export function Header() {
	const [logoIndex, setLogoIndex] = useState(0);

	const toggleLogo = () => {
		setLogoIndex((state) => Number(!state));
	};

	return (
		<>
			<Logo image={logos[logoIndex]} />
			<SelectUser />
			<Button onClick={toggleLogo}>Сменить логотип</Button>
		</>
	);
}
