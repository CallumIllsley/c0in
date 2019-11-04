import React from 'react'
import Styles from './income.module.css'

import { Header, Form, Input, Segment } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { incomeHistoricQuery, generateIncomeReport } from '../../actions'

function IncomeHistoricForm() {

    const [dates, setDates] = React.useState([])
    const [isComplete, setIsComplete] = React.useState([false, false])
    const [showGeneratedForm, setShowGeneratedForm] = React.useState(false)

    const dispatch = useDispatch()

    return ( 
        <div className={Styles.incomeFormContainer}> 
            <div className={Styles.incomeFormWrapper}>
                <Header color='green'>Generate Historic Report</Header>
                <Form className={Styles.form} onSubmit={ () => {
                        dispatch(incomeHistoricQuery(dates))
                        dispatch(generateIncomeReport(true))
                        setShowGeneratedForm(true)
                        setDates(['', ''])
                        setIsComplete([false, false])}
                     }>
                    <Form.Field>
                        <label>Starting Date</label>
                        <Input type='date' fluid value={dates[0]} onChange={(e) => {
                            setDates([e.target.value, dates[1]])
                            setIsComplete([true, isComplete[1]])
                        }}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Ending Date</label>
                        <Input type='date' value={dates[1]} fluid onChange={(e) => {
                            setDates([dates[0], e.target.value])
                            setIsComplete([isComplete[0], true])
                        }}/>
                    </Form.Field>
                    <Form.Button fluid content='Submit'/>
                    { isComplete[0] && isComplete[1] ? <Segment color='green'>Submit to generate report!</Segment>
                                                     : <Segment color='red'>Complete form then submit!</Segment> } 
                    { showGeneratedForm ? <Segment color='green'>Updated report!</Segment> : null}
                </Form>

            </div>
        </div>
    )
}

export default IncomeHistoricForm