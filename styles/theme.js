
/** HELPER FUNCTIONS */
const fontClamp = (fontMin, fontMax, boxMin = 350, boxMax = 1920) => {
    const slope = (fontMax - fontMin) / (boxMax - boxMin);
    const yIntersection = -boxMin * slope + fontMin;

    const output = `clamp(${fontMin}px, ${yIntersection.toFixed(2)}px + ${(slope * 100).toFixed(2)}vw, ${fontMax}px)`;
    
    return output;
};

const lineClamp = (lines) => {
    return {
        display: '-webkit-box',
        '-webkit-line-clamp': `${lines}`,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden'
    }
}

/** END - HELPER FUNCTIONS */

/** SHARED THEME SETTINGS */
const sharedTheme = {
    font: {
        primary: 'Montserrat, sans-serif', // 400, 500, 700
        secondary: 'Barlow Condensed, sans-serif', // 400, 500
    },
    fontClamp: fontClamp,
    lineClamp: lineClamp,
}

export const darkTheme = {
    ...sharedTheme,
    text: {
        primary: '#FEFEFE',
        link: '#BB377D',
    },
    button: {
        primary: {
            background: 'linear-gradient(to right, #BB377D, #89216B)', //'#BB377D',
            text: '#FEFEFE',
        }
    },
    background: {
        base: '#16222A',
        light: '#EFEFEF',
    }
}