import React from 'react'

function About ({ about, image="https://via.placeholder.com/215" }) {
    return(
        <div>
            <aside>
                <img src={image} alt="blog logo"/>
            </aside>
            <p>{about}</p>
        </div>
    )
}

export default About