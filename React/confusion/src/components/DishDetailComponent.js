import React, { Component } from "react";
import { Card, CardImgOverlay, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

const MONTHNAMES = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                    ];

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
          selectedDish: null
        };

    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComment(dish) {
        if (dish != null)
        {
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {dish.comments.map((comment) => {
                            const date = new Date(comment.date)
                            return(
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author}, {MONTHNAMES[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        }
        else
            return(
                <div></div>
            );
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
  
          return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                  <div  className="col-12 col-md-5 m-1">
                      {this.renderComment(this.state.selectedDish)}
                  </div>
                </div>
            </div>
        );
      }

}

export default DishDetail;




