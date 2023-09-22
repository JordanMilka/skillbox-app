import React from "react"
import styles from "./nomatch.sass"
import { useLocation } from "react-router-dom"

export function NoMatch() {
	let location = useLocation()
	return (
		<div className={styles.wrapper}>
			<img src="https://i.pinimg.com/564x/7c/1c/a4/7c1ca448be31c489fb66214ea3ae6deb.jpg" alt="Ошибка" />
			<p>
				<b>Ошибка 404</b> - страница <b>'{location.pathname}'</b> не найдена
			</p>
			<a href="/posts" className={styles.button}>
				Вернуться на главную
			</a>
		</div>
	)
}
