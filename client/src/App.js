import './App.scss';
import { FilteredUsers } from './components/users/FilteredUsers.js';
import { Header } from './components/header/Header';

function App() {
  return (
    <>
      <Header />
      <div className='app'>
        <FilteredUsers />
      </div>
    </>
  );
}

export default App;
