app.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true,
        }
    },

    template:
    /*html*/
    `<ul>
        <li v-for="detail in details">- {{ detail }}</li>
    </ul>
    `,

    data() {
        return {
            details : [
                "Placa de fibra de carbono",
                "Solo 210 gramos de peso",
                "Desplazamiento 4mm" 
            ],
        }
    }

   
});