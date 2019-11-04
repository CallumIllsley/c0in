import React from 'react'
import Styles from './menu.module.css'

import { useDispatch, useSelector } from 'react-redux'
import { changePage, resetState } from '../../actions/index'

import { Button, Image, List } from 'semantic-ui-react'


//Main component that houses the menu for the application
function Menu() {

    const dispatch = useDispatch()

    let balance = useSelector(state => state.balance)

    return (
        <div className={Styles.menuContainer}>
            <div className={Styles.logoWrapper}>
                <Image src={require("../../resources/coin.png")} className={Styles.logo}></Image>
            </div>
            <Button className={Styles.balance}>Balance: £{parseInt(balance)}</Button>
            <Button className={[Styles.overview, Styles.btnHover].join(' ')} onClick={() => dispatch(changePage('overview'))}>Overview</Button>
            <Button className={[Styles.income, Styles.btnHover].join(' ')} onClick={() => dispatch(changePage('income'))}>Income</Button>
            <Button className={[Styles.outgoings, Styles.btnHover].join(' ')} onClick={() => dispatch(changePage('outgoings'))}>Outgoings</Button>
            <Button className={[Styles.settings, Styles.btnHover].join(' ')}>Settings</Button>
            <div className={Styles.infoWrapper}>
                <List.Item className={Styles.info} icon='users' content='c0in'/>
                <List.Item className={Styles.info} icon='marker' content='London, UK' />
                <List.Item className={Styles.info} icon='mail' content='c0in@coin.io' />
                <List.Item className={Styles.info} icon='linkify' content='c0in.io' />
                <List.Item className={Styles.info} content='DEV-CLEAR STATE' onClick={() => dispatch(resetState())}/>
            </div>
        </div>
    )
}

export default Menu;