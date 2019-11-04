import React from 'react'
import Styles from './outgoings.module.css'

import { Table, Icon, Button } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { outgoingsHistoricView } from '../../actions/index'

function OutgoingsList() {
    let entries = useSelector(state => state.outgoings) 
    let generate = useSelector(state => state.generateTable) 

    const dispatch = useDispatch()

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
        <div className={Styles.outgoingsListWrapper}>
            <Button fluid size="tiny" content='View Historic Data' type='button' onClick={() => dispatch(outgoingsHistoricView(true))}/> 
            <div className={Styles.tableWrapper}>
                <Table fixed color="green">
                        <Table.Header>
                            <Table.Row>
                                    <Table.HeaderCell>Type</Table.HeaderCell>
                                    <Table.HeaderCell>Description</Table.HeaderCell>
                                    <Table.HeaderCell>Amount</Table.HeaderCell>
                                    <Table.HeaderCell>Date</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                    {generate ? GenerateTableRow() : null}
                </Table>
            </div>
        </div>
    )
}

export default OutgoingsList