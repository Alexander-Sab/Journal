import { useState, useEffect } from 'react';

// Функция useLocalStorage теперь принимает начальное значение
export function useLocalStorage(key, initialValue) {
	const [data, setData] = useState(() => {
		const res = JSON.parse(localStorage.getItem(key));
		// Если res не null, возвращаем его, иначе возвращаем initialValue
		return res !== null ? res : initialValue;
	});

	useEffect(() => {
		const res = JSON.parse(localStorage.getItem(key));
		if (res !== null) {
			setData(res);
		}
	}, [key]);

	const saveData = (newData) => {
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	};

	return [data, saveData];
}
