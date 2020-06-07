import React from 'react';

class Clock extends React.Component {


    componentDidMount() {
        setInterval(()=> {
            this.currentTime();
        })
    }

    state = {
            time: "00:00:00 AM"
        }
    

    currentTime = () => {
        setInterval(() => {

            let date = new Date(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            year = date.getFullYear(),
            hour = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds(),
            ampm = this.hour >= 12 ? 'PM' : 'AM';

            hour = hour % 12;
            hour = hour ? hour : 12;
            hour = fullTime(hour);
            min = fullTime(min);
            sec = fullTime(sec);

            this.setState({
                time: `${month}/${day}/${year} - ${hour % 12}:${min}:${sec}:${ampm}`
            });
            function fullTime(n) { return n < 10 ? "0" + n : n }
        }, 1000);
    }

    render(){
        return(
            <div id="clock">
                {this.state.time}
            </div>
        )
    }
}

export default Clock