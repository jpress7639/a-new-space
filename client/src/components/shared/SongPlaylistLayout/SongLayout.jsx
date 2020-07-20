import React from "react"
import Layout from "../Layout/Layout"

class SongLayout {
    render() {
        return(
            <>
            <Layout>
            <div className="playlist-menu">
            <img src="" alt="playlist-cover"></img>
            </div>
            <div className="song">
                <p>Back</p>
                <h2>Song Title - Artist</h2>
                <p>Next</p>
            </div>
            </Layout>
            </>
        )
    }
}

export default SongLayout