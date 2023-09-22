import React, { useContext } from "react"
import styles from "./dropdown.sass"
import { DropdownContent } from "./DropdownContent"
import { postContext } from "../context/postContext"

interface IDropdownProps {
	button: React.ReactNode
	children: React.ReactNode
	isOpen?: boolean
	onOpen?: () => void
	onClose?: () => void
	postID?: string
}

const NOOP = () => {}

export function Dropdown({ postID, button, children, isOpen, onClose = NOOP, onOpen = NOOP }: IDropdownProps) {
	const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen)
	React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen])
	React.useEffect(() => (isDropdownOpen ? onOpen() : onClose()), [isDropdownOpen])

	const handleOpen = () => {
		if (isOpen === undefined) {
			setIsDropdownOpen(!isDropdownOpen)
		} else {
			setIsDropdownOpen(!isDropdownOpen)
		}
	}

	return (
		<div className={styles.dropdownContainer}>
			<div onClick={handleOpen}>{button}</div>
			{isDropdownOpen && (
				<DropdownContent postID={postID} onClick={() => setIsDropdownOpen(false)} onClose={() => setIsDropdownOpen(false)}>
					{children}
				</DropdownContent>
			)}
		</div>
	)
}
