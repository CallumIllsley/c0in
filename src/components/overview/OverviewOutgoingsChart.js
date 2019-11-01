import React from 'react'
import Styles from './overview.module.css'

import { Header } from 'semantic-ui-react'

function OverviewOutgoingsChart() {
    return (
        <div className={Styles.outgoingsChartContainer}>
            <Header color="green" className={Styles.oHeader}>Outgoings</Header>            
        </div>
    )
}

export default OverviewOutgoingsChart
