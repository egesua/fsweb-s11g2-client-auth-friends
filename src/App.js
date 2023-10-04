import { Route, Switch } from 'react-router-dom';
import './App.css';
import  Login   from './pages/Login';
import FriendList from './pages/FriendList';
import AuthContextProvider from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import FriendDetails from './pages/FriendDetails';
import AddFriend from './pages/AddFriend';

function App() {
  return (
    <AuthContextProvider>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute exact path="/friends">
          <FriendList />
        </PrivateRoute>
        <PrivateRoute exact path="/friends/add">
          <AddFriend />
        </PrivateRoute>
        <PrivateRoute path="/friends/:id">
          <FriendDetails />
        </PrivateRoute>
        
      </Switch>
    </div>
    </AuthContextProvider>
  );
}

export default App;
