
const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            premium: false,
        }
    }, 
    methods: {
        updateCart() {
            this.cart += 1;
        },

        removeItemFromCart() {
            if (this.cart >= 1){ this.cart -= 1; } 
        }

    }
})