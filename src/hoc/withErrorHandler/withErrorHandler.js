import React, {Component} from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Model from "../../components/UI/Modal/Modal";

const withErrorHandler  = (WrappedComponent, axios) => {
    return class extends  Component {
        state = {
            error: null
        };
        componentWillMount() {
            this.reqInteceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });

            this.resInteceptor =axios.interceptors.response.use(res => res, error => {
               this.setState({error: error})
            })
        }
        componentWillUnmount() {
            console.log('Will Unmount', this.reqInteceptor, this.resInteceptor);
            axios.interceptors.request.eject(this.reqInteceptor);
            axios.interceptors.request.eject(this.resInteceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        };

        render() {
            return(
                <Aux>
                    <Model
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}
                    >
                       {this.state.error ? this.state.error.message : null}
                    </Model>
                    <WrappedComponent {...this.props}/>
                </Aux>
            )
        }
    }
};

export default withErrorHandler;
