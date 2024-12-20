import { useEffect, useReducer, useRef, useContext } from 'react';
import cn from 'classnames';

import { Button } from '../Button/Button.jsx';
import { Input } from '../Input/Input.jsx';

import { INITIAL_STATE, formReducer } from './JournalForm.state.js';
import { UserContext } from '../../context/user.context.jsx';
import styles from './JournalForm.module.css';

export function JournalForm({ onSubmit, data, onDelete }) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formState;
	const titleRef = useRef();
	const dateRef = useRef();
	const postRef = useRef();
	const { userId } = useContext(UserContext);

	const focusError = (isValid) => {
		switch (true) {
			case !isValid.title:
				titleRef.current.focus();
				break;
			case !isValid.date:
				dateRef.current.focus();
				break;
			case !isValid.post:
				postRef.current.focus();
				break;
		}
	};

	useEffect(() => {
		if (!data) {
			dispatchForm({ type: 'CLEAR' });
			dispatchForm({
				type: 'SET_VALUE',
				payload: { userId }
			});
		}
	}, [data]);

	useEffect(() => {
		let timerId;
		if (!isValid || !isValid || !isValid) {
			focusError(isValid);
			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET_VALIDITY' });
			}, 2000);
		}
		// Очистка
		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	useEffect(() => {
		if (isFormReadyToSubmit) {
			onSubmit(values);
			dispatchForm({ type: 'CLEAR' });
			dispatchForm({
				type: 'SET_VALUE',
				payload: { userId }
			});
		}
	}, [isFormReadyToSubmit, onSubmit, values, userId]);

	useEffect(() => {
		dispatchForm({
			type: 'SET_VALUE',
			payload: { userId }
		});
	}, [userId]);

	const onChange = (e) => {
		dispatchForm({
			type: 'SET_VALUE',
			payload: { [e.target.name]: e.target.value }
		});
	};

	const addJournalItem = (e) => {
		e.preventDefault();
		dispatchForm({ type: 'SUBMIT' });
	};

	const handleDelete = () => {
		onDelete(data.id);
		dispatchForm({ type: 'CLEAR' });
		dispatchForm({
			type: 'SET_VALUE',
			payload: { userId }
		});
	};
	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<div className={styles['form-row']}>
				<Input
					type="text"
					ref={titleRef}
					onChange={onChange}
					value={values.title}
					name="title"
					isValid={isValid.title}
					appearence="title"
				/>
				{data?.id && (
					<button
						className={styles.delete}
						type="button"
						onClick={handleDelete}
					>
						<img src="/archive.svg" alt="delete" />
					</button>
				)}
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="date" className={styles['form-label']}>
					<img
						src="/date.svg"
						alt="icon date"
						className={styles['icon-date']}
					/>
					<span>Дата</span>
				</label>
				<Input
					type="date"
					ref={dateRef}
					isValid={isValid.date}
					onChange={onChange}
					value={
						values.date
							? new Date(values.date).toISOString().slice(0, 10)
							: ''
					}
					name="date"
					id="date"
					onClick={(e) => {
						if (
							e.target.type === 'date' &&
							e.target === e.currentTarget
						) {
							e.target.showPicker();
						}
					}}
				/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="tag" className={styles['form-label']}>
					<img src="/folder.svg" alt="icon folder" />
					<span>Метки</span>
				</label>
				<Input
					type="text"
					onChange={onChange}
					id="tag"
					value={values.tag}
					name="tag"
				/>
			</div>
			<textarea
				ref={postRef}
				name="post"
				id=""
				onChange={onChange}
				value={values.post}
				cols="30"
				rows="10"
				className={cn(styles['input'], {
					[styles.invalid]: !isValid.post
				})}
			/>
			<Button>Сохранить</Button>
		</form>
	);
}
