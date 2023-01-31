import logo from './logo.svg';
import './App.css';
import BTGameTaiXiu from './DemoRedux/BTGameTaiXiu/BTGameTaiXiu';
// import BTLND from './DemoRedux/BTQLND/BTLND';
import ParentComponent from './LifeCycle/DemoLifeCycle/ParentComponent';
import BTLND from './LifeCycle/BTQLND/BTLND';

function App() {
  return (
    <>

      {/* <ParentComponent/> */}


      <BTLND/>
      {/* <BTLND/> */}
      {/* <BTGameTaiXiu/> */}
    </>
  );
}

export default App;
