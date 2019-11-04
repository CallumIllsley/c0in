import React from 'react'
import Styles from './outgoings.module.css'

import { useDispatch, useSelector } from 'react-redux'

import { Table, Button, Icon, Header } from 'semantic-ui-react'
import { outgoingsHistoricView, updateOutgoingsQuery } from '../../actions'

function OutgoingsHistoricList() {

    const dispatch = useDispatch()
    const entries = useSelector(state => state.outgoings)
    let dates = useSelector(state => state.outgoingsHistoricQuery)
    const generate = useSelector(state => state.generateReportO)

    const startDate = new Date(dates[0])
    const finalDate = new Date(dates[1])

    let queryData = []

    function GenerateTableRow() {
        return (
                entries.map( (entry) => {
                    let entryDate = new Date(entry.date)
                    if (entryDate >= startDate  && entryDate <= finalDate) {
                        queryData.push(entry)
                        dispatch(updateOutgoingsQuery(queryData))
                        return (
                            <Table.Row>
                                <Table.Cell><Icon name={entry.icon}/>{entry.item}</Table.Cell>
                                <Table.Cell>{entry.desc}</Table.Cell>
                                <Table.Cell>£{entry.amount}</Table.Cell>
                                <Table.Cell>{entry.date}</Table.Cell>
                            </Table.Row>
                        )
                    }
                } 
            )
        )
    }

    return ( 
        <div className={Styles.outgoingsListWrapper}>
            <Button fluid size="tiny" content='Add Outgoings Data' type='button' onClick={() => dispatch(outgoingsHistoricView(false))}/> 
            <div className={Styles.tableWrapper}>
                <Header color="green">Showing data from {dates[0]} to {dates[1]}</Header>
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

export default OutgoingsHistoricList