import React from 'react';
import {data} from "./data";
import {Line} from "react-chartjs-2";

const Chart = ({rows}) => {

    return (
        <Line
            data={data({rows})}
        />
    );
}

export default Chart;