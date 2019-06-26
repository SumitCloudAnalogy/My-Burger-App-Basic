import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';
import logo from '../../../logo.svg';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
];

const buildControls = (props) =>  {
    // console.log("BuildControls.js", props);
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            <h1>Use This</h1>
            <img src={logo} alt="" className={classes.logo}/>
            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label} label={ctrl.label}
                    added={()=> props.ingredientAdded(ctrl.type)}
                    removed={()=> props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}
            <button className={classes.OrderButton}
            disabled={!props.purchasable}>ORDER NOW</button>
        </div>
    )
} ;


export default buildControls;
