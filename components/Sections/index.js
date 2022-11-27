import * as React from 'react';
import TextBlock from './TextBlock';
import Form from './Form';

import FlipContent from './FlipContent';

const Sections = ({sections, omitPadding}) => {
    const [sectionComponents, setSectionComponents] = React.useState(false);

    React.useEffect(() => {
        const getComponents = async() => {
            const pComponents = sections.map((section, key) => {
                const sectionKey = `${section.sys.id}__${key}`;

                switch(section.sys.contentType.sys.id) {
                    case 'sectionTextBlock':
                        return <TextBlock {...section.fields} key={sectionKey} />
                    case 'sectionForm':
                        return <Form {...section.fields} omitPadding={omitPadding || false} key={sectionKey} />
                    case 'sectionFlipContent':
                        return <FlipContent {...section.fields} key={sectionKey} />
                    default: return <></>
                }
            })
    
            const components = await Promise.all(pComponents);
            
            setSectionComponents(components)
        }

        getComponents();
        

    }, [sections])

    return (
        <>
        {sectionComponents && sectionComponents.map((section) => { return section })}
        </>
    )
}

export default Sections;