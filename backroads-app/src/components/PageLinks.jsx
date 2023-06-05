import { pageLinks } from "../data"
import PageLink from "./PageLink"

export default function PageLinks({parentClass, itemClass}) {
    return (
        <ul className={parentClass} id="nav-links">
            {
                pageLinks.map(function(link) {
                    return (
                        <PageLink key={link.id} link={link} itemClass={itemClass} />
                    )
                })
            }
        </ul>
    )
}