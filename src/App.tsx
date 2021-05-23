import 'bootstrap/dist/css/bootstrap.min.css';
import CardsContainer from './features/cards/Container';

import './App.scss';

// Entry point of the application
// including the headers and footer and content layout.
function App() {
  return (
    <div className="body" data-testid="app">
      <CardsContainer />
    </div>
  );
}

export default App;
