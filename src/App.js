import './App.css';
import update_person from './store/actions/personAction';
import update_game from './store/actions/gameAction';
import fetch_user from './store/actions/userAction';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <h1>Redux Tutorial</h1>
      Person Name: {props.person.name}
      <button onClick={props.updatePerson}>Update Person</button>
      <br/>
      Game Name: {props.game.name}
      <button onClick={props.updateGame}>Update Game</button>
      <br/>
      Users: <button onClick={props.fetchUsers}>Fetch Users</button>
      {
        props.users.length === 0 ? <p>No user found!</p> :
        props.users.map(user => <p key={user.id}>{user.first_name}</p>) 
      }
    </div>
  );
}
const mapStateToProps = state => {
    return {
      game: state.game,
      person: state.person,
      users: state.users
    };
}

const mapDispatchToProps = dispatch => {
  return {
    updateGame: () => {dispatch(update_game)},
    updatePerson: () => {dispatch(update_person)},
    fetchUsers: () => {dispatch(fetch_user)} 
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
