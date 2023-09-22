import React from "react"
import styles from "./comment.sass"
import { Data } from "./Data"
import { Controls } from "./Controls"
import { Counter } from "./Counter"

interface ICommentData {
	id: string
	author: string
	text: string
	rating: string
	dataCommentUtc: string
}

export function Comment({ id, author, text, rating, dataCommentUtc }: ICommentData) {
	return (
		<div className={styles.body}>
			<Counter rating={rating} />
			<div className={styles.content}>
				<Data author={author} dataCommentUtc={dataCommentUtc} />
				{text}
				<Controls postID={id} author={author} />
			</div>
		</div>
	)
}
