import { useState } from "react";

/* eslint-disable jsx-a11y/alt-text */
export const Song = ({fn, song })=>{
    console.log(song);
    const [playerFlag, setPlayerFlag] = useState(false);
    const showPlayer = ()=>{
          fn(true);
    }
    return (<div className="row">
        <div className="col-4">
            < img src ={song.artworkUrl100} />
        </div>
        <div className="col-4">
            {song.artistName} {song.trackName}
        </div>
        <div className = "col-4">
            <button onClick = {showPlayer} className="btn btn-primary ">Play Songs</button>

        </div>

    </div>);
}