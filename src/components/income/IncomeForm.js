import React from 'react'
import Styles from './income.module.css'

import { addIncome } from '../../actions/index'
import { useDispatch } from 'react-redux'

import { Form, Dropdown, Header, Input, Button, Message, Segment, StatisticLabel} from 'semantic-ui-react'

function IncomeForm() {

    const [dropValue, setDropValue] = React.useState({icon: 'cog', text: 'Type'})
    const [isComplete, setIscomplete] = React.useState([false, false, false])
    const [inputValue, setInputValue] = React.useState({desc: null, amount: null,})

    const dispatch = useDispatch()

    function handleClick(icons, texts) { 
        setDropValue({icon: icons, text: texts})
        setIscomplete([true, isComplete[1], isComplete[2]])
    }

    return (    
        <div className={Styles.incomeFormContainer}>
            <div className={Styles.incomeFormWrapper}>
                <Header color="green">Income</Header>
                <Form onSubmit={() => {
                        dispatch(addIncome({item: dropValue.text, desc: inputValue.desc, amount: inputValue.amount}))
                        setInputValue({desc: '', amount: ''})
                        setIscomplete([false, false, false])
                    }}>
                     <Form.Field>
                        <Dropdown selection text={dropValue.text} icon={dropValue.icon} floating labeled button fluid className='icon'>
                            <Dropdown.Menu>
                                <Dropdown.Header content='Select Type'/>
                                <Dropdown.Divider/>
                                <Dropdown.Item onClick={() => handleClick('money', 'Income')} icon="money" text="Income"/>
                                <Dropdown.Item onClick={() => handleClick('trophy', 'Lottery')} icon="trophy" text="Lottery"/>
                                <Dropdown.Item onClick={() => handleClick('users', 'Friends/Family')} icon="users" text="Friends/Family"/>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <Input onChange={(e) => {setIscomplete([isComplete[0], true, isComplete[2]]);
                                                setInputValue({desc: e.target.value, amount: inputValue.amount})}} 
                                                fluid 
                                                placeholder="Input a description"
                                                value={inputValue.desc}>
                        </Input>
                    </Form.Field>
                    <Form.Field>
                        <label>Amount</label>
                        <Input onChange={(e) => {setIscomplete([isComplete[0], isComplete[1], true]);
                                                 setInputValue({desc: inputValue.desc, amount : e.target.value}) }}
                                                value={inputValue.amount} 
                                                icon="money" 
                                                iconPosition="left" 
                                                placeholder="Amount" 
                                                fluid>
                                                </Input>
                    </Form.Field>
                    <Form.Button content="Submit" fluid/>
                    {!isComplete[0] || !isComplete[1] || !isComplete[2] ? <Segment color="red">Enter details to add to list!</Segment> : null}
                    {isComplete[0] && isComplete[1] && isComplete[2] ? <Segment color="green">Click submit to add!</Segment> : null}
                </Form>
            </div>
        </div>
    )
}

export default IncomeForm