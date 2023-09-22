import React, { useEffect, useState } from "react"
import "./main.global.sass"
import { hot } from "react-hot-loader/root"
import { Layout } from "./shared/Layout"
import { UserContextProvider } from "./shared/context/userContext"
import { applyMiddleware, createStore } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { rootReducer } from "./store/store"
import thunk from "redux-thunk"
import { saveToken } from "./hooks/useToken"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { CardsList } from "./shared/CardsList"
import { NoMatch } from "./shared/NoMatch"
import { Post } from "./shared/Post"

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

function AppComponent() {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
		// @ts-ignore
		store.dispatch(saveToken())
	}, [])
	return (
		<Provider store={store}>
			{mounted && (
				<BrowserRouter>
					<UserContextProvider>
						<Routes>
							<Route path="/" element={<Layout />}>
								<Route index={true} element={<Navigate to="/posts" />} />
								<Route path="/auth" element={<Navigate to="/posts" />} />
								<Route path="/posts/*" element={<CardsList />}>
									<Route path=":id" element={<Post />} />
								</Route>
								<Route path="*" element={<NoMatch />} />
							</Route>
						</Routes>
					</UserContextProvider>
				</BrowserRouter>
			)}
		</Provider>
	)
}

export const App = hot(() => <AppComponent />)
