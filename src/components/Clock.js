import React from 'react';

class Clock extends React.Component {


    componentDidMount() {
        setInterval(()=> {
            this.currentTime();
        })
    }
    
    constructor() {
        super();
        this.state = {
            time: "00:00:00 AM"
        }
    }
    

    currentTime = () => {
        let date = new Date(),
            hour = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds(),
            midday = "AM";

        hour = this.updateTime(hour);
        min = this.updateTime(min);
        sec = this.updateTime(sec);
 
        midday = (hour >= 12) ? "PM" : "AM";
        hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);
        let t = setTimeout(function(){ this.currentTime() }, 1000);
        return hour + " : " + min + " : " + sec +  midday;
    }

    updateTime = (k) => {
        if (k < 10) {
            return "0" + k;
        } else {
            return k; 
        }
    }

    render(){
        return(
            <div id="clock" ref={this.clockRef}>
                {this.currentTime()}
            </div>
        )
    }
}

export default Clock