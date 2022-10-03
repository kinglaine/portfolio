import ContactForm from "./ContactForm";
import "./Footer.css"
import MyInfo from "./MyInfo";

function Footer(){
    return(
        <div id="section4">
            <div id="paragraphs2">
                <h4>CONTACT</h4>
                <h1>I'd Love To Hear From You.</h1>
                <h5>Fill Out This Form To Contact Me For Business Inquiries.</h5>
                <h5>Thank You!</h5>
            </div>
            <ContactForm></ContactForm>
            <MyInfo></MyInfo> 
            <div id="ending">
                <div id="copyright">
                    <p>&copy; Copyright Woodley Gelin 2022. All rights reserved.</p>
                    <p>This webpage is still under construction.....</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;