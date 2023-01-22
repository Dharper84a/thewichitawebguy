import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import ProfileImage from "../../../../public/images/cartoon-avatar.svg";

import { CardComponent, CardContent, ServiceOptions, ServiceCard} from "./styles";

const OUT_OF_AREA_PREMIUM = 1.75;
// Prices
const CONSULTATION_PRICE = 160; // 4 hours
const WEBSITE_SINGLE_PAGE_PRICE = 1280 + CONSULTATION_PRICE; // 32 hours
const WEBSITE_STANDARD_PRICE = 2560 + CONSULTATION_PRICE; // 64 hours
const WEB_APPLICATION_MIN_PRICE = 1600 + CONSULTATION_PRICE; // 40 hours + consulation price
const WEB_APPLICATION_MAX_PRICE = 4800 + CONSULTATION_PRICE; // 120 hours + consultation price

// Delivery Timeframe (in weeks)
const CONSULTATION_TIME = 1;
const WEBSITE_SINGLE_PAGE_TIME = 4;
const WEBSITE_STANDARD_TIME = 8;
const WEB_APPLICATION_MIN_TIME = 6;
const WEB_APPLICATION_MAX_TIME = 16;

const GlassCard = (props) => {
    const [showing, setShowing] = React.useState();

    const showingData = {
        consultation: [
            {
                title: "Standalone Consultation",
                description: "I'll provide anaylists and non-biased recommendations on what will benefit your business or business property you have questions regarding. Consulation is performed on all other services in relation to the service.",
                price: new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(CONSULTATION_PRICE),
                deliveryTime: CONSULTATION_TIME,
            },
        ],
        website: [
            {
                title: "Single Page Website",
                description: "Single page websites are a quick and easy way to get your business name out there. More suited towards highlighting something your business excels at rather than a businesses flagship website. However, it isn't unheard of to have only a single page website for you business.",
                price: new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(WEBSITE_SINGLE_PAGE_PRICE),
                deliveryTime: WEBSITE_SINGLE_PAGE_TIME,
            },
            {
                title: "Multipage Website",
                description: "A more standard approach to a website. This will consist of a homepage and a handful of suppliment pages, including a dedicated contact page. Perfect for highlighting all the services you offer and going into more detail.",
                price: new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(WEBSITE_STANDARD_PRICE),
                deliveryTime: WEBSITE_STANDARD_TIME,
            },
        ],
        webapp: [
            {
                title: "Minimum Web Application",
                description: "If you need a standalone application that is simple and quick to get out the door this would be for you. An example would be a cost estimation of one of your services based on supplied data. There are special requirements for web applications. Please the additional information.",
                price: new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(WEB_APPLICATION_MIN_PRICE),
                deliveryTime: WEB_APPLICATION_MIN_TIME,
            },
            {
                title: "Maximum Web Application",
                description: "A more complex application compared to one that falls into the Minimum Web Application category. This would be similar to having a customer facing invoicing system that'll allow your customers to pay their bills online. There are special requirements for web applications. Please read the additional informaiton.",
                price: new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(WEB_APPLICATION_MAX_PRICE),
                deliveryTime: WEB_APPLICATION_MAX_TIME,
            },
        ],
    };

    const onServiceMenuItemClick = (e) => {
        const serviceType = e.target.getAttribute('service-type');
        if(showingData[serviceType]) {
            setShowing(serviceType);
        }
    }
    return (
        <CardComponent>
            <CardContent>
                <figure>
                    <Image
                        src={ProfileImage}
                        width={150}
                        height={150}
                        layout="fixed"
                        alt=""
                    />
                </figure>
                <h2>The Wichita Web Guy</h2>
                <p>
                    Breaking barriers by providing websites, web applications
                    and consultation to local small businesses at a fraction of
                    agency or website builder prices.
                </p>
                <ServiceOptions>
                    <h3>What do you need?</h3>
                    <menu>
                        <li>
                            <button onClick={onServiceMenuItemClick} service-type="consultation">Consultation</button>
                        </li>
                        <li>
                            <button onClick={onServiceMenuItemClick} service-type="website">Website</button>
                        </li>
                        <li>
                            <button onClick={onServiceMenuItemClick} service-type="webapp">Web Application</button>
                        </li>
                    </menu>
                    <aside>
                        {showing && showingData[showing].map((item, key) => {
                            return (
                                <ServiceCard key={key}>
                                    <header>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                        <p>Deliverable in {item.deliveryTime} week{item.deliveryTime <= 1 ? '' : 's'}</p>
                                    </header>
                                    <footer>
                                        <span>{item.price}</span>
                                    </footer>
                                </ServiceCard>
                                
                            )
                        })}
                    </aside>
                </ServiceOptions>
            </CardContent>
        </CardComponent>
    );
};

export default GlassCard;
