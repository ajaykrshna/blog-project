import React from "react";
import Cards from "../components/Cards";
import CardTopHori from "../components/CardTopHori";
import CardTopVert from "../components/CardTopVert";
import CardTopFull from "../components/CardTopFull";
import PageNo from "../components/PageNo";
import '../index.css'

function Home({ darkMode }) {
    return (
        <div className="Home">
            <div className="theblog">
                <h1 className={darkMode ? "theblogtext--dark" : "theblogtext--light"}>THE BLOG</h1>
            </div>
            <div className={darkMode ? "recent--dark" : "recent--light"}>
                <h2>Recent blog posts</h2>
            </div>
            <div className="topcards">
                <div className="top">
                    <CardTopVert darkMode={darkMode}/>
                    <div className="topside">
                        <CardTopHori darkMode={darkMode}/>
                        <CardTopHori darkMode={darkMode}/>
                    </div>
                </div>
                <CardTopFull darkMode={darkMode}/>
            </div>
            <div className="recent">
                <h2>All blog posts</h2>
            </div>
            <div className="main">
                <Cards darkMode={darkMode}/>
                <Cards darkMode={darkMode}/>
                <Cards darkMode={darkMode}/>
                <Cards darkMode={darkMode}/>
                <Cards darkMode={darkMode}/>
                <Cards darkMode={darkMode}/>
            </div>
            <div className="pagedisplay">
                <PageNo darkMode={darkMode}/>
            </div>
        </div>
    );
}

export default Home;
