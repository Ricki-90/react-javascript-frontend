import './style.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="contacts" element={<ContactsView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
