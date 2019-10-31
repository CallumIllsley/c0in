import React from 'react'
import Styles from './menu.module.css'

import { Button } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import { List } from 'semantic-ui-react'


//Main component that houses the menu for the application
function Menu() {
    return (
        <div className={Styles.menuContainer}>]
            <Image  className={Styles.image} />
            <Button className={[Styles.overview, Styles.btnHover].join(' ')}>Overview</Button>
            <Button className={[Styles.income, Styles.btnHover].join(' ')}>Income</Button>
            <Button className={[Styles.outgoings, Styles.btnHover].join(' ')}>Outgoings</Button>
            <Button className={[Styles.settings, Styles.btnHover].join(' ')}>Settings</Button>
            <div className={Styles.infoWrapper}>
                <List.Item className={Styles.info} icon='users' content='c0in'/>
                <List.Item className={Styles.info} icon='marker' content='London, UK' />
                <List.Item className={Styles.info} icon='mail' content='c0in@coin.io' />
                <List.Item className={Styles.info} icon='linkify' content='c0in.io' />
            </div>
        </div>
    )
}

export default Menu;