import React, {useState,useEffect} from 'react'
import axios from 'axios'

function HookCounterSix() {
    const [posts, setPost] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setPost(response.data)
            })
    },[])
    return (
        <div>
            <ul>
                {
                    posts.map(post => (
                      <li key={post.id}>{post.title}</li>
                    ))}
            </ul>
        </div>
    )
}

export default HookCounterSix
