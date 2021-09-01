
const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: false,
        }
    }, 
    methods: {
        updateCart(id) {
            this.cart.push(id);
        },

        removeItemFromCart(id) {
            if (this.cart.length >= 1) {
                this.cart.pop(id);
            }
            //  if (this.cart >= 1){ this.cart -= 1; } 
        }

    }
})