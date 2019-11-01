import React from 'react'
import Styles from './overview.module.css'

import { VictoryPie, VictoryContainer } from 'victory'
import { Header } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

function OverviewIncomeChart() {
    const [currentHeight, setCurrentHeight] = React.useState()
    const ref = React.useRef(null) 

    let data = useSelector(state => state.income)

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
            <Header color="green" className={Styles.oHeader}>Income</Header>
            <div ref={ref} className={Styles.chartWrapper}>
                            <VictoryPie data={sortedGraphData}
                            colorScale={["tomato", "gold", "orange"]}
                            height={currentHeight}
                />
            </div>
        </div>
    )
}

export default OverviewIncomeChart
