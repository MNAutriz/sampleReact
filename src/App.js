import { useEffect, useState } from 'react';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import IndividualPost from './components/IndividualPost';
import Layout from './components/Layout';
import PostPage from './components/PostPage';
import './styles/App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import api from './api/posts.js';
import EditPage from './components/EditPage.js';
import useAxiosFetch from './hooks/useAxiosFetch.js';
import useWindowSizing from './hooks/useWindowSizing.js';
import UseFetchAxios from './hooks/useFetchAxios.js';

function App() {
  const [posts, setPosts] = useState([])
  const [newTitle, setnewTitle] = useState('');
  const [newDateTime, setnewDateTime] = useState('');
  const [newBody, setnewBody] = useState('');
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [editBody, seteditBody] = useState('');
  const [editTitle, seteditTitle] = useState('');
  const [editDate, seteditDate] = useState('');
  const navigate = useNavigate();
  const { width } = useWindowSizing();

  const {data, loading, error} = UseFetchAxios('http://localhost:1000/posts');


  useEffect(() => {
    setPosts(data);
  }, [data]);



  async function handleDelete(idToDelete) {
    try{
      await api.delete(`posts/${idToDelete}`);
      const finalPost = posts.filter((post) => idToDelete.toString() !== post.id.toString());
      setPosts(finalPost);
      navigate('/');
    } catch (err){
      console.log('Error: ', err.data);
    }
  }

  function handleSearching(e){
    e.preventDefault();
    const resultingSearchPost = posts.filter((post) => {
      return (post.title.toLowerCase().includes(search.toLowerCase())) ||  (post.body.toLowerCase().includes(search.toLowerCase()));
    })
    console.log(resultingSearchPost);
    setSearchResult(resultingSearchPost);
  } 

  async function handleAddPost(e){
    e.preventDefault();
    const newId = String(posts.length + 1);
    const createdPost = { id: newId, title: newTitle, datetime: newDateTime, body: newBody };
    try{
      const response = await api.post('/posts', createdPost);
      setPosts([...posts, response.data]);
      console.log(response);
      setnewTitle('');
      setnewDateTime('');
      setnewBody('');
    } catch(err){
      console.log('Error: ', err.message);
    }
  } 

  async function handleEdit(idToBeEdited){
    let foundPost = posts.find((post) => idToBeEdited.toString() === post.id.toString());

    if(foundPost){
      foundPost.title = editTitle;
      foundPost.datetime = editDate;
      foundPost.body = editBody;
    }
    
    try{
      const response = await api.put(`/posts/${idToBeEdited}`, foundPost);
      console.log(response);
      setPosts(posts);
      seteditBody('');
      seteditDate('');
      seteditTitle('');
      navigate('/');
    } catch(err){
      console.log('Error: ', err);
    }
  }

  useEffect(() => {
    if (search === '') {
      setSearchResult(posts);
    } else {
      const resultingSearchPost = posts.filter((post) => {
        return (post.title.toLowerCase().includes(search.toLowerCase())) ||  
               (post.body.toLowerCase().includes(search.toLowerCase()));
      });
      setSearchResult(resultingSearchPost);
    }
  }, [search, posts]);

  return (
    <Routes>
      <Route path='/' element={<Layout search={search} setSearch={setSearch} handleSearching={handleSearching} width={width}/>}>
        <Route index element={<HomePage posts={searchResult} data={data} error={error} loading={loading}/>} /> 
        <Route path='post'>
          <Route index element={<PostPage posts={posts} setPosts={setPosts} newTitle={newTitle} setnewTitle={setnewTitle} newDateTime={newDateTime} setnewDateTime={setnewDateTime} newBody={newBody} setnewBody={setnewBody} handleAddPost={handleAddPost}/>} />
          <Route path=':id' element={<IndividualPost posts={posts} setPosts={setPosts} handleDelete={handleDelete} editBody={editBody} seteditBody={seteditBody} editDate={editDate} seteditDate={seteditDate} editTitle={seteditTitle} seteditTitle={seteditTitle}/>} />
        </Route>
        <Route path='edit'>
          <Route path=':id' element={<EditPage editBody={editBody} seteditBody={seteditBody} editDate={editDate} seteditDate={seteditDate} editTitle={editTitle} seteditTitle={seteditTitle} handleEdit={handleEdit}/>}/>
        </Route>
        <Route path='about' element={ <AboutPage />} />
      </Route>
    </Routes>
  );
} 

export default App;


