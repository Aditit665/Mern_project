import { Song } from "./song"

export const Songs =({allsongs})=>{
    console.log('*****All Songs', allsongs);
    //map (js)
    //allsongs (data) ----> convert ----> JSX
    return (<>
           {allsongs.map((currentSong,index)=> <Song key = {index} song = {currentSong}/>)}
    </>)

}