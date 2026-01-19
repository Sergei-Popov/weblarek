import { IOrder, IOrderError, IOrderResult, IProductList } from '../../types'
import { Api } from '../base/Api'

/**
 * Класс для работы с API WebLarek
 */
export class WebLarekApi {
	readonly apiModel: Api

	constructor(baseUrl: string, options: RequestInit = {}) {
		this.apiModel = new Api(baseUrl, options)
	}

	/**
	 * Получение списка товаров
	 * @param uri - URI запроса
	 * @returns Список товаров
	 */
	public async get(uri: string): Promise<IProductList> {
		return await this.apiModel.get(uri).then(data => {
			return data as IProductList
		})
	}

	/**
	 * Оформление заказа
	 * @param uri - URI запроса
	 * @param order - Данные заказа
	 * @returns Результат оформления заказа или ошибка
	 */
	public async post(
		uri: string,
		order: IOrder
	): Promise<IOrderResult | IOrderError> {
		return await this.apiModel.post(uri, order).then(data => {
			return data as IOrderResult | IOrderError
		})
	}
}
