import Link from "next/link";
import { SiteHeader, SiteTitle } from "./styles";

const Header = (props) => {

    return(
        <SiteHeader>
            <SiteTitle>
                <Link href="/" passHref>
                    <a title="View The Wichita Web Guy's homepage">
                        The Wichita Web Guy
                    </a>
                </Link>
            </SiteTitle>
        </SiteHeader>
    )
}

export default Header;