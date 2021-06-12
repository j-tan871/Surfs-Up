import logo from './logo.svg';
import './App.css';
import Result from './components/Result'
import Catherine from './components/Catherine'
import Home from './pages/Home'
import EssayForm from './test'
import { NavItem } from 'reactstrap';

function App() {
  // const searchresults = ['apple', 'pear', 'banana'];
  // const faces = [':D', ':%^)', '>:C']

  const info = [
    {
      location: 'Paris Baguette',
      address: '2300 Main St', 
      number:'214-234-2341'
    }, 
  ]

  return (
    <div>
      <h1 className='display-1 m-5'>Trip Planner</h1>
      <Home />
      {
      info.map((item, id) => 
        <searchResult 
          key={id}
          location={item.location}
          address={item.address}
          number={item.number}
        />
      )
    }
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
