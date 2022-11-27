import Delivery from "../lib/contentful/delivery";
import Layout from "../components/layout";
import Sections from "../components/Sections";

export default function Home({fields, sys}) {
    console.log('Fields', fields)
    return (
        <Layout>
            <Sections sections={fields.sections} />
        </Layout>
    );
}


export const getStaticProps = async(context) => {
    const response = await Delivery.getPage('the-wichita-web-guy', context?.preview || false);
  
    if(response !== false) {
        return {
            props: { ...response },
            revalidate: 60
        }
    } else {
        return {
            notFound: true,
        }
    }
    
}
