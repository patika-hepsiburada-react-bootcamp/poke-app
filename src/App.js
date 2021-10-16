import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Pokemons from './pages/Home';
import Detail from './pages/Detail';

const App = function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Pokemons} />
            <Route path="/:pokemon_id" component={Detail} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
