import { ServiceBox } from "./styles";

const serviceMap = {
    consultation: {
        title: "Consultation",
        description: "Will provide anaylists and non-biased recommendations on what will benefit your business you have questions regarding. Unsure of what you may need then I would start here.",
        price: [160],
        duration: 1
    },
    singlePageWebsite: {
        title: "Single Page Website",
        description: "Single page websites are a quick and easy way to get your business name out there. More suited towards highlighting something your business excels at rather than a flagship website. However, it isn't unheard of to have only a single page website as your businesses primary website.",
        price: [1280],
        duration: 4
    },
    multiPageWebsite: {
        title: "Multipage Website",
        description: "A more standard approach to a website. This will consist of a homepage and a handful of suppliment pages, including a dedicated contact page. Perfect for highlighting all the services you offer and going into more detail.",
        price: [2720],
        duration: 8
    },
    smallApplication: {
        title: "Small Web Application",
        description: "If you need a standalone application that is simple and quick to get out the door this would be for you. An example would be a cost estimate of one of your services based on supplied data. Please read the web application policy for conditions.",
        price: [1760],
        duration: 6,
    },
    mediumApplication: {
        title: "Medium Web Application",
        description: "A more complex application compared to one that falls into the Small Web Application category. This would be similar to having a customer facing invoicing system that'll allow your customers to pay their bills online. Please read the web application policy for conditions.",
        price: [4960],
        duration: 16
    }
}
const Service = ({type}) => {

    const serviceItem = serviceMap[type] || false;
    if(!serviceItem) return <></>

    const formatPrice = (price) => {
        if(price.length == 1) {
            return new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(price)
        }

        return price.map((item) => {
            return new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(item)
        }).join(" to ")
    }
    return (
        <ServiceBox>
            <h2>{serviceItem.title}</h2>
            <p>{serviceItem.description}</p>
            <footer>
                <div>
                    <span>Price</span>
                    <span>{formatPrice(serviceItem.price)}</span>
                </div>
                <div>
                    <span>Deliverable</span>
                    <span>{serviceItem.duration} week{serviceItem.duration != 1 ? 's' : ''}</span>
                </div>
                <button>
                    Order {serviceItem.title}
                </button>
            </footer>
        </ServiceBox>
    )
}

export default Service;
