import React from 'react'
import Styles from './income.module.css'

import OverviewIncomeChart from '../overview/OverviewIncomeChart'
import IncomeList from './IncomeList'
import IncomeForm from './IncomeForm'
import IncomeHistoricForm from './IncomeHistoricForm'
import IncomeHistoricList from './IncomeHistoricList'

import { useSelector } from 'react-redux'
import IncomeHistoricChart from './IncomeHistoricChart'


function IncomeContainer() {

    const historicView = useSelector(state => state.viewIncomeHistoric)

    return (
        <div className={Styles.incomeContainer}>
            { historicView ? <IncomeHistoricChart/> : <OverviewIncomeChart/> }
            { historicView ? <IncomeHistoricList/>: <IncomeList /> }
            { historicView ? <IncomeHistoricForm/> : <IncomeForm /> }
        </div>
    )
}

export default IncomeContainer