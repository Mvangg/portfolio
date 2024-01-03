import React from 'react';
import Layout from './Layout';  
import Footer from './Footer';

const AboutMe = () => {
  return (
    <Layout>
        <div className="about-me-container">
            <h1 className="about-word">ABOUT ME</h1>
            <div className="about-me-box">
                <img src = "https://media1.giphy.com/media/VzxNbtuXFakd7khbrs/giphy.gif?cid=6c09b952o15vhigpe5qj3wo61spqf31mqh9qh7lq6ypj04b8&ep=v1_stickers_related&rid=giphy.gif&ct=s" alt = "this is Quby with a tutu. This GIF will not be utilized when the site is published."
                className="profile-picture"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lectus purus, sagittis et accumsan pretium, interdum vitae urna. Pellentesque aliquet ante nec massa rutrum malesuada. Quisque volutpat ex interdum magna consectetur, at vulputate ante auctor. Maecenas et maximus erat. Praesent quis libero diam. Fusce malesuada hendrerit ex vitae condimentum. Aliquam tristique neque cursus magna tincidunt, eu ullamcorper lorem convallis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lectus purus, sagittis et accumsan pretium, interdum vitae urna. Pellentesque aliquet ante nec massa rutrum malesuada. Quisque volutpat ex interdum magna consectetur, at vulputate ante auctor. Maecenas et maximus erat. Praesent quis libero diam. Fusce malesuada hendrerit ex vitae condimentum. Aliquam tristique neque cursus magna tincidunt, eu ullamcorper lorem convallis.</p>
                </div>
            </div>
        <Footer />
    </Layout>
  )
}

export default AboutMe;
