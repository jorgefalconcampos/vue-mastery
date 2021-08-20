var app = new Vue({
    el: '#app',
    data: {
        product: 'Sneakers',
        description: 'Nike Air Zoom',
        image: './assets/nike_air_zoom_white.png',
        url: 'https://www.nike.com/mx/t/calzado-de-carrera-air-zoom-alphafly-next-flyknit-xDM1Lj?cp=41842406843_ad_!14129893903!128449409514!c!pla-324799387802!537150223802&cp=82486655958_search_%7c%7c14129893903%7c128449409514%7c%7cc%7c%7c%7c537150223802&gclid=Cj0KCQjwpf2IBhDkARIsAGVo0D1yY9lDTAv5FrofgqdP1nBPtDnk6mv7cC145HAJXtU4oZGS-eZ9eKkaArTyEALw_wcB&gclsrc=aw.ds',
        inventory: 11,
        onSale: true,
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
            },
            {
                variantId: 2235,
                variantColor: "black",
                variantImage: './assets/nike_air_zoom_black.png',
            }
        ],

        sizes: [
            23,
            24,
            25,
            26,
            27,
            28
        ],
        cart: 0
    
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },

        updateProductPreview(variantImage) {
            this.image = variantImage

        }


    }
    

  

});