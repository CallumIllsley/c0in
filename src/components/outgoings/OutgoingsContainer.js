import React from 'react'
import Styles from './outgoings.module.css'

import OverviewOutgoingsChart from '../overview/OverviewOutgoingsChart'
import OutgoingsList from './OutgoingsList'
import OutgoingsForm from './OutgoingsForm'
import OutgoingsHistoricList from './OutgoingsHistoricList'

import { useSelector } from 'react-redux'
import OutgoingsHistoricForm from './OutgoingsHistoricForm'
import OutgoingsHistoricChart from './OutgoingsHistoricChart'

function OutgoingsContainer() { 
    const historicView = useSelector(state => state.viewOutgoingsHistoric)
    return (
        <div className={Styles.outgoingsContainer}>
           {historicView ? <OutgoingsHistoricChart /> : <OverviewOutgoingsChart />} 
           {historicView ? <OutgoingsHistoricList /> : <OutgoingsList/>} 
           {historicView ?  <OutgoingsHistoricForm /> :<OutgoingsForm />}
        </div>
    )
}

export default OutgoingsContainer