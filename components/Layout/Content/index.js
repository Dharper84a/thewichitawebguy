
import { ContentBox } from "./styles";
const Content = (props) => {

    return(
        <ContentBox>
            {props.children}
        </ContentBox>
    )
}

export default Content;