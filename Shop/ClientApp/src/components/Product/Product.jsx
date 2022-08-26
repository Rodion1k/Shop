import React, {Component} from 'react';
import './Product.css'

class Product extends Component {
    constructor(props) {
        super(props);
        this.addToCartHandle = this.addToCartHandle.bind(this);
    }

    addToCartHandle() {
        //TODO реализация

    }

    render() {
        return (
            <div>
                <img src={this.props.productImg}/>
                <div>{'Цена:' + this.props.price}</div>
                <div>{'Описание:' + this.props.info}</div>
                <button onClick={this.addToCartHandle}>В корзину</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cartProducts: state.cartProducts
    }
}
// const mapDispatchToProps = dispatch => {
//     return {
//         addToCartHandle: () => dispatch(addToCartHandle())
//     }
// }

export default Product;