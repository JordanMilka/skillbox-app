export function stopPropagation<T extends (e: any) => void>(fn: T) {
	// Ограничиваем, чтобы это была именно функция
	return <E extends React.SyntheticEvent<any>>(e: E) => {
		//Ограничиваем, чтобы функция принимала только эвент
		e.stopPropagation()
		fn(e)
	}
}
