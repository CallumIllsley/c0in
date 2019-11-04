import React from 'react'
import Styles from './outgoings.module.css'

import OverviewOutgoingsChart from '../overview/OverviewOutgoingsChart'
import OutgoingsList from './OutgoingsList'
import OutgoingsForm from './OutgoingsForm'

function OutgoingsContainer() { 
    return (
        <div className={Styles.outgoingsContainer}>
            <OverviewOutgoingsChart />
            <OutgoingsList/>
            <OutgoingsForm />
        </div>
    )
}

export default OutgoingsContainer