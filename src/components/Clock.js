import React from 'react';

class Clock extends React.Component {

 currentTime = () => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hour = this.updateTime(hour);
    min = this.updateTime(min);
    sec = this.updateTime(sec);

    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec;

    let t = setTimeout(function(){ currentTime() }, 1000);

}

    render(){
        return(
            <div id="clock">

            </div>
        )
    }
}