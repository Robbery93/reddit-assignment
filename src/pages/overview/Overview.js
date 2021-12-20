import React, {useEffect, useState} from 'react';
import './Overview.css'
import axios from 'axios';
import {NavLink} from "react-router-dom";
import LoadingPost from "../../components/loadingPost/LoadingPost";

const Overview = () => {

    const n = 15;

    //-----States
    const [posts, setPosts] = useState([])
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);

    //-----Life Cycles
    useEffect(() => {

        async function fetchPosts(){
            toggleLoading(true)
            try {
                const result = await axios.get('https://www.reddit.com/hot.json?limit=15');
                console.log(result.data.data.children);
                setPosts(result.data.data.children);
            } catch (e) {
                console.error(e);
                setError(true)
            }

            toggleLoading(false);
        }
        fetchPosts();
    } ,[])

    return (
        <div className='page'>
            <p className='header'>🔥🔥🔥 Hottest 15 posts on Reddit 🔥🔥🔥</p>
            {posts.map((post) => {
                return (
                    <div className="post" key={post.data.id}>
                        <p className='post-title'>
                            <a href={`https://www.reddit.com${post.data.permalink}`} target="_blank">
                            {post.data.title}
                            </a>
                        </p>
                        <span><NavLink className='link' to={`/subreddit/${post.data.subreddit}`}>{post.data.subreddit_name_prefixed}</NavLink> | </span>
                        <span>{post.data.num_comments.toLocaleString()} comments </span>
                        <span>{post.data.ups.toLocaleString()} ups</span>
                    </div>
                )
            })}

            {loading && [...Array(n)].map((e, i) => <LoadingPost key={i}/>)}
            {error && <p>Something went wrong while fetching the data...</p>}
        </div>
    );
}

export default Overview;