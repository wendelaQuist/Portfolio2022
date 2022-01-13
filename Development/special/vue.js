var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks' ,
        brand: 'Vue Mastery',
        selectedVariant: 0,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "black",
                variantImage: './socks2.jpg',
                variantQuantity:10
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './socks1.jpg',
                variantQuantity:0
            },
            {
                variantId: 2236,
                variantColor: "white",
                variantImage: './socks3.jpg',
                variantQuantity:5
            }
        ],
        cart: 0
    },
    methods: {
        addToCart(){
            this.cart ++
        },
        removeFromCart(){
        if(this.cart > 0){
            this.cart --
        }
        },
        updateProduct(index) {
            this.selectedVariant = index        
        console.log(index)}
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
})