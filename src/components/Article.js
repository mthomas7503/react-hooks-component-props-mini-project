import React from 'react'


function Article({ minutes, preview, title, date="January 1, 1970" }){
    if(minutes <= 30) {return (
        <div>
            <article>
                <h3>{title}</h3>
                <small>{date} • ☕️ {minutes}</small>
                <p>{preview}</p>
            </article>
        </div>
    )}

    else if (minutes >= 30) {
        return (
            <div>
                <article>
                    <h3>{title}</h3>
                    <small>{date} • 🍱 {minutes}</small>
                    <p>{preview}</p>
                </article>
            </div>
        )}
    }
    


export default Article