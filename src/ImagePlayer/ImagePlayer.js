import React from 'react';
import './ImagePlayer.css';

export const ImagePlayer = ({images,timeGap}=props) => {
    const [current,setCurrent] = React.useState(0);
    const [isPlaying,setPlaying] = React.useState(false);

    const handlePrev=()=>{
        if(current!==0){
            setCurrent(current-1)
        }
    }

    const handleNext=()=>{
        if(current<images.length-1){
            setCurrent(current+1)
        }
        else setCurrent(0)
    }

    const handlePlaying=()=>{
                if(current<images.length-1){
                    setCurrent(current+1)
                }
                else setCurrent(0)
    }

    return(
        <div style={{display:'flex',flexDirection:'column',border:'1px solid',borderRadius:'10px',padding:'40px 10px',height:'200px',width:'fit-content'}}>
        <div className='image-wrapper'>
            <span onClick={handlePrev}>{'<'}</span>
                <img src={images[current]} alt=''/>
            <span onClick={handleNext}>{'>'}</span>
        </div>
        {isPlaying && <span  onClick={()=>{setInterval(() => {
            handlePlaying();
        }, timeGap || 300);}}>{'||'}</span>}
        {!isPlaying && <span  >{'|>'}</span>}
        </div>
    )
}