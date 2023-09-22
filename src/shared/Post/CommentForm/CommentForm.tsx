import React, { useState } from "react"
import styles from "./commentform.sass"
import { useForm } from "react-hook-form"

export function CommentForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ defaultValues: { comment: "Hello! " } })
	const [value, setValue] = useState("")

	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit(data => {
				setValue(data.comment)
				alert("Данные отправлены: " + data.comment)
			})}
		>
			<textarea {...register("comment", { minLength: { value: 7, message: "Введите минимум 7 символов." } })} className={styles.input} aria-invalid={errors.comment?.message ? "true" : undefined} />
			<p>{errors.comment?.message}</p>
			<button type="submit" className={styles.button}>
				Комментировать
			</button>
		</form>
	)
}
