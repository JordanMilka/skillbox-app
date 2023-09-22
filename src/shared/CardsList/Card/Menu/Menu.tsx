import React from "react"
import styles from "./menu.sass"
import { Dropdown } from "../../../Dropdown"
import { EColor, Text } from "../../../Text"
import { MenuItemsList } from "./MenuItemsList"
import { EIcons, Icon } from "../../../Icon"

interface IMenuProps {
	postID: string
}

export function Menu({ postID }: IMenuProps) {
	return (
		<div className={styles.menu} id={postID}>
			<Dropdown
				postID={postID}
				button={
					<button className={styles.menuButton}>
						<Icon name={EIcons.menu} size={16} />
					</button>
				}
			>
				<div className={styles.dropdown}>
					<MenuItemsList postID={postID} />
					<button className={styles.closeButton}>
						<Text mobileSize={12} size={14} color={EColor.grey66}>
							Закрыть
						</Text>
					</button>
				</div>
			</Dropdown>
		</div>
	)
}
