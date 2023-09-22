import React, { FormEvent, useRef } from "react"
import styles from "./uncontroledform.sass"

export function UncontroledForm() {
	const ref = useRef<HTMLTextAreaElement>(null)

	function handleSubmit(event: FormEvent) {
		event.preventDefault()
		console.log(ref.current?.value)
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<textarea className={styles.input} ref={ref}></textarea>
			<button type="submit" className={styles.button}>
				Комментировать
			</button>
		</form>
	)
}
