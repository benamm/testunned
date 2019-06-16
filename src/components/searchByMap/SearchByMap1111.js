import React, { Component } from 'react'
import CedarMaps from '@cedarstudios/react-cedarmaps'
import { connect, setStore } from 'trim-redux';
import axios from 'axios';

import DOT_MARKER_URL from '../../img/blue-dot.png';
import { Link } from 'react-router-dom';
import { getBoundsFromPoints } from './helpers/utils'
import { polyline, points, center, buss } from './constants/data'
import { getCookie } from '../Helper/cookieManager';
import { getPosition } from '../Helper/location';


class SearchByMap extends Component {
  constructor(props) {
    super(props);
    const token = token ? getCookie('t') : this.props.token;
    setStore({ token: token })
  }

  requiredBusiness = [];
  regionBusiness = [];
  componentDidMount() {
    if (this.props.token) {
      axios.post('http://tpi.uneed.ir:7100/business/search', {}, { headers: { 't': this.props.token } })
        .then((response) => {
          if (response.data.result.data) {
            this.requiredBusiness = response.data.result.data.map((Business, index) => {
              if (Business.point) {
                this.regionBusiness[index] = {
                  lan: Business.point[1],
                  let: Business.point[0],
                  id: Business._id,
                  name: Business.name,
                };
              }
            });
          }
          setStore({ LoadingInSearchComponent: false });
        })
    }
  }

  content;
  mapInit = async() => {
    
    let mapCenter = center;

    await getPosition()
    .then((position) => {
      console.log(position);
        const sum = polyline.reduce((sum, point) => {
          sum.lat += position.coords.latitude,
          sum.lng += position.coords.longitude
          return sum
        }, { lat: 0, lng: 0 })
        mapCenter.lat = sum.lat / polyline.length
        mapCenter.lng = sum.lng / polyline.length
        const { ne, sw } = getBoundsFromPoints(polyline)
        const { RotationControl, ZoomControl, ScaleControl, Feature, Layer, Marker } = CedarMaps.getReactMapboxGl()
    
        if (this.props.loading) {
          this.content = <div className="first-loading">loading ...!</div>;
        } else {
          this.content =
            <CedarMaps
              containerStyle={{
                height: '100vh',
                width: '100%'
              }}
              token='08482c90b8575ff37696edf016208fe80270d217'
              preserveDrawingBuffer={false}
              center={[mapCenter.lng, mapCenter.lat]}
              fitBounds={[sw, ne]}
            >
              <RotationControl />
              <ZoomControl />
              <ScaleControl
                position='bottom-left'
              />
              {this.renderPoints(Marker)}
            </CedarMaps>
        }
        
      })
  }

  render() {
    if (!CedarMaps) return <div />
    this.mapInit();
    return (
      <div className="navigation container-fluid">
        {this.content}
      </div>
    )
  }

  renderPoints(Marker) {
    return this.regionBusiness.map((point, index) => {
      const markerUrl = DOT_MARKER_URL
      return (
        <Marker key={1}
          coordinates={[point.lan, point.let]}
          key={index}
        >
          <img src={markerUrl} />
          <p><Link to={`Business/${point._id}`}>{point.name}</Link></p>
        </Marker>
      )
    })
  }
}

const mstp = state => ({
  token: state.token,
  LoadingInSearchComponent: state.LoadingInSearchComponent
})

export default connect(mstp)(SearchByMap);