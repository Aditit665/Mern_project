import { useEffect, useState } from "react";
import { Search } from "../component/Search"
import { Songs } from "../component/Songs";
import { getSongs } from "../services/api-client";
import { Player } from "../component/Player";

export const SearchPage = ()=>{
    const[allSongs, setSongs] = useState([]);
    const [flag, setFlag] = useState(false);
    const loadSongs = async ()=>{
        setSongs(await getSongs('latest Songs'))
    }

    //component life cycle
    useEffect (()=>{
        loadSongs();

    },[])

    const togglePlayer = (flag)=>{
        setFlag(flag);

    }
    const getArtistName = async(artistName) => {
        console.log('Receive artist name',artistName)
        setSongs(await getSongs(artistName));
    }
    const jsx = <> <Search fn = {getArtistName}/>
    <Songs allsongs={allSongs}/></>
    return (
    <div className="container">
        <h1 className="alert alert-info text-center">Music Store</h1>
    
    {flag?<Player/>:jsx}
    </div>);
}