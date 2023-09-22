import React, { useEffect, useRef } from "react"
import ReactDOM from "react-dom"
import styles from "./dropdowncontent.sass"

interface IDropdownContent {
	onClick: () => void
	children: React.ReactNode
	postID: React.ReactNode
	onClose?: () => void
}

export function DropdownContent({ postID, onClick, children, onClose }: IDropdownContent) {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		function handleClick(event: MouseEvent) {
			if (event.target instanceof Node && !ref.current?.contains(event.target)) {
				onClose?.()
			}
		}

		document.addEventListener("click", handleClick)

		return () => {
			document.removeEventListener("click", handleClick)
		}
	}, [])

	const node = document.querySelector(`#modal_root`)
	if (!node) return null

	return ReactDOM.createPortal(
		<div className={styles.listContainer} ref={ref}>
			<div className={styles.list} onClick={onClick}>
				{children}
			</div>
		</div>,
		node
	)
}
