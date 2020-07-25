import React from 'react';
import {usePromiseTracker} from 'react-promise-tracker'

export const LoadSpinner = (props) => {
    const {promiseInProgress} = usePromiseTracker()

    return(
        <div>
            {
                (promiseInProgress === true) ?
                    console.log("Hey I'm testing my loading indicator!")
                :
                    null
            }
        </div>
    )
} ;