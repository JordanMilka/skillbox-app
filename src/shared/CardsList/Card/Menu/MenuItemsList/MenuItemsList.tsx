import React from "react"
import styles from "./menuitemslist.sass"
import { Text, EColor } from "../../../../Text"
import { EIcons, Icon } from "../../../../Icon"
import { GenericList } from "../../../../GenericList"
import { generateID } from "../../../../../utils/react/generateRandomIndex"
import classNames from "classnames"

interface IMenuItemsListProps {
	postID: string
}

const menuItemsList = classNames([styles.menuItemsList], [styles.menuItemsListMD])

const LIST = [
	{
		element: (
			<>
				<Icon name={EIcons.comment} size={16} />
				<Text size={14} color={EColor.grey99}>
					Комментарии
				</Text>
			</>
		),
		className: styles.menuItem,
		As: "li" as const,
	},
	{
		element: (
			<>
				<Icon name={EIcons.repost} size={16} />
				<Text size={14} color={EColor.grey99}>
					Поделиться
				</Text>
			</>
		),
		className: styles.menuItem,
		As: "li" as const,
	},
	{
		element: (
			<>
				<Icon name={EIcons.block} size={16} />
				<Text size={14} color={EColor.grey99}>
					Скрыть
				</Text>
			</>
		),
		className: styles.menuItem,
		As: "li" as const,
	},
	{
		element: (
			<>
				<Icon name={EIcons.save} size={16} />
				<Text size={14} color={EColor.grey99}>
					Сохранить
				</Text>
			</>
		),
		className: styles.menuItem,
		As: "li" as const,
	},
	{
		element: (
			<>
				<Icon name={EIcons.warning} size={16} />
				<Text size={14} color={EColor.grey99}>
					Пожаловаться
				</Text>
			</>
		),
		className: styles.menuItem,
		As: "li" as const,
	},
].map(generateID)

export function MenuItemsList({ postID }: IMenuItemsListProps) {
	return (
		<>
			<ul className={menuItemsList}>
				<GenericList list={LIST}></GenericList>
			</ul>
		</>
	)
}
