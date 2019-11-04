import React from 'react'
import Styles from './income.module.css'

import { VictoryPie, VictoryTheme } from 'victory'
import { useSelector } from 'react-redux'

import { Header } from 'semantic-ui-react'

function IncomeHistoricChart() {
    const [currentHeight, setCurrentHeight] = React.useState()
    const ref = React.useRef(null) 
    const dates = useSelector(state => state.incomeHistoricQuery)

    let data = useSelector(state => state.incomeHistoricContent)

    const graphData = data.map( (entry) => {
        return {
            x: entry.item,
            y: parseInt(entry.amount)
        }
    } )

    const sortedGraphData = []
    graphData.reduce( (result, value) => {
        if(!result[value.x]) { 
            result[value.x] = { 
                x: value.x,
                y: 0
            }
                sortedGraphData.push(result[value.x])
            }
                result[value.x].y += value.y
                return result
        }, {})
    

    React.useEffect( () => {
            const resize = () => {
                setCurrentHeight(ref.current.clientHeight - 100)
                console.log(sortedGraphData)
            }
                window.addEventListener('resize', resize)
                resize()
            return function cleanUp() {
                window.removeEventListener('resize', resize)
            }
        }   
    )

    return (
        <div className={Styles.incomeChartContainer}>
            <Header color="green" className={Styles.oHeader}>{dates[0]} - {dates[1]}</Header>
            <div ref={ref} className={Styles.chartWrapper}>
                            <VictoryPie data={sortedGraphData} 
                            theme={VictoryTheme.material}
                            height={currentHeight}
                            labelPosition="endAngle"
                />
            </div>
        </div>
    )
}

export default IncomeHistoricChart