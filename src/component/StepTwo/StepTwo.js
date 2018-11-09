import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { stepTwo } from '../../ducks/reducer'

class StepTwo extends Component {
    constructor(){
        super()

        this.state = {
            img: ''
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
            img: this.props.img
        })
    }

    render(){
        return(
            <div>
                
                <input placeholder='Image Url' value={this.state.img} onChange={(e) => this.handleChange(e.target.value, 'img')}/> 

                <button>
                    <Link to='/wizard/step1'>
                    Previous Step
                    </Link>
                </button>

                <button onClick={e => this.props.stepTwo(this.state.img)}>
                    <Link to='/wizard/step3'>
                        Next Step
                    </Link>
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        img: state.img
    }
}

export default connect(mapStateToProps, {stepTwo})(StepTwo)