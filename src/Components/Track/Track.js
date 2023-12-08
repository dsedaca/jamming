import React from 'react';
import './Track.css';

function Track() {
    const tracks = {
        Song1: {
            name: 'Castle on the Hill',
            artist: 'Ed Sheeran',
            album: 'Division',
            id: 1
        }, 
        Song2: {
            name: 'Yesterday',
            artist: 'The Beatles',
            album: 'Help!',
            id: 2
        },
        Song3: {
            name: 'Yellow',
            artist: 'Coldplay',
            album: 'Parachutes',
            id: 3
        }
    }

    
    const trackList = [];

    for (const track in tracks) {
        trackList.push(
            <div className='track' key={tracks[track].id}>
                {tracks[track].name}
                {tracks[track].artist}
                {tracks[track].album}
            </div>
        )
    }

    return (
        <div>
            {trackList}
        </div>
    )
}

export default Track;