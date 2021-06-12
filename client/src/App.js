import logo from './logo.svg';
import './App.css';
import Result from './components/Result'
import Catherine from './components/Catherine'
import Home from './pages/Home'

function App() {
  // const searchresults = ['apple', 'pear', 'banana'];
  // const faces = [':D', ':%^)', '>:C']

  return (
    <div>
      <Home />
    </div>
    // <div>
    //   {
    //     searchresults.map((result) => 
    //     <Result 
    //       fruit={result}
    //     />
    //     )
    //   }
    //   {
    //     faces.map((face) =>
    //     <Result
    //       head={face}
    //     />
    //   )
    //   }
    //   {/* {
    //     faces.map(face => 
    //     <Catherine
    //       something={face}
    //     />)
    //   } */}
    // </div>
  );
}

export default App;
