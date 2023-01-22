import Delivery from "../lib/contentful/delivery";
import Layout from "../components/layout";
import Sections from "../components/Sections";
import Cards from "../components/Common/Cards";

export default function Home(props) {
    
    return (
        <Layout>
            <Cards type="GlassCard" title="Hello World" />
        </Layout>
    );
}


// export const getStaticProps = async(context) => {
//     const response = await Delivery.getPage('the-wichita-web-guy', context?.preview || false);
  
//     if(response !== false) {
//         return {
//             props: { ...response },
//             revalidate: 60
//         }
//     } else {
//         return {
//             notFound: true,
//         }
//     }
    
// }
