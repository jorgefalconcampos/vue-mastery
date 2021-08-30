
const app = Vue.createApp({
    data: function() {
        return {
            product: 'Socks',
            image: './assets/nike_air_zoom_white.PNG',
            url: 'https://www.nike.com/mx/t/calzado-de-carrera-air-zoom-alphafly-next-flyknit-xDM1Lj?cp=41842406843_ad_!14129893903!128449409514!c!pla-324799387802!537150223802&cp=82486655958_search_%7c%7c14129893903%7c128449409514%7c%7cc%7c%7c%7c537150223802&gclid=Cj0KCQjwpf2IBhDkARIsAGVo0D1yY9lDTAv5FrofgqdP1nBPtDnk6mv7cC145HAJXtU4oZGS-eZ9eKkaArTyEALw_wcB&gclsrc=aw.ds',
            inStock: true,
            inventory: 0,
            onSale: false,
            details : [
                "Placa de fibra de carbono",
                "Solo 210 gramos de peso",
                "Desplazamiento 4mm" 
            ],
            variants: [
                {id: 2334, color: 'black'},
                {id: 2335, color: 'white'},
            ],
            sizes: [
                25, 26, 27, 28, 29
            ]
        }
    }
})