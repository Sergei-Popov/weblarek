import { IProduct } from '../../types'

/**
 * Класс, представляющий корзину для хранения товаров.
 */
export class Basket {
	private items: IProduct[]

	constructor() {
		this.items = []
	}

	/**
	 * Возвращает массив всех товаров, находящихся в корзине.
	 * @returns IProduct[]
	 */
	public getItems(): IProduct[] {
		return this.items
	}

	/**
	 * Добавляет товар, полученный в параметре, в корзину.
	 * @param item - Объект товара, который необходимо добавить в корзину.
	 */
	public add(item: IProduct): void {
		this.items.push(item)
	}

	/**
	 * Удаляет товар, полученный в параметре, из корзины.
	 * @param item - Объект товара, который необходимо удалить из корзины.
	 */
	public remove(item: IProduct): void {
		this.items = this.items.filter(i => i.id !== item.id)
	}

	/**
	 * Очищает корзину, удаляя все товары.
	 */
	public clear(): void {
		this.items = []
	}

	/**
	 * Возвращает общую стоимость всех товаров в корзине.
	 * @returns number
	 */
	public getTotal(): number {
		return this.items
			.filter(item => item.price != null)
			.reduce((sum, item) => sum + (item.price ?? 0), 0)
	}

	/**
	 * Возвращает количество товаров в корзине.
	 * @returns number
	 */
	public getCount(): number {
		return this.items.length
	}

	/**
	 * Проверяет наличие товара в корзине по его идентификатору.
	 * @param id - Уникальный идентификатор товара для поиска.
	 * @returns `true`, если товар с указанным идентификатором найден в корзине, иначе `false`.
	 */
	public contains(id: string): boolean {
		const obj = this.items.find(item => item.id === id)
		if (obj) {
			return true
		}
		return false
	}
}
