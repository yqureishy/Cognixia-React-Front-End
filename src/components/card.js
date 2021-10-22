import React, {Component} from "react";

class Card extends Component{

    render(){
        return(
            <div className="card bg-secondary text-green rounded col-lg-8 col-12 col-md-12" >
                <Header name={this.props.info.name} />
                <Body rating ={this.props.info.rating} address={this.props.info.address} 
                               phone={this.props.info.phone} description={this.props.info.description} />
            </div>
        );
    }
}

function Header(props) {
        return(
            <div className="card-header">
                <h3><b>{props.name}</b></h3> 
            </div>
        );
}

function Body(props) {
    return(
        <div className="card-body">
            <p><b>{props.rating}/5 Stars</b></p>
            <p>{props.address}</p>
            <p>{props.phone}</p>
            <p>{props.description}</p>
        </div>
    );
}

export default Card;