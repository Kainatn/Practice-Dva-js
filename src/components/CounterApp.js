import React from 'react';
import { connect } from 'dva';


const CounterApp = connect(({ count }) => ({
    count
}))
    (function (props) {
        console.log(props);
        return (
            <div>
                <div>Number : {props.count}</div>
                <button onClick={() => { props.dispatch({ type: 'count/add' }) }}>+</button>
                <button onClick={() => { props.dispatch({ type: 'count/minus' }) }}>-</button>

            </div>
        );
    });





export default CounterApp; 