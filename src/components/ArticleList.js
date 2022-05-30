import React from 'react'
import Article from './Article'

function ArticleList({ posts }) {
    return (
        <div>
            <main>
                {posts.map(postData => <Article key={postData.id} title={postData.title} date={postData.date} preview={postData.preview} minutes={postData.minutes}/>)}
            </main>
        </div>
    )
}

export default ArticleList