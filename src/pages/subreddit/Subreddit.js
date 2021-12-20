import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";
import noIconFound from '../../assets/no-icon.jpg'
import back from '../../assets/back.svg'
import './Subreddit.css'

const Subreddit = () => {

    const { subredditName } = useParams()
    const history = useHistory();

    //-----States
    const [subreddit, setSubreddit] = useState({});
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);

    //-----Life cycles
    useEffect(() => {
        toggleLoading(true);

        async function fetchSubreddit() {
            try {
            const result = await axios.get(`https://www.reddit.com/r/${subredditName}/about.json`);
                setSubreddit(result.data.data)
            } catch (e) {
                console.error(e);
                setError(true)
            }
            toggleLoading(false);
        }

        fetchSubreddit();
    },[])

    return (
        <div className='subreddit-page'>
            {subreddit !== null &&
            <>
                <h2>{subreddit.display_name_prefixed}</h2>
                <p>Subreddit specifications</p>

                {subreddit.icon_img ?
                    <img src={subreddit.icon_img} alt="Icon image"/>
                    :
                    <div className='noIcon'>
                        <img src={noIconFound} height='100' alt="Icon image"/>
                        <footer>no icon found!</footer>
                    </div>

                }


                <h3>Title</h3>
                <p>{subreddit.title}</p>

                <h3>Description</h3>
                <p>{subreddit.public_description}</p>

                <h3>Number of subscribers</h3>
                {subreddit.subscribers &&
                <p>{subreddit.subscribers.toLocaleString()}</p>}


                <div>
                    <button
                        type="button"
                        onClick={() => history.push('/')}
                    >
                        <img id="svg" src={back} alt='back.svg missing'/>Back to overview
                    </button>
                </div>
            </>
            }
            {loading &&
                <p>Page is loading...</p>
            }
            {error &&
            <p id="error-msg">Something went wrong while loading this page!</p>
            }
        </div>
    );
};

export default Subreddit;