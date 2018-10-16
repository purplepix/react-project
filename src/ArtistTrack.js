import React from 'react';
import './ArtistTrack.css';

function ArtistTrack(props) {
  return (
    <li>
      <div>{props.title}</div>
      <iframe src={props.url} />
    </li>
  )
}

export default ArtistTrack;
