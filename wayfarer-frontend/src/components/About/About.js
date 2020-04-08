import React from 'react';
import './About.css'

class About extends React.Component {
    render() {
        return (
            <div className="about-container rounded-lg">
                <h1 className="display-4 text-center text-white">about</h1>
                <div className="row">
                    <div className="col-4 card card-bordered">
                        <div className="card-body">
                            <p>Have you ever yearned for a place to share your thoughts about the skylines of cities that you've travelled to? What about sharing your thoughts on the skylines you've never seen? </p>
                        </div>
                    </div>
                    <div className="col-4 card card-bordered">
                        <div className="card-body">
                            <p>Welcome to Wayfarer. The place to blab about the gorgeous skylines built by our wonderful species.</p>
                        </div>
                    </div>
                    <div className="col-4 card card-bordered">
                        <div className="card-body">
                            <p>Sign up to share posts, ideas, thoughts, words, text, and other forms of language related to cities and their skylines.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;