import React from 'react'
import Styles from './income.module.css'

import { Table, Icon } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

function IncomeList() {
    let entries = useSelector(state => state.income) 
    let generate = useSelector(state => state.generateTable) 

    function GenerateTableRow() {
        return (
            entries.map((entry) => {
                return (
                    <Table.Row>
                    <Table.Cell><Icon name={entry.icon}/>{entry.item}</Table.Cell>
                    <Table.Cell>{entry.desc}</Table.Cell>
                    <Table.Cell>£{entry.amount}</Table.Cell>
                 </Table.Row>)}
            )
        )
    }

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
                    {generate ? GenerateTableRow() : null}
                </Table>
            </div>
        </div>
    )
}

export default IncomeList