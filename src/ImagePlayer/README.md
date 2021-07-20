```
import {ImagePlayer} from 'torinit_image_player';
import Apple from './Assets/apple.jpg';


 export default function App() {
  
  return (
    <div >
      
      <ImagePlayer images={[Apple,Apple,Apple,Apple]} autoplay showDots backdrop/>
    </div>
  );
}

```
