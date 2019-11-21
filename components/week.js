import React from 'react';
import Item from '../components/item'

import '../styles/week.css'

export default class Week extends React.Component {
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    state = {
        available: []
    }

    handleMouseOver(e, dayIndex, itemIndex) {
        if(e.buttons != 1) return
        this.handleCheck(dayIndex, itemIndex)
    }
    
    handleCheck(dayIndex, itemIndex) {
        if(dayIndex == 0 || itemIndex == 0) return
        if (this.checkIfAvailable(dayIndex, itemIndex)==-1){
            this.setState((prevState) => ({
                available: [...prevState.available, { dayIndex, itemIndex }]
            })
        )} else {
            return this.state.available.shift()
        }
    }
    
    checkIfAvailable(dayIndex, itemIndex) {
        return this.state.available.findIndex(item =>
            item.dayIndex == dayIndex && item.itemIndex == itemIndex
            ) 
    }



    getItems(dayIndex) {
        return [...Array(25)].map((_, itemIndex) => (
            <Item 
            onMouseOver = { (e) => this.handleMouseOver(e, dayIndex, itemIndex)}
            onClick = { () => this.handleCheck(dayIndex, itemIndex) }
            available = {this.checkIfAvailable(dayIndex, itemIndex)}
            >
                {
                    dayIndex > 0 && itemIndex == 0 && this.days[dayIndex-1]
                }
                {
                    dayIndex == 0 && itemIndex > 0 && `${itemIndex}:00`
                }
            </Item>
        ))
    }
    
    getDays() {
        return [...Array(8)].map((_, dayIndex) => (
            <div className="day">
                {this.getItems(dayIndex)}
            </div>
        ))
    }

    render() {
        return (
            <div className="week">
                {this.getDays()}
            </div>
        )
    }
}