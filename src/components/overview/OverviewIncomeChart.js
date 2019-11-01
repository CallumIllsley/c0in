import React from 'react'
import Styles from './overview.module.css'

import { VictoryPie, VictoryContainer } from 'victory'
import { Header } from 'semantic-ui-react'

function OverviewIncomeChart() {
    const [currentHeight, setCurrentHeight] = React.useState()
    const ref = React.useRef(null) 

    React.useEffect( () => {
            const resize = () => {
                setCurrentHeight(ref.current.clientHeight - 100)
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
                            <VictoryPie data={[{x: "Fuel", y : 35}, {x : "Rent", y : 70}, {x: "Utilities", y : 38}]}
                            colorScale={["tomato", "gold", "orange"]}
                            innerRadius={({ datum }) => datum.y}  
                            height={currentHeight}
                />
            </div>
        </div>
    )
}

export default OverviewIncomeChart
