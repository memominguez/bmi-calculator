
import Habits from './components/Habits';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Limitations from './components/Limitations';
import './sass/index.scss';


function App() {

  // References
  // https://www.youtube.com/watch?v=SX9lDjFgeUU
  // https://www.youtube.com/watch?v=up60it73iqU&list=PLkY85cDHOEpsxbR-rNaLJYy2oJWZ305x1

 
 
  return (
    <main>
      <Hero/>
      <Intro />
      <Habits />
      <Limitations />
    </main>
  )
}

export default App
