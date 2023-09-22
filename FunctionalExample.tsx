// Карирование - отложенный вызов функции

// import { withKey } from "./src/utils/react/withKey"

// function add(leftSide: number) {
// 	return (rightSide: number) => leftSide + rightSide // Принимает леву. сторону, возвращает функции, принимающую правую сторону, в итоге итоговый return возвращает сумму чисел
// }

const add = (leftSide: number) => (rightSide: number) => leftSide + rightSide // Запись такой функции через стрелочную

add(1)(1) // -> 2

const addOne = add(1) // add с аргументом 1 возвращает функцию, которая принимает другой аргумент
const addSix = add(6)

addOne(5)

// Функция add - функция высшего порядка. Функция, которая принимает или возвращает другую функцию

window.addEventListener("resize", () => {}) // Пример функции высшего порядка, т.к. она принимает другую функцию Callback

function addEventListenerWithDispose(element: any, name: any, handler: any) {
	// при установке такого AEL мы можем получить функцию, которую можем вызвать для того, чтобы убрать эвент
	element.addEventListener(name, handler)
	return () => element.removeEventListener(name, handler)
}

// AELWD тоже функция наивысшего порядка, т.к. она принимает функцию и возвращает другую функцию
const dispose = addEventListenerWithDispose(window, "resize", () => {
	console.log("resize")
	dispose()
})

// const withIndexKey = withKey() // Если не был передан ключ, то ключ будет индексом элемента в массиве
