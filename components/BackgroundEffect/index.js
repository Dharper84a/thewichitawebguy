import * as React from 'react';

import { BackgroundEffectBox, EffectItem } from './styles';

const STAR_COUNT = 50;
const MIN_ANIMATION_SPEED = 1000;
const MAX_ANIMATION_SPEED = 7500;

const BackgroundEffect = (props) => {
    const [effectItems, setEffectItems] = React.useState();
    const tailColors = [
        '95, 145, 255',
        '153,50,204',
        '199,21,133'
    ]

    const getRandomRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const effectItemProps = () => {
        const animationSpeed = getRandomRange(MIN_ANIMATION_SPEED, MAX_ANIMATION_SPEED);
        const tailLength = ((MAX_ANIMATION_SPEED / animationSpeed) * 100).toFixed(0);
        return {
            delay: getRandomRange(MIN_ANIMATION_SPEED, MAX_ANIMATION_SPEED),
            animationSpeed: animationSpeed,
            top: getRandomRange(1, 100),
            tailLength: tailLength,
            tailColor: tailColors[getRandomRange(0, tailColors.length - 1)],
        };
    };

    React.useEffect(() => {
        setEffectItems(new Array(STAR_COUNT).fill(<></>));
    }, [])
    return (
        <BackgroundEffectBox>
            {effectItems &&
                    effectItems.map((empty, key) => {
                        return <EffectItem {...effectItemProps()} key={key} />;
                    })
                }
        </BackgroundEffectBox>
    )
}

export default BackgroundEffect