import * as React from 'react';
import Delivery from '../../../lib/contentful/delivery';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FlipContentSection } from './styles';
import { PaddedSection } from '../shared';
import Sections from '..';

const FlipContent = ({heading, text, flipSection, flipButtonLabel}) => {
    const [isFlipped, setIsFlipped] = React.useState(false);
    const [flipContent, setFlipContent] = React.useState('loading');

    const prespective = 600;
    const richText = text ? documentToReactComponents(text) : false;

    const onClickHandler = () => {
        setIsFlipped(!isFlipped);
    }

    React.useEffect(() => {
        let ignore = false;

        const getFlipContentData = async() => {
            const response = await Delivery.getEntry(flipSection.sys.id);
            if(!ignore) setFlipContent(response);
        }

        getFlipContentData();

        return () => {
            ignore = true;
        }
    }, [flipSection])
    return (
        <FlipContentSection prespective={prespective} className={isFlipped ? 'is-flipped' : ''}>
            <div className="card">
                <PaddedSection className="card-face card-face--front">
                    <h2>{heading}</h2>
                    {richText && richText}
                    <footer>
                        <button onClick={onClickHandler}>
                            {flipButtonLabel}
                        </button>
                    </footer>
                </PaddedSection>
                <PaddedSection className="card-face card-face--back">
                    {flipContent === 'loading' &&
                        <div className="loading">
                            <FontAwesomeIcon icon={faSpinner} />
                        </div>
                    } 
                    {flipContent && flipContent !== 'loading' ? (
                        <Sections sections={[flipContent]} omitPadding={true} />
                    ):(
                        <div className="error">Unable to load content...</div>
                    )}
                    <footer>
                        <button onClick={onClickHandler} aria-label="close">
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                    </footer>
                </PaddedSection>
                
            </div>
        </FlipContentSection>
    )
}

export default FlipContent;