import { socialLinks } from "../data"
import PageLinks from "./PageLinks"
import SocialLink from "./SocialLink"

export default function Footer() {
    return (
        <footer className="section footer">
            <PageLinks parentClass='footer-links' itemClass='footer-link' />
            <ul className="footer-icons">
                {
                    socialLinks.map(function(link) {
                        return (
                            <SocialLink {...link} key={link.id} itemClass='footer-icon' />
                        )
                    })
                }
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{new Date().getFullYear()}. all rights reserved</span>
            </p>
        </footer>
    )
}