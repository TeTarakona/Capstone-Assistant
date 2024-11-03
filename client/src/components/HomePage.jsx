import React from "react";
import "./HomePage.css";

const HomePage = () => {
    return(
        <>
        <div className="pageContainer">
        <h1 className="heading" >Prio</h1>
        <p>The personal assistant app</p>
        <article>
            <h2>Welcome to Prio</h2>
            <p>Prio is a personal assistant application that aims to combine useful time management tools into a single cloud based platform that can be accessed from any browser.</p>
            <p>Prio is in active development, meaning some features could be changed or updated as time goes on.</p>
            <p>The current goals are a task list, calendar, and notepad all in one place.</p>
        </article>
        </div>
        </>
    )
}

export default HomePage;