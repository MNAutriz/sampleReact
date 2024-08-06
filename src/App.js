import { useEffect, useState } from 'react';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import IndividualPost from './components/IndividualPost';
import Layout from './components/Layout';
import PostPage from './components/PostPage';
import './styles/App.css';
import {Routes, Route} from 'react-router-dom';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "The Alchemist",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "The Clean Code",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "Pragmatic Programmer",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ])
  const [newTitle, setnewTitle] = useState('');
  const [newDateTime, setnewDateTime] = useState('');
  const [newBody, setnewBody] = useState('');
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  function handleDelete(idToDelete) {
    const finalPost = posts.filter((post) => idToDelete.toString() !== post.id.toString());
    console.log(finalPost);
    setPosts(finalPost);
  }

  function handleSearching(e){
    e.preventDefault();


    const resultingSearchPost = posts.filter((post) => {
      return (post.title.toLowerCase().includes(search.toLowerCase())) ||  (post.body.toLowerCase().includes(search.toLowerCase()));
    })
    console.log(resultingSearchPost);
    setSearchResult(resultingSearchPost);
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
      <Route path='/' element={<Layout search={search} setSearch={setSearch} handleSearching={handleSearching}/>}>
        <Route index element={<HomePage posts={searchResult}/>} /> 
        <Route path='post'>
          <Route index element={<PostPage posts={posts} setPosts={setPosts} newTitle={newTitle} setnewTitle={setnewTitle} newDateTime={newDateTime} setnewDateTime={setnewDateTime} newBody={newBody} setnewBody={setnewBody}/>} />
          <Route path=':id' element={<IndividualPost posts={posts} setPosts={setPosts} handleDelete={handleDelete}/>} />
        </Route>
        <Route path='about' element={ <AboutPage />} />
      </Route>
    </Routes>
  );
} 

export default App;


