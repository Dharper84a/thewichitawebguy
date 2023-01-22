import GlassCard from "./GlassCard";
const cardMap = { GlassCard };

const Cards = (props) => {
    if (!cardMap[props?.type]) {
        console.log(`CARD TYPE OF [${props?.type}] NOT FOUND`);
        return <></>;
    }

    const SpecificCard = cardMap[props?.type];

    return <SpecificCard {...props} />;
};

export default Cards;
