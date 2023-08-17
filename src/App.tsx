import './App.css';
import List from './List';
import { items } from './createItems';

const App = () => {
  return (
    <div>
      <List items={items}/>
    </div>
  );
}

export default App;
