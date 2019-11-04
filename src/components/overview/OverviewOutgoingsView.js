import React from 'react'
import Styles from './overview.module.css'

import { Table } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

function OverviewOutgoingsView() {
    let entries = useSelector(state => state.outgoings) 
    let generate = useSelector(state => state.generateTable) 

    function GenerateTableRow() {
        return (
            entries.map((entry) => {
                return (
                    <Table.Row>
                    <Table.Cell><Icon name={entry.icon}/>{entry.item}</Table.Cell>
                    <Table.Cell>{entry.desc}</Table.Cell>
                    <Table.Cell>£{entry.amount}</Table.Cell>
                    <Table.Cell>{entry.date}</Table.Cell>
                 </Table.Row>)}
            )
        )
    }

    return (
        <div className={Styles.outgoingsViewContainer}>
            <div className={Styles.tableWrapper}>
                <Table fixed color={"green"}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Type</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Amount</Table.HeaderCell>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                        </Table.Row>
                        {generate ? GenerateTableRow() : null}
                    </Table.Header>
                </Table>
            </div>
        </div>
    )
}


export default OverviewOutgoingsView