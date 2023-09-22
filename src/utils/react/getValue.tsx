import { pickFromSyntheticEvent } from "./pickFromSyntheticEvent"

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()("value") // В функции мы указываем тип элемента, к которому применяем и указываем ключ элемента
