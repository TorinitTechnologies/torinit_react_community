import {ImagePlayer} from 'torinit_image_player';
import Apple from './Assets/apple.jpg';
import {Accordion} from './torinit_Accordion/src/index'
import {accordionData} from './torinit_Accordion/src/helper'
 export default function App() {
  
  return (
    <div >
      
      <ImagePlayer images={[Apple,Apple,Apple,Apple]} autoplay showDots backdrop/>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
}