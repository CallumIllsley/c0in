import React from 'react'
import Styles from './overview.module.css'

import { Header } from 'semantic-ui-react'
import { VictoryPie, VictoryTheme } from 'victory'
import { useSelector } from 'react-redux'


function OverviewOutgoingsChart() {
    const [currentHeight, setCurrentHeight] = React.useState()
    const ref = React.useRef(null) 

    let data = useSelector(state => state.outgoings)

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
        <div className={Styles.outgoingsChartContainer}>
            <Header color="green" className={Styles.oHeader}>Outgoings</Header>
            <div ref={ref} className={Styles.chartWrapper}>
                            <VictoryPie data={sortedGraphData} 
                            theme={VictoryTheme.material}
                            height={currentHeight}
                />
            </div>
        </div>
    )
}

export default OverviewOutgoingsChart
