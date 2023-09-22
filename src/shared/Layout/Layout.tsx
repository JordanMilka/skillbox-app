import React from "react"
import styles from "./layout.sass"
import { Header } from "../Header"
import { Content } from "../Content"
import { PostContextProvider } from "../context/postContext"
import { Outlet } from "react-router-dom"

interface ILayoutProps {
	children?: React.ReactNode
}

export function Layout({ children }: ILayoutProps) {
	return (
		<div className={styles.layout}>
			<Header />
			<Content>
				<PostContextProvider>
					<Outlet />
					{children}
				</PostContextProvider>
			</Content>
		</div>
	)
}
