import React from "react"

interface IItem {
	id: string
	element: React.ReactNode
	onClick?: (id: string) => void
	className?: string
	As?: "a" | "li" | "button" | "div"
	href?: string
}

interface IGenericListProps {
	list: IItem[]
	// onClick: (id: string) => void // Можно задать глобально
}

const NOOP = () => {} // Позволяет не делать if на проверку наличия значения (например в onClick)

export function GenericList({ list }: IGenericListProps) {
	return (
		<>
			{list.map(({ As = "div", element, onClick = NOOP, className, id, href }) => (
				<As className={className} onClick={() => onClick(id)} key={id} href={href}>
					{element}
				</As>
			))}
		</>
	)
}
