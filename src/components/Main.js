import React from 'react'
import './main.css'

function Main() {
    return (
        <>
            <div className="profil-container">
                <div className="profile-pic">
                    <img src="/Profile.svg" alt="" />
                </div>
                <div className="profile-text">
                    <h1>
                        Hello there.
                    </h1>
                    <p>I am khaled saoud a full stack js developer...</p>

                    <h6>Here are some of my skills</h6>
                    <div className="skils">
                        <span className="html">HTML5</span>
                        <span className="css">CSS3</span>
                        <span className="js">JavaScript</span>
                        <span className="btsrp">Bootstrap</span>
                        <span className="react">React</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
