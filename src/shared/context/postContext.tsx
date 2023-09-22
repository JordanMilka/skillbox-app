import React from "react"
import { usePostData } from "../../hooks/usePostData"

export interface IPostContextData {
	id: string
	author: string
	title: string
	rating: string
	avatar: string
	previewImg: string
	dataPostUtc: string
}

export const postContext = React.createContext<Array<IPostContextData>>([])

export function PostContextProvider({ children }: { children: React.ReactNode }) {
	const [data] = usePostData()

	return (
		<>
			<postContext.Provider value={data}>{children}</postContext.Provider>
		</>
	)
}
