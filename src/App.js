import './App.css';
import fetch_user from './store/actions/userAction';
import { connect, useSelector, useDispatch} from 'react-redux';
import HookCounterSix from './components/HookCounterSix';

function App(props) {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Redux Tutorial</h1>
      Users: <button onClick={()=>dispatch(fetch_user)}>Fetch Users</button>
      {
        users.length === 0 ? <p>No user found!</p> :
        users.map(user => <p key={user.id}>{user.first_name}</p>) 
      }
      <HookCounterSix/>
    </div>
  );
}
export default App;
