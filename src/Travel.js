import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/Travel.css'

//Import actions
import * as travelActions from './js/Redux/actions/travel'

//images
import CubaImg from './images/travel/cuba.jpg';
import ChinaImg from './images/travel/greatwall.jpg';
import IndiaImg from './images/travel/varanasi.jpg';
import SwitzerlandImg from './images/travel/Switzerland.jpg';



class Travel extends Component {

    constructor(props){
        super(props);

        this.travelArray = [
            {
                title: 'Cuba',
                img: CubaImg
            },
            {
                title:'China',
                img: ChinaImg
            },
            {
                title:'India',
                img: IndiaImg
            },
            {
                title:'Switzerland',
                img: SwitzerlandImg
            }
        ];
    }

    componentDidMount(){
        travelActions.setTravelArray(this.travelArray)
    }

    renderPhotoGallery(){
        return this.props.travel.array.map( (item, index) => {
            return (
              <div key={index}>
                  <div className="travel-container-img-container">
                      <a href={item.img} target="_blank">
                          <div className="travel-container-img-title">{item.title}</div>
                          <div className="travel-container-img-div"><img alt="Travel Adeventure" src={item.img} /></div>
                      </a>
                  </div>
              </div>
            );
        })
    }

    render(){
        return (
            <div className="travel-container">
                <div className="travel-container-header">TRAVEL</div>
                <p>The following is a collection of photos I have taken on some of my trips</p>
                <div className="travel-container-content-container">
                    {this.renderPhotoGallery()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        travel: store.travel
    };
};

export default connect(mapStateToProps)(Travel);
