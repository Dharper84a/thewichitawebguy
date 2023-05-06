import Header from "./Header";
import Footer from './Footer';

import { Wrapper } from "./styles";
import BackgroundEffect from "../BackgroundEffect";
const Layout = (props) => {

    return (
        <Wrapper>
            {props?.showBackgroundEffect && <BackgroundEffect />}
            <main>
                {props.children}
            </main>
        </Wrapper>

    )
}

export default Layout;