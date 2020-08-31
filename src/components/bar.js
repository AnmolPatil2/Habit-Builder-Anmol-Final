import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,
    props: ['barData', 'chartoptions'],
    data: () => ({

    }),

    mounted() {
        console.log(this.barData)
        this.renderChart(this.barData, this.chartoptions)
    }
}