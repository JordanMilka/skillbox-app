import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react"
import styles from "./controledform.sass"

interface IControledFormProps {
	author: string
	onClose: () => void
}

export function ControledForm({ author, onClose }: IControledFormProps) {
	const [value, setValue] = useState(`${author}, `)
	const ref = useRef<HTMLTextAreaElement>(null)

	useEffect(() => {
		ref.current?.focus()
		ref.current?.setSelectionRange(value.length, value.length)
	}, [])

	function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
		setValue(event.target.value)
	}

	function handleSubmit(event: FormEvent) {
		event.preventDefault()
		onClose()
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<textarea className={styles.input} value={value} onChange={handleChange} ref={ref}></textarea>
			<button type="submit" className={styles.button}>
				Комментировать
			</button>
		</form>
	)
}
