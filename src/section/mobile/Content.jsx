import React from 'react'; 
import './Content.css';
import Logo from "../../../public/mobile.jpg"
const Content = () => {
    return (
        <div className="container">
            <h2 className="section-title">WHY CHOOSE US?</h2>
            <p className="description">
                Our expert team delivers high-quality, user-centric mobile applications across platforms, utilizing cutting-edge technologies tailored to your unique business needs, with ongoing support for lasting success.
            </p>
            <div className="content">
                <div className="left-content">
                    <div className="feature">
                        <h3>EXPERTISE ACROSS PLATFORMS</h3>
                        <p>Whether iOS, Android, or cross-platform, our team has expertise in delivering high-quality mobile applications for a range of industries.</p>
                    </div>
                    <div className="feature">
                        <h3>CUSTOMIZED SOLUTIONS</h3>
                        <p>We tailor each project to meet your unique requirements, ensuring that the app is both scalable and adaptable as your business grows.</p>
                    </div>
                    <div className="feature">
                        <h3>USER-CENTRIC DESIGN</h3>
                        <p>Our design process emphasizes user experience, ensuring your app is not only functional but also enjoyable for users to interact with.</p>
                    </div>
                    <div className="feature">
                        <h3>CUTTING-EDGE TECHNOLOGIES</h3>
                        <p>We stay updated with the latest trends and tools, enabling us to offer state-of-the-art solutions like AI, AR/VR, and Blockchain integration.</p>
                    </div>
                    <div className="feature">
                        <h3>ONGOING SUPPORT</h3>
                        <p>We’re here for the long haul, providing continuous maintenance, updates, and support even after your app has launched.</p>
                    </div>
                </div>
                <div className="right-content">
                    <img src={Logo} alt="mobile" className="responsive-img" />
                </div>
            </div>

            {/* What We Offer Section */}
            <div className="offerings-container">
                <h2 className="section-title">WHAT WE OFFER</h2>
                <div className="offering-box">
                    <h3>CONCEPT & PLANNING</h3>
                    <p>Every successful app begins with a clear idea. We collaborate closely with you to define your app’s core purpose, target audience, and key features.</p>
                </div>
                <div className="offering-box">
                    <h3>UI/UX Design</h3>
                    <p>Our focus is on creating a visually appealing and user-friendly app experience, ensuring seamless navigation and alignment with your brand’s identity.</p>
                </div>
                <div className="offering-box">
                    <h3>Development</h3>
                    <p>Using the latest technologies, we build your app to suit your needs, whether it's native, cross-platform, or hybrid development.</p>
                </div>
                <div className="offering-box">
                    <h3>Testing</h3>
                    <p>We run extensive tests to ensure functionality, performance, and usability before the app launch.</p>
                </div>
                <div className="offering-box">
                    <h3>Deployment</h3>
                    <p>Once testing is complete, we submit the app to app stores and conduct final checks for a smooth launch.</p>
                </div>
                <div className="offering-box">
                    <h3>Maintenance & Updates</h3>
                    <p>Post-launch, we provide ongoing support, implementing updates and fixes to keep your app running efficiently.</p>
                </div>
            </div>
        </div>
    );
};

export default Content;
