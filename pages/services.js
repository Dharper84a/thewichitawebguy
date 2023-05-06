import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/layout";
import Content from "../components/Layout/Content";
import Service from "../components/Service";

const ServicesPage = (props) => {
    return (
        <Layout>
            <Content>
                <section>
                    <h1>Services</h1>
                    <p>
                        I offer three core services. Consultation, website
                        development and web application development.
                    </p>
                    <p>
                        <strong>Your business must meet these requirements for my services.</strong>
                    </p>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faSquareCheck} /> Do not already have a website from a web agency.
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faSquareCheck} /> Unable to incure the expense of hiring a professional web agency.
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faSquareCheck} /> Be located in or around the Wichita Kansas area.
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faSquareCheck} /> <Link href="/terms-and-conditions">Agree to my terms and conditions.</Link>
                        </li>
                    </ul>
                </section>
                <Service type="consultation" />
                <Service type="singlePageWebsite" />
                <Service type="multiPageWebsite" />
                <Service type="SmallApplication" />
                <Service type="mediumApplication" />
            </Content>
        </Layout>
    );
};

export default ServicesPage;
