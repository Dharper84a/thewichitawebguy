import Header from "./Header";
import Footer from './Footer';

import { Wrapper } from "./styles";
const Layout = (props) => {

    return (
        
        <Wrapper>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </Wrapper>

    )
}

export default Layout;