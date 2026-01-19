import './scss/styles.scss'

import { Products, Basket, Buyer, WebLarekApi } from './components/Models'

import { apiProducts } from './utils/data'

const productsModel = new Products()
const basketModel = new Basket()
const buyerModel = new Buyer()
const apiModel = new WebLarekApi(
	import.meta.env.VITE_API_ORIGIN + '/api/weblarek'
)

productsModel.setItems(apiProducts.items)

basketModel.add(apiProducts.items[0])

buyerModel.setEmail('mail@mail.com')
buyerModel.setPhone('+1234567890')
buyerModel.setAddress('Chelyabinsk, Lenina St, 5')
buyerModel.setPayment('card')

console.log('Массив товаров из каталога: ', productsModel.getItems())
console.log('Товар из корзины: ', basketModel.getItems())
console.log('Данные покупателя: ', buyerModel.getData())

const productsData = await apiModel.get('/product/')
console.log('Массив товаров с сервера: ', productsData.items)

const orderResult = await apiModel.post('/order/', {
	total: basketModel.getTotal(),
	items: basketModel.getItems().map(item => item.id),
	...buyerModel.getData()
})
console.log('Ответ сервера при оформлении заказа: ', orderResult)
