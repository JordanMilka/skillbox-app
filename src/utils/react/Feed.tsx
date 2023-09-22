import React from "react"
import { Block } from "./Block"
// import { withIdKey } from "./withIdKey"

export interface IBlockProps {
	title: string
	id: string
}
// export function Feed(props: { blocks: IBlockProps[] }) {
// 	// Feed рендерит несколько блоков. Рендеринг в цикле
// 	return (
// 		// <div>
// 		// 	{props.blocks.map(block => (
// 		// 		<Block key={block.id} {...block} />
// 		// 	))}
// 		// </div>
// 		// <div>{props.blocks.map(withIdKey(Block))}</div>
// 	)
// }
