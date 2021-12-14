import React, {useEffect, useState} from 'react';
import './Overview.css'
import axios from 'axios';

const Overview = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchPosts(){
            try {
                const result = await axios.get('https://www.reddit.com/hot.json?limit=15');
                console.log(result.data.data.children);
                setPosts(result.data.data.children);
            } catch (e) {
                console.error(e);
            }
        }

        fetchPosts();
    } ,[])

    return (
        <div>
            <h2>Hottest 15 posts on Reddit</h2>
            {posts.map((post) => {
                return (
                    <div className="post">
                        <p>
                            {post.data.title}
                        </p>
                        <span>
                            <a href={post.data.url}>
                                {post.data.subreddit_name_prefixed} |
                            </a>
                        </span>
                        <span>{post.data.num_comments.toLocaleString()} comments </span>
                        <span>{post.data.ups.toLocaleString()} ups</span>
                    </div>
                )
            })}
        </div>
    );
}

export default Overview;