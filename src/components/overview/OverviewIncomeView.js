import React from 'react'
import Styles from './overview.module.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ADD_INCOME } from '../../constants/action-types'
import { addIncome } from '../../actions/index'
 
import { Table } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'

function OverviewIncomeView() {

    return (
        <div className={Styles.incomeViewContainer}>
            <div className={Styles.tableWrapper}>
                <Table fixed color={"green"}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Type</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Amount</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                </Table>
            </div>
        </div>
    )
}

export default OverviewIncomeView