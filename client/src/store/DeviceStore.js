import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Шаверма'},
            {id: 2, name: 'Салаты'}, 
            {id: 3, name: 'Десерты'},
            {id: 4, name: 'Напитки'}, 
        ]
        this._brands = []
        this._devices = [
            {id: 1, name: 'Фирменная', price: 150, img: 'img/firm.jpg'},
            {id: 2, name: 'Классическая', price: 100, img: 'img/classic.jpg'},
            {id: 3, name: 'Оригинальная', price: 120, img: 'img/original.jpg'},
            {id: 4, name: 'Острая', price: 130, img: 'img/hot.jpg'},
            {id: 5, name: 'Чай', price: 50, img: 'img/tea.jpg'},
            {id: 6, name: 'Кофе', price: 60, img: 'img/coffee.jpeg'},
            {id: 7, name: 'Вода', price: 30, img: 'img/water.jpeg'},
            {id: 8, name: 'Кола', price: 70, img: 'img/cola.jpg'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}
