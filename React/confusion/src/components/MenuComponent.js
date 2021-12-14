import React, { Component } from "react";
import { Card, CardImgOverlay, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import DishDetail from "./DishDetailComponent";

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
          selectedDish: null
        };
    }

    render() {
        return (
          <div>
            <DishDetail dish={this.state.dish}></DishDetail>
          </div>
      );
    }
}

export default Menu;