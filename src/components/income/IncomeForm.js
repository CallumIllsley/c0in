import React from 'react'
import Styles from './income.module.css'

import { Form, Dropdown, Header} from 'semantic-ui-react'

function IncomeForm() {
    return (
        <div className={Styles.incomeFormContainer}>
            <div className={Styles.incomeFormWrapper}>
                <Header color="green">Income</Header>
                <Form> 
                    <Form.Field>
                        <Dropdown text='Type' icon='cog' floating labeled button fluid className='icon'>
                            <Dropdown.Menu>
                                <Dropdown.Header content='Select Type'/>
                                <Dropdown.Divider/>
                                <Dropdown.Item icon='home' text='Rent'/>
                                <Dropdown.Item icon='bus' text='Transport'/>
                                <Dropdown.Item icon='video' text='Media'/>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Field>
                </Form>
            </div>
        </div>
    )
}

export default IncomeForm