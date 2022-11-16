import React from "react";
import Tags from "./tags"
const Sidebar = () => {

    
    return (
        <aside className="sidebar">
            <div class="logo">
				<a href="/"><img
                style={{width: 250}}
                src="/static/evilsaint_shield_logo.png" alt="Logo" title="Logo" /></a>
			</div>
            <nav id="side-menu">
                <ul>
                    <li><a href="/" className="home-link">Home</a></li>
                    <li><a href="/about" className="about-link">About us</a></li>
                    <li><a href="/blog" className="blog-link">Blog</a></li>
                    <li><a href="/articles" className="portfolio-link">Articles</a></li>
                    <li><a href="/tutorials" className="portfolio-link">Tutorials</a></li>
                    <li><a href="/ctfs" className="portfolio-link">CTFs</a></li>
                    <li><a href="/download" className="portfolio-link">Download</a></li>
                    <li><a href="/books" className="blog-link">Books</a></li>
                    <li><a href="/contact" className="contact-link">Contact Me</a></li>
                    <li><a href="/courses" className="blog-link">Courses</a></li>
                    <li><a href="/portfolio" className="portfolio-link">Portfolio</a></li>
                </ul>
            </nav>
            <Tags />
        </aside>
    );
};

export default Sidebar;
