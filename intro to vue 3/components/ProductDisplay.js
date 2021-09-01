app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },

    template: 
    /*html*/
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <a :href="url" target="_blank">
                    <img :src="image" :alt="product">
                </a>
            </div>
            
            <div class="product-info">
                <h1>{{title}}</h1>    
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of stock</p>
                <p v-show="onSale"><b>On sale!</b></p>
                
                <product-details :details="details"></product-details>

                
                <div 
                    v-for="(variant, index) in variants" 
                    :key="variant.id" 
                    @mouseover="updateVariant(index)"
                    class="color-circle"
                    :style="{ 'background-color': variant.color }"
                >
                </div>

                <div v-for="size in sizes" style="display: inline;">
                    <button>{{size}} cm </button> - 
                </div>

                <p>Shipping: {{shipping}}</p>

                <br>

                <button 
                    class="button" 
                    :class="{ disabledButton: !inStock }"
                    :disabled="!inStock"
                    @click="addToCart">
                    Add to cart
                </button>
                <button class="button" v-on:click="removeFromCart">Remove from cart</button>
            
            </div>
        </div>
    </div>`,
    data() {
        return {
            cart:0,
            brand: 'Nike',
            product: 'Air Zoom 2',
            selectedVariant: 0,
            // image: './assets/nike_air_zoom_white.PNG',
            url: 'https://www.nike.com/mx/t/calzado-de-carrera-air-zoom-alphafly-next-flyknit-xDM1Lj?cp=41842406843_ad_!14129893903!128449409514!c!pla-324799387802!537150223802&cp=82486655958_search_%7c%7c14129893903%7c128449409514%7c%7cc%7c%7c%7c537150223802&gclid=Cj0KCQjwpf2IBhDkARIsAGVo0D1yY9lDTAv5FrofgqdP1nBPtDnk6mv7cC145HAJXtU4oZGS-eZ9eKkaArTyEALw_wcB&gclsrc=aw.ds',
            // inStock: true,
            // inventory: 0,
            onSale: false,
         
            variants: [
                {
                    id: 2334, 
                    color: 'black',
                    image: './assets/nike_air_zoom_black.PNG',
                    quantity: 10
                },
                {
                    id: 2335, 
                    color: 'white',
                    image: './assets/nike_air_zoom_white.PNG',
                    quantity: 4
                },
            ],
            sizes: [
                25, 26, 27, 28, 29
            ]
        }
    },
    methods: {
        addToCart(){ /* this.cart += 1; */ 
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id); 
        },
        removeFromCart(){ 
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id) 
        },
        updateVariant(index){ this.selectedVariant = index; }

    },
    computed: {
        title() { return this.brand + this.product; },
        image() { return this.variants[this.selectedVariant].image; },
        inStock() { return this.variants[this.selectedVariant].quantity; },
        shipping(){
            
            if (this.premium){
                return 'Free';
            }
            else{
                return 2.99
            }
        }
    }


});