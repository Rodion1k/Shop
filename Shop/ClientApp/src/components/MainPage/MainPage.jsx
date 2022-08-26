import React, {Component} from 'react';
import Product from "../Product/Product";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { phones: [] };
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    render() {
        return (
            <div>
                {
                    this.state.phones.map(phone=>
                        <div key={phone.name}>
                        <Product  productImg={phone.imgPath} price={phone.price} info={phone.name}/>
                        </div>
                    )
                }
            </div>
        );
    }
    async populateWeatherData() {
        const response = await fetch('MainPage');
        const data = await response.json();
        this.setState({phones:data})// redux
        console.log(data)
    }
}

export default MainPage;