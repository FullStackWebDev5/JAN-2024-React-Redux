import './App.css';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import { Provider } from 'react-redux'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        App
        <div style={{display: 'flex'}}>
          <Child1 />
          <Child2 />
        </div>
      </div>
    </Provider>
  );
}

export default App;


/*
  # REDUX: A central state

    # REDUCER FUNCTION AND CREATE STORE
      - Arguments:
        - state = initial state
        - action
      - STATE
      - LOGIC FOR STATE UPDATE
  
    # REACT REDUX CONFIGURATION (createStore, Provider)
      - Provider Component with store prop

    # SUBSCRIBE COMPONENTS TO REDUX (useSelector)

    # DISPATCH ACTIONS (useDispatch)
      - ACTION OBJECT
      - ACTION CREATORS: Function which returns action object
*/