import React from "react";
import Newsletter from '../components/Newsletter'
import '../styles/blog.css'

function Blog({ darkMode }) {
    return (
        <div className="blog">
            <div className="blog--date">
                <p>Sunday , 1 Jan 2023</p>
            </div>
            <div className="blog--head">
                <h2 className={darkMode ? "blog--head--text--dark" : "blog--head--text--light"}>Bill Walsh leadership lessons</h2>
            </div>
            <div className="blog--main--img">
                <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" className="blog--main--img--img" alt="thumbnail" />
            </div>
            <div className={darkMode ? "desc--dark" : "desc--light"}>
                A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create
                a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent
                look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.
            </div>
            <div className="blog--tags">
                <div className="blog--tag--leadership">Leadership</div>
                <div className="blog--tag--management">Management</div>
                <div className="blog--tag--presentation">Presentation</div>
            </div>
            <Newsletter darkMode={darkMode} />
        </div>
    )
}

export default Blog;