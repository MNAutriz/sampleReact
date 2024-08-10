import { createContext, useEffect, useState } from "react";
import UseFetchAxios from "../hooks/useFetchAxios";

const DataContext = createContext({});

export const DataProvider = ({children}) => {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const {data, loading, error} = UseFetchAxios('http://localhost:1000/posts');

  useEffect(() => {
    setPosts(data);
  }, [data]);

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


    return(
        <DataContext.Provider value={{
            search, setSearch, searchResult, error, loading, posts, setPosts
        }}>
            {children}
        </DataContext.Provider>
    )
    }

export default DataContext;