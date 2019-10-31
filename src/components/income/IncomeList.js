import React from 'react'
import Styles from './income.module.css'

import { Table } from 'semantic-ui-react'

function IncomeList() {
    return (
        <div className={Styles.incomeListWrapper}>
            <div className={Styles.tableWrapper}>
                <Table fixed color="green">
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

export default IncomeList