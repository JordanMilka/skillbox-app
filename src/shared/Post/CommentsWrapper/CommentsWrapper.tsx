import React from "react"
import styles from "./commentsWrapper.sass"
import { useCommentsData } from "../../../hooks/useCommentsData"
import { Comment } from "./Comment/Comment"

interface ICommentsProps {
	postID?: string
}

export function CommentsWrapper({ postID }: ICommentsProps) {
	const [data] = useCommentsData(postID)

	return (
		<ul className={styles.list}>
			{data.map(comment => (
				<Comment key={comment.id} id={comment.id} dataCommentUtc={comment.dataCommentUtc} text={comment.text} author={comment.author} rating={comment.rating} />
			))}
		</ul>
	)
}
