import React, {Component} from 'react';
import Product from "../Product/Product";

class MainPage extends Component {
    render() {
        return (
            <div>
                <Product productImg='/britan_flag.svg' price={2323 + '$'} info='afDSGFzbgesFSaDasF'/>
                <Product productImg='/button_back.svg' price={2323 + '$'} info='afDSGFzbgesFSaDasF'/>
                <Product productImg='/button_next.svg' price={2323 + '$'} info='afDSGFzbgesFSaDasF'/>
                <Product productImg='/button_start.svg' price={2323 + '$'} info='afDSGFzbgesFSaDasF'/>
                <Product productImg='/button_next_hover.svg' price={2323 + '$'} info='afDSGFzbgesFSaDasF'/>
            </div>
        );
    }
}

export default MainPage;