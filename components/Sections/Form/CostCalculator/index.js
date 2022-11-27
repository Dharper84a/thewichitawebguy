import * as React from 'react';

import { FormBox, InputBox, InputGroup } from "./styles";

const packageHelperText = {
    "-": "Packages gives you a starting point. You can customize them as you see fit.",
    "standard": "[describe standard package]",
    "moderate": "[describe package]",
    "large": "[describe package]",
    "single-page-site": "[describe package]",
    "custom": "Start with nothing and select what you want."
};

const CostCalculator = (props) => {
    const [inputPackage, setInputPackage] = React.useState('custom')
    const onPackageChange = (e) => {
        setInputPackage(e.target.value);
    }
    return(
        <FormBox>
            <fieldset>
                <legend>Packages</legend>
                <InputBox>
                    <label htmlFor="package">Pick a package to start from</label>
                    <select name="package" id="package" value={inputPackage} onChange={onPackageChange}>
                        {/* <option value="-" disabled selected>Choose a Package</option> */}
                        <option value="standard">Standard</option>
                        <option value="moderate">Moderate</option>
                        <option value="large">Large</option>
                        <option value="single-page-site">Single Page Site</option>
                        <option value="custom">Custom</option>
                    </select>
                </InputBox>
            </fieldset>
        </FormBox>
    )
}

export default CostCalculator;