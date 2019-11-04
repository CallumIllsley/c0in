import React from 'react'

import { Loader, Dimmer } from 'semantic-ui-react'

function Loading() {
    return ( 
        <Dimmer acive>
            <Loader size='massive' />
        </Dimmer>
    )
}

export default Loading