import React from 'react'
import Styles from './overview.module.css'

import OverviewIncomeView from './OverviewIncomeView'
import OverviewIncomeChart from './OverviewIncomeChart'
import OverviewOutgoingsChart from './OverviewOutgoingsChart'

function OverviewContainer() {
    return (
        <div className={Styles.overviewContainer}>
            <OverviewIncomeChart />
            <OverviewIncomeView />
            <OverviewOutgoingsChart />
        </div>
    )
}

export default OverviewContainer