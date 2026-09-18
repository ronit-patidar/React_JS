import { useState,useEffect } from 'react'
import {getPosts} from './api/index';
import PostCard from './Components/postCard';
function App() {
  const [data,setData] = useState(null);
  useEffect(()=>{
    getPosts().then((posts)=>setData(posts));
  },[]);
  return (
    <div>
      {
        data ? data.map((e) => <PostCard title={e.title} body={e.body} />) : <p>No Data</p>
      }
    </div>
  )
}

export default App;
