import './App.css';
import { GettingStarted2 } from './components/EventListener/GettingStarted2';
import GettingStarted from './components/GettingStarted';
import { GettingStarted3 } from './components/MultipleContainers/GettingStarted3';


function App() {
  return (
    <div className="App">
    
       <GettingStarted />  
       <br />
       
       <div className='divider'/>
       <GettingStarted2 />

       <div className='divider'/>
       <GettingStarted3 />
      {/* <header className="App-header">
          <h2>Getting Started with DndKit</h2>
         
      </header> */}
    

    </div>
  );
}

export default App;
