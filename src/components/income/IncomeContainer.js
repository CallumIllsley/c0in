import React from 'react'
import Styles from './income.module.css'

import OverviewIncomeChart from '../overview/OverviewIncomeChart'
import IncomeList from './IncomeList'
import IncomeForm from './IncomeForm'

function IncomeContainer() {
    return (
        <div className={Styles.incomeContainer}>
            <OverviewIncomeChart/>
            <IncomeList />
            <IncomeForm />
        </div>
    )
}

export default IncomeContainer