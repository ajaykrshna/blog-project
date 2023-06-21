import React from "react";
import Cards from "../components/Cards";
import CardTopHori from "../components/CardTopHori";
import CardTopVert from "../components/CardTopVert";
import CardTopFull from "../components/CardTopFull";
import PageNo from "../components/PageNo";
import '../index.css'

function Home() {
    return (
        <div className="Home">
            <div className="theblog">
                <h1 className="theblogtext">THE BLOG</h1>
            </div>
            <div className="recent">
                <h2>Recent blog posts</h2>
            </div>
            <div className="topcards">
                <div className="top">
                    <CardTopVert />
                    <div className="topside">
                        <CardTopHori />
                        <CardTopHori />
                    </div>
                </div>
                <CardTopFull />
            </div>
            <div className="recent">
                <h2>All blog posts</h2>
            </div>
            <div className="main">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
            <div className="pagedisplay">
                <PageNo />
            </div>
        </div>
    );
}

export default Home;
