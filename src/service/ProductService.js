export default class ProductService {
    getProductsSmall() {
        return fetch('../assets/products.json').then(res => res.json()).then(d => d.data);
    }

    getProducts() {
        return fetch('../assets/products.json').then(res => res.json()).then(d => d.data);
    }

    getProductsWithOrdersSmall() {
        return fetch('../assets/products.json').then(res => res.json()).then(d => d.data);
    }
}