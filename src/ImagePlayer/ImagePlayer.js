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

    if(isPlaying){
        setTimeout(()=>{
            handleNext();
        },timeGap || 2000);
    }

    return(
        <div style={
            {display:'flex',
            flexDirection:'column',
            border:'1px solid',
            borderRadius:'10px',
            padding:'40px 10px',
            height:'200px',
            width:'300px'}
            }>
        <div className='main-image-wrapper'>
            <span className={current===0 && 'inactive'} onClick={handlePrev}>{'<'} </span>
            <div className='image-wrapper'>
                <img src={images[current]} className='img-imgWrapper' alt=''/>
            </div>
            <span className={current===images.length-1 && 'inactive'} onClick={handleNext}>{'>'}</span>
        </div>
        {isPlaying && <span className='play-pause-button' onClick={()=>setPlaying(false)}>{'||'}</span>}
        {!isPlaying && <span  className='play-pause-button' onClick={()=>setPlaying(true)} >{'|>'}</span>}
        </div>
    )
}