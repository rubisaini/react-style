/**
 * Created by intelligrape on 10/5/17.
 */

import React, {Component} from 'react';

export default class Footer extends Component{
    render(){
        const footer = `.footer {background-color: green}`
        return (
            <div className="footer">
                For more detail please drop an email at rubi.saini@tothenew.com
            <style>{footer}</style>
            </div>

        )
    }
}