import React, { useEffect } from "react"
import { useUserData } from "../../hooks/useUserData"
import { saveToken } from "../../hooks/useToken"

export interface IUserContextData {
	name?: string
	iconImg?: string
}

export const userContext = React.createContext<IUserContextData>({})

export function UserContextProvider({ children }: { children: React.ReactNode }) {
	const { data } = useUserData()

	return (
		<>
			<userContext.Provider value={data}>{children}</userContext.Provider>
		</>
	)
}
