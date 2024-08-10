import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import IndividualPost from './components/IndividualPost';
import Layout from './components/Layout';
import PostPage from './components/PostPage';
import './styles/App.css';
import {Routes, Route} from 'react-router-dom';
import EditPage from './components/EditPage.js';
import { DataProvider } from './context/DataContext.js';

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} /> 
          <Route path='post'>
            <Route index element={<PostPage />} />
            <Route path=':id' element={<IndividualPost/>} />
          </Route>
          <Route path='edit'>
            <Route path=':id' element={<EditPage />}/>
          </Route>
          <Route path='about' element={ <AboutPage />} />
        </Route>
      </Routes>
    </DataProvider>
  );
} 

export default App;