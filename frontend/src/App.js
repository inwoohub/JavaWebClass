// /* eslint-disable */
// --------------------------------------------

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Main from './pages/Main';


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
function AppContent() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        
      </Routes>
    </>
  );
}

export default App;

