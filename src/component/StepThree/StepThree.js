import React, {Component} from 'react'
import { Link, Redirect } from 'react-router-dom'
import Axios from 'axios'
import { connect } from 'react-redux'
import { stepThree, cancel } from '../../ducks/reducer'


class StepThree extends Component {
    constructor(){
        super()

        this.state = {
            monthlyMortgage: 0,
            desiredRent: 0,
            redirect: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.addHouse = this.addHouse.bind(this)
        this.renderRedirect = this.renderRedirect.bind(this)
    }

    handleChange(val, key){
        let obj = {}
        obj[key] = val
        this.setState(obj)
    }


    renderRedirect(){
        if(this.state.redirect){
            return <Redirect to='/' />
        }
    }

    addHouse(){
        let { name, address, city, state, zip, img} = this.props
        let { monthlyMortgage, desiredRent } = this.state
        Axios.post('/api/houses', {name, address, city, state, zip, img, monthlyMortgage, desiredRent}).then(res => {
            this.setState({
                redirect: true
            })
        })
        this.props.cancel()
    }

    componentDidMount(){
        this.setState({
            monthlyMortgage: this.props.monthlyMortgage,
            desiredRent: this.props.desiredRent
        })
    }

    render(){
        return(
            <div>
                {this.renderRedirect()}
                <h3>Recommended Rent: {this.state.monthlyMortgage * 1.25}</h3>
                Monthly Mortgage Amount<input  value={this.state.monthlyMortgage} onChange={(e) => this.handleChange(e.target.value, 'monthlyMortgage')}/><br/>
                Desired Monthly Rent<input  value={this.state.desiredRent} onChange={(e) => this.handleChange(e.target.value, 'desiredRent')}/>
                <button onClick={e => this.props.stepThree({
                    monthlyMortgage: this.state.monthlyMortgage,
                    desiredRent: this.state.desiredRent
                })}>
                    <Link to='/wizard/step2'>
                        Previous Step
                    </Link>
                </button>
                <button onClick={this.addHouse}>
                    Complete
                </button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
        img: state.img,
        monthlyMortgage: state.monthlyMortgage,
        desiredRent: state.desiredRent
    }
}

export default connect(mapStateToProps, {stepThree, cancel})(StepThree)