import './App.css';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import Show from './components/Show';
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
        <Show />
      </div>
    </Provider>
  );
}

export default App;


/*
  # REDUX: A central state

    # 1. DEVELOP REACT APP
    
    # 2. SETUP REDUX: REDUCER FUNCTION, createStore
      - Arguments:
        - state = initial state
        - action
      - STATE
      - LOGIC FOR STATE UPDATE
  
    # 3. REACT REDUX CONFIGURATION (Provider)
      - Provider Component with store prop

    # 4. SUBSCRIBE COMPONENTS TO REDUX (useSelector)

    # 5. DISPATCH ACTIONS (useDispatch)
      - ACTION OBJECT
      - ACTION CREATORS: Function which returns action object
*/