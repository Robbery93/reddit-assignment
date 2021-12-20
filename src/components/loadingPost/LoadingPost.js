import React from 'react';
import './LoadingPost.css';

function LoadingPost({ key }) {
    return (
        <div className='load-tile' key={key}>
            <div className='loading load-title'></div>
            <div className='load-specs'>
                <span className='loading load-info'></span>
                <span>|</span>
                <span className='loading load-info'></span>
                <span className='loading load-info'></span>
            </div>
        </div>
    );
}

export default LoadingPost;