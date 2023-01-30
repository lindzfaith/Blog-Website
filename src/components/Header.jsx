import React from "react";
import { RxDropdownMenu } from 'react-icons/rx';
import { CgProfile } from 'react-icons/cg'

function Header() {
    return (
        <div className="header">
            <h1>Let's Write Code</h1>
            <a href="/" className = "icon"><CgProfile color="white"/></a>
            <a href="/resources"><h2>Roadmaps</h2></a>
            <a href="/stories"><h2>Stories</h2></a>
            <a href="/getstarted"><h2>Communities</h2></a>
            <a href="/"><h2>Home</h2></a>
            <div className="dropdown">
                <button> <RxDropdownMenu/> </button>
                <a href="/">Home</a>
                <a href="/resources">Communities</a>
                <a href="/stories">Stories</a>
                <a href="/resources">Roadmaps</a>
            </div>
        </div>
    );
}
export default Header;