import React from 'react'
import './About.css';
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <>
    <Fade left>

    
    <div className="about" id="about">
        <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                <img
                 src="https://lh3.googleusercontent.com/pw/AIL4fc_Di_V_gaYTdVs8XUwBQZZyAz7vcesYmlhh_eD4K4f7JNwY6_ES11j6D-cEnQqB7_LHEWnxuGCjXhldYE70NhFnK4NxtUZxhRjJNcoZ6rFoJHkBtuvuT5KI9RmLmplqYCKXUV9JlKZp2ZWsetIJPID-KBiwcQpdBURmSRV1Ct9-c_aHMhSCVQY25QQNHhVAXdLqYvgkZZY7vkry2Dgvl5P8t0q4PU0ZZPstCsy8AKehZZHEa38xaK5V662FJiNwkyV0LfugfaKpXY29iaGtVieHQk5XunX8lJNG_F20kiPL0WJhdtRldMCvQ6YBYX66j90JPlJQfUrHuaXaGLk0zVk-7hD0KUuZsXcqr4-GZ99NF-o9wyfhttkhfu0Ni2OWqvk_OCeVp3LI7oNRr9CHHdG3cnhPk9D72uHzqL2gLNT0EEDZmpRmiqyC_9uxsFSEZeLtl70O-4lx_WxyPjud8zALOoxd9gQAiwbEzexVbOx3AhNZgHZLW8hUTlbfAphSI-egfCrDLz_gZRtPimVK8TfWOhzGZ19lnjadOegHAMb-2nenT9XBK0VDsbwP3blWPSm40-FmRZMGX8hWb0B0AQzcfRjR0cwNyjWBZgNQFX9-8jvPsc43Olkxi8Us7xcLqGmgKArmR9xbc0vuVVJjdr5aWFbGMkIogrhtutLojnrJo34BCAvIMxiF0gbOavqK5so5phi0BbhCeJSj8EAkAF50tiT_tOgyADR8GO-riFfLwY12jmgU-I_AG3jfEIwWwcBSN2otdTvukf6dhN7FbPZ3zYECj6Se1zLRftFepe-qErsLNFfP0JUbW7DT1W4Zw4Lh369x-5NuUUt67V2tohk9uqRSS9ueN9iQaThGUUNGGHEdZbloloDDPrSkkDoTL9XKqaURl-h44QWlPcGOKBjAuTFY6xPnYpHnoEQi-wzaDrd3VEZGp5Mw1phyTw=w309-h611-s-no?authuser=0" 
                 alt="profile_pic"   />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                <h1>About Me</h1>
                <p>
                    <b>Name:</b> Harish Patil
                    <br/>
                    <b>Age</b> : 25 years old
                    <br />
                    <b>Email</b>: hp777489@gmail.com
                    <br />
                    <b>Phone Number</b>:+91 - 8296834740
                    
                </p>
        </div>
    </div>
    </div>
    </Fade>
    </>
  );
};

export default About;