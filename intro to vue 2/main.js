Vue.component('product-details',  {
    props: {
        details: {
            type: Array,
            required: true,
        }
    },
    template: `
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
        `
    }
);


Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template: `<div class="product">
    <div class="product-image">
        <a :href="url">
            <img :src=image :alt="product + ' | ' + description">
        </a>
    </div>


    <div class="product-info">
        <h1>{{title}}</h1>
        <h2>{{description}}</h2>
        <hr>
        <h3>{{isOnSale}}</h3>


        <p v-if="inventory > 10 && inStock">In stock</p>
        <p v-else-if="inventory <=10 && inventory > 0">Almost sold out</p>
        <p v-else style="text-decoration: line-through">Out of stock</p>
            
        <product-details :details="details"></product-details>
        
        <div v-for="(variant, index) in variants"
            :key="variant.variantId"
            class="color-box"
            :style="{ backgroundColor: variant.variantColor }"
            @mouseover="updateProductPreview(index)">
        </div>

        <div v-for="size in sizes" style="display: inline;">
            <b>{{size}} cm | </b>
        </div>
        <br>
        <br>
        <br>

        <button v-on:click="addToCart" 
            :disabled="!inStock" 
            :class="{ disabledButton: !inStock }"
            style="cursor: pointer;">Add to cart</button>
        <br>
        <button v-on:click="removeFromCart" style="cursor: pointer;">Remove from cart</button>

        <p> Shipping: {{shipping}} </p>

        <product-review @review-submitted="addReview"></product-review>

        <div>
    <h4>Reviews</h4>
    <p>There're no reviews yet.</p>
    <ul>
        <li v-for="review in reviews">
            <p>Name: {{review.name}}</p>
            <p>Rating: {{review.rating}}</p>
            <p>{{review.review}}</p>
        </li>
    </ul>
</div>
      
    </div>

</div>
    `,
    data() {
        return {
            brand: 'Nike',
            product: 'Air Zoom',
            description: 'Train harder. Leave a lighter footprint.',
            selectedVariant: 0,
            // onSaleProduct: true,
            // image: './assets/nike_air_zoom_white.png',
            url: 'https://www.nike.com/mx/t/calzado-de-carrera-air-zoom-alphafly-next-flyknit-xDM1Lj?cp=41842406843_ad_!14129893903!128449409514!c!pla-324799387802!537150223802&cp=82486655958_search_%7c%7c14129893903%7c128449409514%7c%7cc%7c%7c%7c537150223802&gclid=Cj0KCQjwpf2IBhDkARIsAGVo0D1yY9lDTAv5FrofgqdP1nBPtDnk6mv7cC145HAJXtU4oZGS-eZ9eKkaArTyEALw_wcB&gclsrc=aw.ds',
            inventory: 11,
            details : [
                "Placa de fibra de carbono",
                "Solo 210 gramos de peso",
                "Desplazamiento 4mm" 
            ],
            variants: [
                {
                    variantId: 2234,
                    variantColor: "white",
                    variantImage: './assets/nike_air_zoom_white.png',
                    variantStockQuantity: 10,
                    onSaleVariant: true
                },
                {
                    variantId: 2235,
                    variantColor: "black",
                    variantImage: './assets/nike_air_zoom_black.png',
                    variantStockQuantity: 2,
                    onSaleVariant: false
                }
            ],
            sizes: [23, 24, 25, 26, 27, 28],
            reviews: []
        } 
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId);
        },
        updateProductPreview(index) {
            this.selectedVariant = index
            console.log(index);
        },
        addReview(productReview) {
            this.reviews.push(productReview);
        }
    },
    computed: {
        title() {
            return `${this.brand} ${this.product}`;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantStockQuantity;
        },
        isOnSale() {
            if (this.variants[this.selectedVariant].onSaleVariant) {
                return `${this.title} in variant ${this.variants[this.selectedVariant].variantColor} are on sale`
            }
            else { return null; }
        },
        shipping() {
            if (this.premium) { return "Free" }
            else { return 2.99 }
        }
    }
    
});

Vue.component('product-review', {
    template: `
    <form class="review-form" @submit.prevent="onSubmit">

    <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul> <li v-for="error in errors">{{error}}</li></ul>
    </p>
    


    <p>
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" v-model="name">
    </p>

    <p>
        <label for="review">Review:</label>
        <textarea name="review" id="" cols="30" rows="10" v-model="review"></textarea>
    </p>

    <p>
        <label for="rating">Rating:</label>
        <select name="rating" id="rating" v-model.number="rating">
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
        </select>
    </p>

    <p>
        <input type="submit" value="Submit"> 
    </p>


</form>
    `,
    data() {
        return {
            name: null,
            review: null,
            rating: null,
            errors: []
        }
    },
    methods: {
        onSubmit() {
            if (this.name && this.review && this.rating) {
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating
                }
                this.$emit('review-submitted', productReview);
                this.name = null;
                this.review = null;
                this.rating = null;
            }
            else {
                this.errors = [];
                if (!this.name) this.errors.push("Name required");
                if (!this.review) this.errors.push("Review required");
                if (!this.rating) this.errors.push("Rating required");

            }
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        },
        removeItem(id) {
            for (var i=this.cart.length - 1; i>=0; i--){
                if (this.cart[i] === id) {
                    this.cart.splice(i, 1);
                }
            }
        }
    }
});