import React from "react"
import styles from "./data.sass"

interface IDataProps {
	author: string
	dataCommentUtc: string
}

export function Data({ author, dataCommentUtc }: IDataProps) {
	const date = new Date(Number(dataCommentUtc) * 1000)

	return (
		<div className={styles.data}>
			<a href="#">{author}</a>
			<div className={styles.date}>{date.getDate() + "." + date.getMonth() + "." + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes()}</div>
		</div>
	)
}
