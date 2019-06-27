import React, {Component} from 'react';
import classes  from './Modal.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'


const fileName = '[Modal.js]';
class Model extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log(fileName, 'WillUpdate');
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={classes.Modal} style={{transform:this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'}}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}
export default Model;
