import React from 'react'
import Week from '../components/week'

import '../styles/styles.css'

export default class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Week/>
            </div>
        )
    }
}