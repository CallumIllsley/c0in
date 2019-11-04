import React from 'react'
import Styles from './income.module.css'

import { addIncome, generateTable, manageBalance } from '../../actions/index'
import { useDispatch, useSelector } from 'react-redux'

import { Form, Dropdown, Header, Input, Popup, Segment, Button} from 'semantic-ui-react'

function IncomeForm() {

    const [dropValue, setDropValue] = React.useState({icon: 'cog', text: 'Type'})
    const [isComplete, setIscomplete] = React.useState([false, false, false, false])
    const [inputValue, setInputValue] = React.useState({desc: null, amount: null, date: null})

    const dispatch = useDispatch()

    let balance = useSelector(state => parseInt(state.balance))
    let newBalance = parseInt(balance) + parseInt(inputValue.amount);

    let day = new Date()
    let today = `${day.getFullYear()}-${('0' + (day.getMonth() + 1)).slice(-2)}-${('0' + day.getDate()).slice(-2)}`

    function handleClick(icons, texts) { 
        setDropValue({icon: icons, text: texts})
        setIscomplete([true, isComplete[1], isComplete[2], isComplete[3]])
    }

    return (    
        <div className={Styles.incomeFormContainer}>
            <div className={Styles.incomeFormWrapper}>
                <Header color="green">Add Income</Header>
                <Form className={Styles.form}onSubmit={() => {
                        dispatch(addIncome({item: dropValue.text, desc: inputValue.desc, amount: inputValue.amount, icon: dropValue.icon, date: inputValue.date}))
                        dispatch(manageBalance(parseInt(newBalance)))
                        setInputValue({desc: '', amount: '', date: ''})
                        setIscomplete([false, false, false, false])
                        dispatch(generateTable(true))
                    }}>
                     <Form.Field>
                        <Dropdown selection text={dropValue.text} icon={dropValue.icon} floating labeled button fluid className='icon'>
                            <Dropdown.Menu>
                                <Dropdown.Header content='Select Type'/>
                                <Dropdown.Divider/>
                                <Dropdown.Item onClick={() => handleClick('money', 'Income')} icon="money" text="Income"/>
                                <Dropdown.Item onClick={() => handleClick('trophy', 'Lottery')} icon="trophy" text="Lottery"/>
                                <Dropdown.Item onClick={() => handleClick('users', 'Transfer')} icon="users" text="Transfer"/>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <Input onChange={(e) => {setIscomplete([isComplete[0], true, isComplete[2], isComplete[3]]);
                                                setInputValue({desc: e.target.value, amount: inputValue.amount, date: inputValue.date})}} 
                                                fluid 
                                                placeholder="Input a description"
                                                value={inputValue.desc}>
                        </Input>
                    </Form.Field>
                    <Form.Field>
                        <label>Amount</label>
                        <>  
                        <Popup size="mini" content="Must be a number" position="bottom left" trigger={
                                <Input type='number' onChange={(e) => {setIscomplete([isComplete[0], isComplete[1], true, isComplete[3]]);
                                                 setInputValue({desc: inputValue.desc, amount : e.target.value, date: inputValue.date}) }}
                                                value={inputValue.amount} 
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
                                onClick={() => {setInputValue({desc: inputValue.desc, amount: inputValue.amount, date: today})}}    
                                />
                            <>  
                            <Popup size="mini" content="Must be a date" position="bottom left" trigger={
                                    <Input type='date' onChange={(e) => {setIscomplete([isComplete[0], isComplete[1], isComplete[2], true]);
                                                    setInputValue({desc: inputValue.desc, amount: inputValue.amount, date: e.target.value}) }}
                                                    value={inputValue.date} 
                                                    placeholder="Date" 
                                                    fluid>
                                    </Input>}>
                                </Popup>
                            </>
                    </Form.Field>

                    <Form.Button content="Submit" fluid/>
                    {!isComplete[0] || !isComplete[1] || !isComplete[2] || !isComplete[3] ? <Segment color="red">Enter details to add to list!</Segment> : null}
                    {isComplete[0] && isComplete[1] && isComplete[2] && isComplete[3] ? <Segment color="green">Click submit to add!</Segment> : null}
                </Form>
            </div>
        </div>
    )
}

export default IncomeForm