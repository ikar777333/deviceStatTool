import React, {Component} from "react";
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';
import axios from 'axios';
import moment from 'moment';

class App extends Component {

    state = {
        data: []
    };

    formatXAxis = (tickItem) => {
        return moment.unix(tickItem).format("LTS")
    };

    componentDidMount() {
        this.getData();
        this.interval = setInterval(() => {
            this.getData();
        }, 60000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getData() {
        axios.get(`http://localhost:8181/data`)
            .then(res => {
                const data = res.data.map(obj => {
                    obj.utcStamp = this.formatXAxis(obj.utcStamp);
                    return obj;
                });
                this.setState({ data });
            });
    }

    render() {
        return (
            <div>
                <LineChart width={1200} height={800} data={this.state.data}
                           margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="utcStamp"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend  />
                    <Line name="EIA" type="monotone" strokeWidth={3} dataKey="valtotal" stroke="#8884d8" dot={false}/>
                </LineChart>
            </div>
        );
    }
}

export default App;