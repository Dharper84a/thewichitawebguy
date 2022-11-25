import Link from "next/link";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { PaddedSection } from "../shared";
const TextBlock = ({text}) => {
    const richText = documentToReactComponents(text);
    return (
        <PaddedSection>
            {richText}
            
        </PaddedSection>
    )
}

export default TextBlock;

/*
<h2>{props.heading}</h2>
            <p>Getting straight to the point. Every busines deserves a website <u>that works for them</u>, now more than ever. I&apos;m offering my decades of experience and expertise, so each and every small business in my community has access to a great website that is affordable no matter your budget.</p>
            <h3>No <abbr title="Bullshit">BS</abbr></h3>
            <p>
                My prices are firm and transparent. My target audience is very small local businesses that do not have the financial means to afford an agency website. I am not on call 24/7. 
            </p>
            <p>
                My time is precious to me. I have a full time career as a Full Stack Developer, I&apos;m a husband and a father and the tech and media ministry leader at my church. Theres a social life somewhere in the mix too. I&apos;m doing this because I want to help my community and I believe the current state of agency and builder websites and the products they produce are inferior and near unethical given how the internet works today.
            </p>
            <p>

            </p>
            <p>
            The cost associated with an agency website is a barrier and in most cases delivers an inferior product. Build your own website services require your time to setup, create and manage and again delivers an inferior product more so than agency websits.</p>
            <p>
                I&apos;m offering my expertise to businesses that do not have the budget a marketing agency would require to create a website and web presense for your business. In todays always connected world having a quality, performant and accessible website is a fundimental necessity for any business.
            </p>
            <h3>Pricing</h3>
            <p>
                I have a no-BS pricing model that comes in at a fraction of an agencies cost. While at the same time providing a superior performing website with minimal recurring monthly costs. Along with the ability to pay the majority of the website cost over a six month period.
            </p>
            <Link href="#" title="View details about pricing">
                    Pricing Model and Cost Calculator
            </Link>
            <h2>How Does This Work</h2>
            <p>
                Firstly I&apos;m not looking at this as a job, but as a community service. I love helping people and frankly it makes me feel good. I create and manage these sites outside of my normal career and family obligations.
            </p>
            <h2>Who is The Wichita Web Guy</h2>
            <p>
                I&apos;m professional Full Stack Developer with a decade of professional and two decades of freelance experience in website and web app development. I believe every business should have access to a quality website that will work for them, not just the businesses with enough to break the barrier of entry. The local community is important to me and I genuinely want to help these small businesses.
            </p>
            */