import * as React from "react";
import ButtonGroup from "../../../Common/ButtonGroup";
import Toggle from "../../../Common/Toggle";

import { FormBox, InputBox, InputGroup } from "./styles";

const packageHelperText = {
    "-": "Packages gives you a starting point. You can customize them as you see fit.",
    standard: "[describe standard package]",
    moderate: "[describe package]",
    large: "[describe package]",
    "single-page-site": "[describe package]",
    custom: "Start with nothing and select what you want.",
};

const localHourlyRate = 45;
const remoteRatePremium = 1.5;

const hours = {
    seo: {
        standard: 0,
        premium: 8,
    },
    extras: {
        contactForm: 4,
        invoicePayment: 16,
        otherCapability: 32,
    },
    pages: {
        standard: 4,
        specialty: 6,
    },
    packages: {
        standard: 0,
        moderate: 0,
        singlePage: 0,
    },
};
const CostCalculator = (props) => {
    // Cost and Resource Needs
    const [totalCost, setTotalCost] = React.useState(0);

    // Location
    const [inputLocalBusiness, setInputLocalBusiness] = React.useState(true);

    // Search Engine Opimization
    const [inputSEO, setInputSEO] = React.useState("standard");
    const onSeoChange = (e) => {
        setInputSEO(e.target.value);
        setInputPackage("custom");
    };

    // Extra Capabilities
    //  - Contact Form
    const [inputContactForm, setInputContactForm] = React.useState(false);
    const onContactFormChange = (e) => {
        setInputContactForm((current) => !current);
        setInputPackage("custom");
    };
    //  - Accept Invoice Payments
    const [inputAcceptPayments, setInputAcceptPayments] = React.useState(false);
    const onAcceptPaymentsChange = (e) => {
        setInputAcceptPayments((current) => !current);
        setInputPackage("custom");
    };
    //  - Other Capability
    const [inputOtherCapability, setInputOtherCapability] =
        React.useState(false);
    const [inputDescribeCapability, setInputDescribeCapability] =
        React.useState("");
    const onOtherCapabilityChange = (e) => {
        setInputOtherCapability((current) => !current);
        setInputPackage("custom");
    };
    const onDescribeCapabilityChange = (e) => {
        setInputDescribeCapability(e.target.value);
    };
    // Pages Related
    //  - Standard
    const [inputStandardPages, setInputStandardPages] = React.useState("0");
    const [standardPagesClass, setStandardPagesClass] =
        React.useState("normal");
    const onStandardPageChange = (e) => {
        setInputStandardPages(e.target.value);
        setStandardPagesClass("blur");
        setInputPackage("custom");
    };
    React.useEffect(() => {
        let ignore = false;
        if (standardPagesClass === "blur") {
            setTimeout(() => {
                setStandardPagesClass("normal");
            }, 150);
        }
        return () => {
            ignore = true;
        };
    }, [standardPagesClass]);

    //  - Specialty
    const [inputSpecialtyPages, setInputSpecialtyPages] = React.useState("0");
    const [specialtyPagesClass, setSpecialtyPagesClass] =
        React.useState("normal");
    const onSpecialtyPageChange = (e) => {
        setInputSpecialtyPages(e.target.value);
        setSpecialtyPagesClass("blur");
        setInputPackage("custom");
    };
    React.useEffect(() => {
        let ignore = false;
        if (specialtyPagesClass === "blur") {
            setTimeout(() => {
                setSpecialtyPagesClass("normal");
            }, 150);
        }
        return () => {
            ignore = true;
        };
    }, [specialtyPagesClass]);

    // Package Related
    const [inputPackage, setInputPackage] = React.useState("custom");
    const onPackageChange = (e) => {
        setInputPackage(e.target.value);
        switch (e.target.value) {
            case "standard":
                setInputStandardPages(4);
                setInputSpecialtyPages(1);
                setInputSEO("standard");
                setInputContactForm(true);
                setInputAcceptPayments(false);
                setInputOtherCapability(false);
                setInputDescribeCapability("");
                break;
            case "moderate":
                setInputStandardPages(8);
                setInputSpecialtyPages(3);
                setInputSEO("standard");
                setInputContactForm(true);
                setInputAcceptPayments(false);
                setInputOtherCapability(false);
                setInputDescribeCapability("");
                break;
            case "single-page-site":
                setInputStandardPages(0);
                setInputSpecialtyPages(1);
                setInputSEO("premium");
                setInputContactForm(true);
                setInputAcceptPayments(false);
                setInputOtherCapability(false);
                setInputDescribeCapability("");
                break;
        }
    };

    React.useEffect(() => {
        const standardPageHours =
            hours.pages.standard * parseInt(inputStandardPages);
        const specialtyPageHours =
            hours.pages.specialty * parseInt(inputSpecialtyPages);
        const pagePrice =
            (standardPageHours + specialtyPageHours) * localHourlyRate;

        const premiumSeoPageHours =
            inputSEO === "premium"
                ? parseInt(inputStandardPages) +
                  parseInt(inputSpecialtyPages) * 2
                : 0;

        const seoPrice =
            (hours.seo[inputSEO] + premiumSeoPageHours) * localHourlyRate;

        const contactFormHours = inputContactForm
            ? hours.extras.contactForm
            : 0;
        const acceptInvoiceHours = inputAcceptPayments
            ? hours.extras.invoicePayment
            : 0;
        const otherCapabilityHours = inputOtherCapability
            ? hours.extras.otherCapability
            : 0;
        const extrasPrice =
            (contactFormHours + acceptInvoiceHours + otherCapabilityHours) *
            localHourlyRate;

        setTotalCost(pagePrice + seoPrice + extrasPrice);
    }, [
        inputStandardPages,
        inputSpecialtyPages,
        inputSEO,
        inputContactForm,
        inputAcceptPayments,
        inputOtherCapability,
    ]);

    const [optionPremiumSeo, setOptionPremiumSeo] = React.useState(false);
    const [optionContactForm, setOptionContactForm] = React.useState(true);
    const [optionInvoicePayments, setOptionInvoicePayments] = React.useState(false);
    const [optionOtherCapability, setOptionOtherCapability] = React.useState(false);
    const onSeoClickHandler = (value) => {
        setOptionPremiumSeo(value);
    };
    const onContactFormClickHandler = (value) => {
        setOptionContactForm(value);
    };
    const onInvoiceClickHandler = (value) => {
        setOptionInvoicePayments(value);
    };
    const onOtherClickHandler = (value) => {
        setOptionOtherCapability(value);
    };

    const [packageSelected, setPackageSelected] = React.useState(0);
    const onStandardClickHandler = (e) => {
        e.preventDefault();
        setPackageSelected(0);
    }

    const onPremiumClickHandler = (e) => {
        e.preventDefault();
        setPackageSelected(1);
    }

    const onSinglePageClickHandler = (e) => {
        e.preventDefault();
        setPackageSelected(2);
        setOptionPremiumSeo(true);
    }
  
    const calculateTotal = () => {
        console.log('Calculate', optionPremiumSeo)
        let standardPages = 0;
        let premiumPages = 0;
        let premiumSeo = optionPremiumSeo;

        if(packageSelected === 0) {
            standardPages = 4;
            premiumPages = 1;
            premiumSeo = false;
        } else if(packageSelected === 1) {
            standardPages = 8;
            premiumPages = 3;
            premiumSeo = false;
        } else if(packageSelected === 2) {
            standardPages = 0;
            premiumPages = 1;
            premiumSeo = true;
        } else {
            premiumSeo = false;
        }

        const standardPageHours =
            hours.pages.standard * standardPages;
        const premiumPageHours =
            hours.pages.specialty * premiumPages;
     
        const seoHours = premiumSeo ? standardPages + premiumPages * 2 : 0;
     
        
        const contactFormHours = optionContactForm
            ? hours.extras.contactForm
            : 0;
        const acceptInvoiceHours = optionInvoicePayments
            ? hours.extras.invoicePayment
            : 0;
    

        const totalHours = standardPageHours + premiumPageHours + seoHours + contactFormHours + acceptInvoiceHours;

        setTotalCost(totalHours * localHourlyRate);
    }
   

    React.useEffect(() => {
        calculateTotal();
    }, [
        packageSelected,
        optionContactForm,
        optionInvoicePayments,
        optionPremiumSeo
    ])
    return (
        <FormBox>
            <fieldset className="package-type">
                <legend>Choose a Package</legend>
                <InputBox>
                    <ButtonGroup buttons={[
                        {
                            label: "Standard",
                            selected: packageSelected === 0 || false,
                            onClick: onStandardClickHandler,
                        },
                        {
                            label: "Premium",
                            selected: packageSelected === 1 || false,
                            onClick: onPremiumClickHandler,
                        },
                        {
                            label: "Single Page Site",
                            selected: packageSelected === 2 || false,
                            onClick: onSinglePageClickHandler,
                        }
                    ]} />
                </InputBox>
            </fieldset>
            <fieldset className="options-set">
                <legend>Select Your Options</legend>
                <InputBox>
                    <label htmlFor="opt_premium_seo">Premium SEO</label>
                    <Toggle
                        default={optionPremiumSeo}
                        onLabel="YES"
                        offLabel="NO"
                        id="opt_premium_seo"
                        onClick={onSeoClickHandler}
                    />
                </InputBox>
                <InputBox>
                    <label htmlFor="opt_contact_form">Contact Form</label>
                    <Toggle
                        default={optionContactForm}
                        onLabel="YES"
                        offLabel="NO"
                        id="opt_contact_form"
                        onClick={onContactFormClickHandler}
                    />
                </InputBox>
                <InputBox>
                    <label htmlFor="opt_invoice_payments">Accept Invoice Payments</label>
                    <Toggle
                        default={optionInvoicePayments}
                        onLabel="YES"
                        offLabel="NO"
                        id="opt_invoice_payments"
                        onClick={onInvoiceClickHandler}
                    />
                </InputBox>
                {/* <InputBox>
                    <label htmlFor="opt_other">Other Capability</label>
                    <Toggle
                        default={optionOtherCapability}
                        onLabel="YES"
                        offLabel="NO"
                        id="opt_other"
                        onClick={onOtherClickHandler}
                    />
                </InputBox> */}
            </fieldset>
            <fieldset>
                <legend>Packages</legend>
                <InputBox>
                    <label htmlFor="package">
                        Pick a package to start from
                    </label>
                    <select
                        name="package"
                        id="package"
                        value={inputPackage}
                        onChange={onPackageChange}
                    >
                        {/* <option value="-" disabled selected>Choose a Package</option> */}
                        <option value="standard">Standard</option>
                        <option value="moderate">Moderate</option>
                        <option value="single-page-site">
                            Single Page Site
                        </option>
                        <option value="custom">Custom</option>
                    </select>
                </InputBox>
            </fieldset>
            <fieldset>
                <legend>Pages</legend>
                <InputBox>
                    <label htmlFor="standard-pages">Standard Pages</label>
                    <InputGroup>
                        <input
                            type="range"
                            min="0"
                            max="10"
                            step="1"
                            value={inputStandardPages}
                            onChange={onStandardPageChange}
                        />
                        <span className={`input-value ${standardPagesClass}`}>
                            <small>x</small>
                            {inputStandardPages}
                        </span>
                    </InputGroup>
                </InputBox>
                <InputBox>
                    <label htmlFor="specialty-pages">Specialty Pages</label>
                    <InputGroup>
                        <input
                            type="range"
                            min="0"
                            max="10"
                            step="1"
                            value={inputSpecialtyPages}
                            onChange={onSpecialtyPageChange}
                        />
                        <span className={`input-value ${specialtyPagesClass}`}>
                            <small>x</small>
                            {inputSpecialtyPages}
                        </span>
                    </InputGroup>
                </InputBox>
            </fieldset>
            <fieldset>
                <legend>Search Engine Optimization (SEO)</legend>
                <InputGroup>
                    <InputBox>
                        <label htmlFor="seo_standard" className="show-pointer">
                            <input
                                type="radio"
                                name="seo"
                                id="seo_standard"
                                value="standard"
                                checked={inputSEO === "standard" ? true : false}
                                onChange={onSeoChange}
                            />{" "}
                            Standard (free)
                        </label>
                    </InputBox>
                    <InputBox>
                        <label htmlFor="seo_premium" className="show-pointer">
                            <input
                                type="radio"
                                name="seo"
                                id="seo_premium"
                                value="premium"
                                checked={inputSEO === "premium" ? true : false}
                                onChange={onSeoChange}
                            />{" "}
                            Premium
                        </label>
                    </InputBox>
                </InputGroup>
            </fieldset>
            <fieldset>
                <legend>Extras Capabilities</legend>
                <InputGroup>
                    <InputBox>
                        <input
                            type="checkbox"
                            name="contact_form"
                            value={inputContactForm}
                            checked={inputContactForm}
                            onChange={onContactFormChange}
                        />{" "}
                        Contact Form
                    </InputBox>
                    <InputBox>
                        <input
                            type="checkbox"
                            name="accept_invoice_payments"
                            value={inputAcceptPayments}
                            checked={inputAcceptPayments}
                            onChange={onAcceptPaymentsChange}
                        />{" "}
                        Accept Invoice Payments
                    </InputBox>
                    <InputBox>
                        <input
                            type="checkbox"
                            name="other_capability"
                            value={inputOtherCapability}
                            checked={inputOtherCapability}
                            onChange={onOtherCapabilityChange}
                        />{" "}
                        Other Capability
                    </InputBox>
                </InputGroup>
                {inputOtherCapability && (
                    <InputBox>
                        <label htmlFor="describe_other_capability">
                            Describe Other Capability
                        </label>
                        <textarea
                            value={inputDescribeCapability}
                            onChange={onDescribeCapabilityChange}
                            id="describe_other_capability"
                        ></textarea>
                    </InputBox>
                )}
            </fieldset>
            <footer>
                <p>
                    Your Price
                    <br />
                    <strong>${totalCost}</strong>
                </p>
            </footer>
        </FormBox>
    );
};

export default CostCalculator;
