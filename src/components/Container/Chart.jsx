import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';


import React from 'react'

export const SetChart = ({days, amount}) => {

    const data = {
        labels: days,
        datasets: [{
            data: amount,
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
    }

    return (
        <Chart type='bar' data={data} options={options} />
    )
}


