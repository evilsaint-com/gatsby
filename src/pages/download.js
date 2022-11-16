import React from "react";
import Layout from "../components/layout"

const Download = () => {
    let wp = [1,2,3,4,5,6,7,8]
    let ch = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    return (
        <Layout>
            <header>
                <h1>
                Wallpapers
                </h1>
            </header>
            <div style={{display: "flex", flexFlow: "column wrap", justifyContent: "space-between", marginRight: 10}}>
                    {
                        wp.map(
                            num => 
                            <div > 
                                <img style={{maxWidth: 750, marginBottom: 10}}
                                src={`/static/wp${num}.jpg`} />
                                <a href={`/static/wp${num}.jpg`} download target="_blank">
                                    <img style={{width: 50}} 
                                    src="/static/download_icon.png"/>    
                                </a>
                            </div>
                        )
                    }
            </div>
            <header>
                <h1>
                CheatSheets
                </h1>
            </header>
            <div style={{display: "flex", flexFlow: "column wrap", justifyContent: "space-between", marginRight: 10}}>
                    {
                        ch.map(
                            num => 
                            <div > 
                                <img style={{maxWidth: 750, marginBottom: 10}}
                                src={`/static/ch${num}.jpg`} />
                                <a href={`/static/ch${num}.jpg`} download target="_blank">
                                    <img style={{width: 50}} 
                                    src="/static/download_icon.png"/>    
                                </a>
                            </div>
                        )
                    }
            </div>
        </Layout>
    )
}

export default Download