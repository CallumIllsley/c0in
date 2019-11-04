import React from 'react'
import Styles from './outgoings.module.css'

import { addOutgoings , generateTable, manageBalance } from '../../actions/index'
import { useDispatch, useSelector } from 'react-redux'

import { Form, Dropdown, Header, Input, Popup, Segment, Button} from 'semantic-ui-react'

function OutgoingsForm() {

    const [dropValue, setDropValue] = React.useState({icon: 'cog', text: 'Type'})
    const [isComplete, setIscomplete] = React.useState([false, false, false, false])
    const [outgoingsValue, setOutgoingsValue] = React.useState({desc: null, amount: null, date: null})

    const dispatch = useDispatch()

    let balance = useSelector(state => parseInt(state.balance))
    let newBalance = parseInt(balance) - parseInt(outgoingsValue.amount);

    let day = new Date()
    let today = `${day.getFullYear()}-${('0' + (day.getMonth() + 1)).slice(-2)}-${('0' + day.getDate()).slice(-2)}`

    function handleClick(icons, texts) { 
        setDropValue({icon: icons, text: texts})
        setIscomplete([true, isComplete[1], isComplete[2], isComplete[3]])
    }

    return (    
        <div className={Styles.outgoingsFormContainer}>
            <div className={Styles.outgoingsFormWrapper}>
                <Header color="green">Outgoings</Header>
                <Form className={Styles.form}onSubmit={() => {
                        dispatch(addOutgoings({item: dropValue.text, desc: outgoingsValue.desc, amount: outgoingsValue.amount, icon: dropValue.icon, date: outgoingsValue.date}))
                        dispatch(manageBalance(parseInt(newBalance)))
                        setOutgoingsValue({desc: '', amount: '', date: ''})
                        setIscomplete([false, false, false])
                        dispatch(generateTable(true))
                    }}>
                     <Form.Field>
                        <Dropdown selection text={dropValue.text} icon={dropValue.icon} floating labeled button fluid className='icon'>
                            <Dropdown.Menu>
                                <Dropdown.Header content='Select Type'/>
                                <Dropdown.Divider/>
                                <Dropdown.Item onClick={() => handleClick('question', 'Other')} icone='question' text='Other' />
                                <Dropdown.Item onClick={() => handleClick('settings', 'Utilities')} icon='settings' text='Utilities' />
                                <Dropdown.Item onClick={() => handleClick('food', 'Food')} icon="food" text="Food" />
                                <Dropdown.Item onClick={() => handleClick('phone', 'Phone')} icon="phone" text="Phone" />
                                <Dropdown.Item onClick={() => handleClick('car', 'Fuel')} icon="car" text="Fuel"/>
                                <Dropdown.Item onClick={() => handleClick('shopping cart', 'Shopping')} icon="shopping cart" text="Shopping"/>
                                <Dropdown.Item onClick={() => handleClick('home', 'Rent')} icon='home' text="Rent"/>
                                <Dropdown.Item onClick={() => handleClick('trophy', 'Lottery')} icon="trophy" text="Lottery"/>
                                <Dropdown.Item onClick={() => handleClick('users', 'Transfers')} icon="users" text="Transfers"/>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <Input onChange={(e) => {setIscomplete([isComplete[0], true, isComplete[2], isComplete[3]]);
                                                setOutgoingsValue({desc: e.target.value, amount: outgoingsValue.amount, date: outgoingsValue.date})}} 
                                                fluid 
                                                placeholder="Input a description"
                                                value={outgoingsValue.desc}>
                        </Input>
                    </Form.Field>
                    <Form.Field>
                        <label>Amount</label>
                        <>  
                        <Popup size="mini" content="Must be a number" position="bottom left" trigger={
                                <Input type='number' onChange={(e) => {setIscomplete([isComplete[0], isComplete[1], true, isComplete[3]]);
                                                 setOutgoingsValue({desc: outgoingsValue.desc, amount : e.target.value, date: outgoingsValue.date}) }}
                                                value={outgoingsValue.amount} 
                                                icon="money" 
                                                iconPosition="left" 
                                                placeholder="Amount" 
                                                fluid>
                                </Input>}>
                            </Popup>
                        </>
                    </Form.Field>
                    <Form.Field>
                        <label>Date</label>
                        <Button type="button" size='mini' fluid content='Today' 
                                onClick={() => {setOutgoingsValue({desc: outgoingsValue.desc, amount: outgoingsValue.amount, date: today})}}    
                                />
                            <>  
                            <Popup size="mini" content="Must be a date" position="bottom left" trigger={
                                    <Input type='date' onChange={(e) => {setIscomplete([isComplete[0], isComplete[1], isComplete[2], true]);
                                                    setOutgoingsValue({desc: outgoingsValue.desc, amount: outgoingsValue.amount, date: e.target.value}) }}
                                                    value={outgoingsValue.date} 
                                                    placeholder="" 
                                                    fluid>
                                    </Input>}>
                                </Popup>
                            </>
                    </Form.Field>
                    <Form.Button content="Submit" fluid/>
                    {!isComplete[0] || !isComplete[1] || !isComplete[2] || !isComplete[3]? <Segment color="red">Enter details to add to list!</Segment> : null}
                    {isComplete[0] && isComplete[1] && isComplete[2] && isComplete[3]? <Segment color="green">Click submit to add!</Segment> : null}
                </Form>
            </div>
        </div>
    )
}

export default OutgoingsForm