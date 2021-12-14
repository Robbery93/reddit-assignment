import React, {useEffect, useState} from 'react';
import axios from "axios";

const Subreddit = () => {

    const [subreddit, setSubreddit] = useState({});

    useEffect(() => {
        async function fetchSubreddit() {
            try {
            const result = await axios.get('https://www.reddit.com/r/tumblr/about.json');
                console.log(result.data.data)
                setSubreddit(result.data.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchSubreddit();
    },[])

    return (
        <div>
            <h2>{subreddit.display_name_prefixed}</h2>
            <p>Subreddit </p>
        </div>
    );
};

export default Subreddit;