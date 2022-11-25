import * as React from 'react';
import TextBlock from './TextBlock';

const Sections = ({sections}) => {
    const [sectionComponents, setSectionComponents] = React.useState(false);

    React.useEffect(() => {
        const getComponents = async() => {
            const pComponents = sections.map((section, key) => {
                switch(section.sys.contentType.sys.id) {
                    case 'sectionTextBlock':
                        return <TextBlock {...section.fields} key={`${section.sys.id}__${key}`} />
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