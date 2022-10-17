import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <BrowserRouter>
    {/* <Route exact path='/' element={ <ItemListContainer />} /> */}
      <Routes>
        <Route exact path='/characters' element={<ItemListContainer />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
