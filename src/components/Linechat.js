import { Line, mixins } from "vue-chartjs";

export default {
    extends: Line,
    mixins: [mixins.reactiveProp],
    props: ["chartData"],




    data() {


        return {
            options: {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: "Expected Target "
                },
                tooltips: {
                    mode: "index",
                    intersect: false
                },
                hover: {
                    mode: "nearest",
                    intersect: true
                },
                scales: {
                    xAxes: [
                        {
                            display: true,
                            categoryPercentage: 0.5,
                            scaleLabel: {
                                display: true,
                                labelString: "Next 10 days"
                            }
                        }
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: "Rewards"
                            }
                        }
                    ]
                }
            }
        }
    },

    mounted() {



        this.renderChart(this.chartData, this.options)
    },


}