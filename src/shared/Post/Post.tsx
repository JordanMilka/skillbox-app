import React, { useEffect, useRef } from "react"
import ReactDOM from "react-dom"
import styles from "./post.sass"
import { CommentsWrapper } from "./CommentsWrapper"
import { CommentForm } from "./CommentForm"
import { useNavigate, useParams } from "react-router-dom"

type TParams = {
	id: string
}

export function Post() {
	const ref = useRef<HTMLDivElement>(null)
	let history = useNavigate()
	let { id } = useParams()
	console.log(id)

	useEffect(() => {
		function handleClick(event: MouseEvent) {
			if (event.target instanceof Node && !ref.current?.contains(event.target)) {
				history("/posts")
			}
		}

		document.addEventListener("click", handleClick)

		return () => {
			document.removeEventListener("click", handleClick)
		}
	}, [])

	const node = document.querySelector("#modal_root")
	if (!node) return null

	return ReactDOM.createPortal(
		<div className={styles.modal} ref={ref}>
			<h2>Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты.</h2>

			<div className={styles.content}>
				<p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Которое заглавных речью раз на берегу предупреждал решила предложения!</p>
				<p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Которое заглавных речью раз на берегу предупреждал решила предложения!</p>
				<p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Которое заглавных речью раз на берегу предупреждал решила предложения!</p>
			</div>
			<CommentForm />
			<CommentsWrapper postID={id} />
		</div>,
		node
	)
}
