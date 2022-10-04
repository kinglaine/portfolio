import "./MyInfo.css";
import phone from "../Icons/phone.svg"
import mail from "../Icons/mail.svg"
import pin from "../Icons/pin.svg"
function MyInfo(){
    return(
        <div id="MyInfoCOntainer">
            <div className="mail">
            <img className="contactPic" src={mail} alt = "mail icon"></img>
                <p  id="span1"><b>EMAIL ME AT</b></p>
                <p id="p1"><a id="p1" href = "mailto: woodleydev@gmail.com">woodleydev@gmail.com</a></p>
            </div>
            <div className="address">
            <img className="contactPic" src={pin} alt = "pin icon"></img>
                <p id="span1"><b>WHERE TO FIND ME</b></p>
                <p id="p1">New York</p>
            </div>
            <div className="telephone">
            <img className="contactPic" src={phone} alt = "telephone icon"></img>
                <p  id="span1"><b>CALL ME AT</b></p>
                <p id="p1">(+1) 929 900 6168</p>
            </div>
        </div>
    );
}

export default MyInfo;