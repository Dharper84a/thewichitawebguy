import * as React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { FormSection } from './styles';
import CostCalculator from './CostCalculator';

const Form = ({heading, text, formType, omitPadding}) => {
    
    const getFormComponent = () => {
        switch(formType) {
            case 'Cost Calculator':
                return <CostCalculator />
            default: <></>
        }
    }

    const formComponent = getFormComponent()
    return (
        <FormSection>
            {heading && <h2>{heading}</h2>}
            {text && documentToReactComponents(text)}
            {formComponent}
            
        </FormSection>
    )
}

export default Form;