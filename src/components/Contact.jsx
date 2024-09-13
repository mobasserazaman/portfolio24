import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import WrapperComponent from "./WrapperComponent"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons"
export default function Contact() {
    return <WrapperComponent title='Contact'>
        <p className="text-xl mb-1">
            307 Tabaret St
        </p>
        <p className="mb-4">Kanata, ON K2M 0B8</p>
        <p>
            <FontAwesomeIcon icon={faEnvelope} /> mobassera.jemi@gmail.com
        </p>
        <p>
            <FontAwesomeIcon icon={faLinkedin} /> <a className="hover:text-pink-500" href="https://www.linkedin.com/in/mobassera-zaman-3b1a2a171/" target="_blank">https://www.linkedin.com/in/mobassera-zaman-3b1a2a171/</a>
        </p>
        <p>
            <FontAwesomeIcon icon={faFacebook} /> <a className="hover:text-pink-500" href='https://www.facebook.com/profile.php?id=100005563665868' target="_blank">https://www.facebook.com/profile.php?id=100005563665868</a>
        </p>

    </WrapperComponent>
}