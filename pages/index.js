import Layout from "../components/layout";
import Cards from "../components/Common/Cards";

export default function Home(props) {
    
    return (
        <Layout showBackgroundEffect={true}>
            <Cards type="GlassCard" title="Hello World" />
        </Layout>
    );
}