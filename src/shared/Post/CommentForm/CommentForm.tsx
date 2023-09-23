import React, { ChangeEvent } from "react"
import styles from "./commentform.sass"
import { useForm } from "react-hook-form"
import { atom, useRecoilState } from "recoil"

export function CommentForm() {
	const commentText = atom({
		key: "commentText",
		default: "Hello world!",
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ defaultValues: { comment: "Hello! " } })

	const [value, setValue] = useRecoilState(commentText)
	const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setValue(event.target.value)
	}

	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit(data => {
				setValue(data.comment)
				alert("Данные отправлены: " + data.comment)
			})}
		>
			<p>{value}</p>
			<textarea {...register("comment", { minLength: { value: 7, message: "Введите минимум 7 символов." } })} onChange={onChange} className={styles.input} aria-invalid={errors.comment?.message ? "true" : undefined} />
			<p>{errors.comment?.message}</p>
			<button type="submit" className={styles.button}>
				Комментировать
			</button>
		</form>
	)
}
