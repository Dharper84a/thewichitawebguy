import Layout from "../components/layout";
import Content from "../components/Layout/Content";
// import Service from "../components/Service";

const TermsAndConditionsPage = (props) => {
    return (
        <Layout>
            <Content>
                <section>
                    <h1>Terms and Conditions</h1>
                    <p>
                        <small><strong>Updated: Feb. 4th, 2023</strong></small>
                    </p>
                    <h2>Right of Service</h2>
                    <p>
                        The Wichita Web Guy (Donald Harper) reserves the right to refuse service for any reason at any time during service.
                    </p>
                    <h2>Refunds</h2>
                    <p>
                        Refunds will be given based on the current progress of service and what remains. The consultation fee is non-refundable. Every attempt will be made in fairness. However, final determination of the refund amount is made by Donald Harper.
                    </p>
                </section>
            </Content>
        </Layout>
    )
}

export default TermsAndConditionsPage