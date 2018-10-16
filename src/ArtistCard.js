import React, { Component } from 'react';
import Card from './Card.js';
import ArtistTrack from './ArtistTrack.js';
import './ArtistCard.css';

class ArtistCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tracks: [] };
    this.getArtistTracks = this.getArtistTracks.bind(this);
  }
  getArtistTracks() {
    const BASE_URL = 'https://peaceful-badlands-98440.herokuapp.com';
    const options = {
      method: 'get',
      credentials: 'include'
    };
    fetch(`${BASE_URL}/artists/${this.props.id}/tracks`, options)
      .then(res => res.json())
      .then(data => {this.setState({ tracks: data })});
  }
  render() {
    return (
      <Card>
        <h2>{this.props.name}</h2>
        <h3>{this.props.genre}</h3>
        <button onClick={this.getArtistTracks}>Ver Músicas</button>
        <ul>
          {this.state.tracks.map(track => ArtistTrack(track))}
        </ul>
      </Card>
    )
  }
}

export default ArtistCard;
