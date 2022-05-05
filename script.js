// instanciar VUE
const app = new Vue({
    el: '#app',
    data: {
        cantidad: 'Cantidad: ',
        counter: 0,

    },
    methods:{
        increase(){
            this.counter++;
        },
        decrease(){
            this.counter--;
        }
    }

})
