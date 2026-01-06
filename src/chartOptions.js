const chartOptions = {
    responsive: true,
    plugins: {
        tooltip: {
            enabled: true,
            callbacks: {
                label(ctx) {
                    const { x, y, gear } = ctx.raw
                    return `${ctx.dataset.label}: ${gear} - ${Math.ceil(x)} км/ч | ${Math.ceil(y)} об/мин`
                }
            },
            filter(tooltipItem) {
                const { dataset, dataIndex } = tooltipItem
                const point = dataset.data[dataIndex]
                return !dataset.data.some((d, i) => i < dataIndex && d.x === point.x && d.y === point.y)
            }
        },
        title: {
            display: true,
            text: 'Сравнение КПП: обороты vs скорость'
        },
        legend: {
            position: 'bottom',
            onHover(event, legendItem, legend) {
                const chart = legend.chart
                chart.data.datasets.forEach((dataset, i) => {
                    if (i === legendItem.datasetIndex) {
                        dataset.borderWidth = 4
                        dataset.borderColor = dataset.originalBorderColor
                    } else {
                        dataset.borderWidth = 2
                        dataset.borderColor = 'rgba(200,200,200,0.3)'
                    }
                })
                chart.update('none')
            },
            onLeave(event, legendItem, legend) {
                const chart = legend.chart
                chart.data.datasets.forEach(dataset => {
                    dataset.borderWidth = 2
                    dataset.borderColor = dataset.originalBorderColor
                })
                chart.update('none')
            }
        }
    },
    elements: {
        point: {
            radius: 2,
            hoverRadius: 4,
            pointStyle: 'circle'
        },
        line: {
            tension: 0
        }
    },
    scales: {
        x: {
            type: 'linear',  // Край важно! для числовой оси
            title: {
                display: true,
                text: 'Скорость (км/ч)'
            },
            ticks: {
                stepSize: 10
            }
        },
        y: {
            type: 'linear',  // Аналогично
            title: {
                display: true,
                text: 'Обороты двигателя (RPM)'
            },
            min: 0,
            max: 8000,
            ticks: {
                stepSize: 500
            }
        }
    }
}

export default chartOptions;