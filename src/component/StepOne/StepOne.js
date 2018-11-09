import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { stepOne } from '../../ducks/reducer'


class StepOne extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }

        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(val, key){
        let obj = {}
        obj[key] = val
        this.setState(obj)
    }

    componentDidMount(){
        this.setState({
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            state: this.props.sate,
            zip: this.props.zip
        })
    }

    render() {
        return (
            <div>
                <input placeholder='Name' value={this.state.name} onChange={(e) => this.handleChange(e.target.value, 'name')}/>
                <input placeholder='Address' value={this.state.address} onChange={(e) => this.handleChange(e.target.value, 'address')}/>
                <input placeholder='City' value={this.state.city} onChange={(e) => this.handleChange(e.target.value, 'city')}/>
                <input placeholder='State' value={this.state.state} onChange={(e) => this.handleChange(e.target.value, 'state')}/>
                <input placeholder='Zip' value={this.state.zip} onChange={(e) => this.handleChange(e.target.value, 'zip')}/>
                <button onClick={e => this.props.stepOne({
                    name: this.state.name,
                    address: this.state.address,
                    city: this.state.city,
                    state: this.state.state,
                    zip: this.state.zip
                })}>
                    <Link to='/wizard/step2' >
                        Next Step
                    </Link>
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
        zip: state.zip
    }
}

export default connect(mapStateToProps, {stepOne})(StepOne)