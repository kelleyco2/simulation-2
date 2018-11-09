import React, {Component} from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom'
import Axios from 'axios';


class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            houses: []
        }

        this.getHouses = this.getHouses.bind(this)
        this.deleteHouse = this.deleteHouse.bind(this)
    }

    getHouses(){
        Axios.get('/api/houses').then(res => {
            this.setState({
                houses: res.data
            })
        })
    }

    componentDidMount(){
        this.getHouses()
    }

    deleteHouse(id){
        Axios.delete(`/api/houses/${id}`).then(res => {
            console.log(res)
        })
        this.getHouses()
    }



    render() {
        let houses = this.state.houses.map((house, i) => {
            return(
                <div key={i}>
                        <House 
                        name={house.name}
                        address={house.address}
                        city={house.city}
                        state={house.state}
                        zip={house.zip}
                        id={house.id}
                        img={house.img}
                        monthlyMortgage={house.monthly_mortgage}
                        desiredRent={house.desired_rent}
                        deleteHouse={this.deleteHouse}/>
                    </div>
                )
            })
        return (
            <div>
                <Link to='/wizard/step1'>Add New Property</Link>
                {houses}
            </div>
        )
    }
}

export default Dashboard