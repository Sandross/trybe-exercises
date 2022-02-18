import Image from './image';
import cat from './cat.webp';

function App() {
  return (
    <Image source={cat} alternativeText="Cute cat staring" />
  )
}

export default App;
