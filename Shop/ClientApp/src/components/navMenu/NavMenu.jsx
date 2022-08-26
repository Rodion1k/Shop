import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import './NavMenu.css'
import MainPage from "../MainPage/MainPage";
import Cart from "../Cart/Cart";
import {Container, NavLink} from 'reactstrap';

class NavMenu extends Component {
    render() {
        return (
            <div>
                <nav>
                    <NavLink tag={Link} className="kek" to="/home">Главная</NavLink>
                    <Link tag={Link} className="kek" to="/products">Товары</Link>
                    <Link tag={Link} className="kek" to="/cart">Корзина</Link>
                </nav>
                <Container>
                    <Route exact path="/home" component={MainPage}></Route>
                    <Route path="/products"></Route>
                    <Route path="/cart" component={Cart}></Route>
                </Container>
            </div>
        );
    }
}

export default NavMenu;