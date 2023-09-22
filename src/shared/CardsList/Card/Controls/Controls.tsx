import React from "react"
import styles from "./controls.sass"
import { KarmaCounter } from "./KarmaCounter"
import { Comments } from "./Comments"
import { ActionButtons } from "./ActionButtons"

interface IControlsProps {
	rating: string
}

export function Controls({ rating }: IControlsProps) {
	return (
		<div className={styles.controls}>
			<KarmaCounter rating={rating} />

			<Comments />

			<ActionButtons />
		</div>
	)
}
