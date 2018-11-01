import React, {Component} from 'react';
import './Card.css';

class Card extends Component {

    constructor(props){
        super(props);
    }
        
    render(){
        return (
            <div className="weather-card one">
				<div className="top">
					<div className="wrapper">
						<div className="mynav">
							<a href="javascript:;"><span className="lnr lnr-chevron-left"></span></a>
							<a href="javascript:;"><span className="lnr lnr-cog"></span></a>
						</div>
						<h1 className="heading">{this.props.name}</h1>
						<h3 className="location">{this.props.username}</h3>
						<p className="temp">
							<span className="temp-value">{this.props.website}</span>
						</p>
					</div>
				</div>
				<div className="bottom">
					<div className="wrapper">
						<ul className="forecast">
							<li className="active">
								<span className="date">{this.props.address.street}</span>
								<span className="lnr lnr-cloud condition">
									<span className="temp">{this.props.address.city}</span>
								</span>
							</li>
                            <li className="active">
								<span className="date">{this.props.company.name}</span>
								<span className="lnr lnr-cloud condition">
									<span className="temp">{this.props.company.catchPhrase}</span>
								</span>
							</li>
                            <li className="active">
                                <button onClick={()=>{ this.props.consulta_album(this.props.id) }} type="button" className="btn btn-primary btn-block">Ver Album</button>
                            </li>
						</ul>
					</div>
				</div>
			</div>
        );
    }
}

export default Card;