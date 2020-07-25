import React from 'react';
import {usePromiseTracker} from 'react-promise-tracker'

export const LoadSpinner = (props) => {
    const {promiseInProgress} = usePromiseTracker()

    return(
        <div>
        <i className="fa fa-spinner fa-spin" /> Loading...
      </div>
    )
} ;