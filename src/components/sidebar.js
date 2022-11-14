import React from "react";
import Tags from "./tags"
import { useStaticQuery, graphql, StaticQuery } from "gatsby";
import createTagsSet from "../utils/create-tags-set";
const Sidebar = ({ siteTitle, siteDescription }) => {

    
    return (
        <aside className="sidebar">
            <div class="logo">
				<a href="/"><img src="../static/images/logo.png" alt="Logo" title="Logo" /></a>
			</div>
            <nav id="side-menu">
                <ul>
                    <li><a href="/" className="home-link">Home</a></li>
                    <li><a href="/about" className="about-link">About us</a></li>
                    <li><a href="/blog" className="blog-link">Blog</a></li>
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
