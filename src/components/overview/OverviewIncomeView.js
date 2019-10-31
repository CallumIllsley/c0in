import React from 'react'
import Styles from './overview.module.css'

import { Table } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'

function OverviewIncomeView() {
    return (
        <div className={Styles.incomeViewContainer}>
            <div className={Styles.tableWrapper}>
                <Table fixed color={"gray"}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Type</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Amount</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell><Icon name="home" size="large"/></Table.Cell>
                            <Table.Cell>Sample Data</Table.Cell>
                            <Table.Cell>£100</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Icon name="home" size="large"/></Table.Cell>
                            <Table.Cell>Sample Data</Table.Cell>
                            <Table.Cell>£100</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Icon name="home" size="large"/></Table.Cell>
                            <Table.Cell>Sample Data</Table.Cell>
                            <Table.Cell>£100</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Icon name="home" size="large"/></Table.Cell>
                            <Table.Cell>Sample Data</Table.Cell>
                            <Table.Cell>£100</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Icon name="home" size="large"/></Table.Cell>
                            <Table.Cell>Sample Data</Table.Cell>
                            <Table.Cell>£100</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Icon name="home" size="large"/></Table.Cell>
                            <Table.Cell>Sample Data</Table.Cell>
                            <Table.Cell>£100</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Icon name="home" size="large"/></Table.Cell>
                            <Table.Cell>Sample Data</Table.Cell>
                            <Table.Cell>£100</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Icon name="home" size="large"/></Table.Cell>
                            <Table.Cell>Sample Data</Table.Cell>
                            <Table.Cell>£100</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Icon name="home" size="large"/></Table.Cell>
                            <Table.Cell>Sample Data</Table.Cell>
                            <Table.Cell>£100</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Icon name="home" size="large"/></Table.Cell>
                            <Table.Cell>Sample Data</Table.Cell>
                            <Table.Cell>£100</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Icon name="home" size="large"/></Table.Cell>
                            <Table.Cell>Sample Data</Table.Cell>
                            <Table.Cell>£100</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}

export default OverviewIncomeView