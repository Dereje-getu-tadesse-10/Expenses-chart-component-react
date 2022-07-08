import styles from './Card.module.css'
import { Footer } from '../../Footer/Footer'
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';


export const Card = () => {

    const states = {
        labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        datasets: [{
            data: ['17.45', '35.91', '52.36', '31.07', '23.39', '43.28', '25.48'],
            borderRadius:[5],
            borderSkipped: false,
            backgroundColor: [
                  'hsl(10, 79%, 65%)',
                  'hsl(10, 79%, 65%)',
                  'hsl(186, 34%, 60%)',
                  'hsl(10, 79%, 65%)',
                  'hsl(10, 79%, 65%)',
                  'hsl(10, 79%, 65%)',
                  'hsl(10, 79%, 65%)'
            ]
        }]
    }

    const options = {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    


    return (
        <div className={styles.card}>
            <h1>Spending - Last 7 days</h1>
            <Chart type='bar' data={states} 
            options={{
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: false,
                    },
                    datalabels: {
                        display: false
                    }
                },
                yAxes: [{
                    gridLines: {
                        drawBorder: false,
                    },
                }],
                scales:{
                    x:{
                        grid:{
                            display:false,
                            drawBorder:false,
                            drawOnChartArea: false,
                        }
                    },
                    y:{
                        beginAtZero: true,
                        ticks:{
                            display:false
                        },
                        grid:{
                            display: false,
                            drawBorder:false,
                            drawOnChartArea: true,
                        }
                    }
                }
            }}
            />
            <Footer />
        </div>
    )


}
