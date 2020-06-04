import React from 'react';

class Clock extends React.Component {

    currentTime = () => {
        let date = new Date(),
            hour = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds(),
            midday = "AM",

        hour = this.updateTime(hour);
        min = this.updateTime(min);
        sec = this.updateTime(sec);

        
        midday = (hour >= 12) ? "PM" : "AM";

        document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + midday;

        let t = setTimeout(function(){ currentTime() }, 1000);
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
            <div id="clock">
                {this.currentTime()}
            </div>
        )
    }
}