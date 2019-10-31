import React from 'react'
import Styles from './overview.module.css'

import OverviewIncomeView from './OverviewIncomeView'
import OverviewIncomeChart from './OverviewIncomeChart'
import OverviewOutgoingsChart from './OverviewOutgoingsChart'
import OverviewOutgoingsView from './OverviewOutgoingsView'

function OverviewContainer() {
    return (
        <div className={Styles.overviewContainer}>
            <OverviewIncomeChart />
            <OverviewIncomeView />
            <OverviewOutgoingsChart />
            <OverviewOutgoingsView />
        </div>
    )
}

export default OverviewContainer