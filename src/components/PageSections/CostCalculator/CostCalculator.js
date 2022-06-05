import { faBriefcaseClock } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useRef, useEffect } from "react";

import SectionContainer from "../../SectionContainer/SectionContainer";
const CalculatorPageSection = () => {
  const serviceTimeCost = {
    contact: 6,
    services: 4,
    gallery: 6,
    about: 2,
    payment: 16,
    design_proof: 32,
  };

  const websiteFormatModifier = {
    single: 1,
    multi: 2.5,
  };

  const selectedServicesDefault = {
    contact: false,
    services: false,
    gallery: false,
    about: false,
    payment: false,
  };

  const baseWebsiteCost = 180;
  const consultationFee = 180;
  const perItemTime = 0.75;

  const itemsRef = useRef(null);
  const [hourRate, setHourRate] = useState(45);
  const [estimateHours, setEstimateHours] = useState(0);
  const [estimateTotal, setEstimateTotal] = useState(0);
  const [service, setService] = useState("consultation");

  const [itemCount, setItemCount] = useState(1);
  const [websiteFormat, setWebsiteFormat] = useState(
    websiteFormatModifier.single
  );
  const [selectedServices, setSelectedServices] = useState(
    selectedServicesDefault
  );

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [upfrontPayment, setUpfrontPayment] = useState(0);
  const [totalAfterUpfront, setTotalAfterUpfront] = useState(0);
  const [paymentPlan, setPaymentPlan] = useState("three");
  const [paymentPlanDivider, setPaymentPlanDivider] = useState(3);
  const [designProof, setDesignProof] = useState(false);

  const calculate = () => {
    let total = estimateHours * hourRate;
    let timeCost = 0;
    if (service === "consultation" || service === "help")
      total += consultationFee;

    if (service === "help") total += perItemTime * itemCount * hourRate;

    if (service === "new") {
      total = 0; // make sure we are at 0

      timeCost += selectedServices.contact ? serviceTimeCost.contact : 0;
      timeCost += selectedServices.services ? serviceTimeCost.services : 0;
      timeCost += selectedServices.gallery ? serviceTimeCost.gallery : 0;
      timeCost += selectedServices.about ? serviceTimeCost.about : 0;
      timeCost += selectedServices.payment ? serviceTimeCost.payment : 0;
      
      // Design Proof
      timeCost += designProof ? serviceTimeCost.design_proof : 0;

      total = (timeCost * hourRate + baseWebsiteCost) * websiteFormat;

    
    }

    total = parseInt(total);
    // Make sure our estimate is divisible by four to align with our payment rules
    let totalBasedHours = total / hourRate;
    let modValue = (totalBasedHours % 4) * hourRate;
    total += modValue;

    let upfront = total * 0.1;
    let afterUpfront = total - upfront;
    let payment = afterUpfront / paymentPlanDivider;
    setUpfrontPayment(upfront.toFixed(2));
    setTotalAfterUpfront(afterUpfront.toFixed(2));
    setEstimateTotal(total.toFixed(2));
    setMonthlyPayment(payment.toFixed(2));
  };

  const getPaymentPlanTerms = () => {
    if (paymentPlan === "immediate") {
      return "at project completion";
    }

    return `for ${paymentPlan} months from start of project.`;
  };

  const onItemCountChange = (e) => {
    setItemCount(parseInt(e.target.value));
  };
  const onServiceChange = (e) => {
    setService(e.target.value);
  };

  const onDesignProofChange = (e) => {
    setDesignProof(e.target.checked);
  };
  const onWebsiteServiceChange = (e) => {
    let checked = e.target.checked;
    switch (e.target.name) {
      case "contact_option":
        setSelectedServices({
          ...selectedServices,
          contact: checked,
        });
        break;
      case "services_option":
        setSelectedServices({
          ...selectedServices,
          services: checked,
        });
        break;
      case "gallery_option":
        setSelectedServices({
          ...selectedServices,
          gallery: checked,
        });
        break;
      case "about_option":
        setSelectedServices({
          ...selectedServices,
          about: checked,
        });
        break;
      case "payment_option":
        setSelectedServices({
          ...selectedServices,
          payment: checked,
        });
        break;
      default:
        return;
    }
  };
  const onWebsiteFormatChange = (e) => {
    if (e.target.value === "single")
      setWebsiteFormat(websiteFormatModifier.single);

    if (e.target.value === "multi")
      setWebsiteFormat(websiteFormatModifier.multi);
  };

  const onPaymentDurationChange = (e) => {
    let divider = 1;

    if (e.target.value === "immediate") divider = 1;
    if (e.target.value === "three") divider = 3;
    if (e.target.value === "six") divider = 6;
    if (e.target.value === "twelve") divider = 12;

    setPaymentPlanDivider(divider);
    setPaymentPlan(e.target.value);
  };

  const onRandomizeItemCount = (e) => {
    e.preventDefault();
    let number = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    setItemCount(number);
  };
  useEffect(() => {
    calculate();

    return () => {};
  }, [
    estimateHours,
    service,
    itemCount,
    selectedServices,
    websiteFormat,
    paymentPlanDivider,
    designProof,
  ]);
  return (
    <SectionContainer>
      <h2>Web Services Cost Calculator</h2>
      <p>
        I believe in transparency, honesty, being a decent human and absolutely
        no BS.
      </p>

      <form>
        <fieldset>
          <legend>What are you needing?</legend>
          <div className="form-input-box">
            <input
              type="radio"
              name="service"
              id="service_consulation"
              value="consultation"
              onChange={onServiceChange}
              defaultChecked
            />
            <label
              htmlFor="service_consulation"
              className="input-toggle-caption"
            >
              Web Consultation (Or, I have no idea)
            </label>
          </div>
          <div className="form-input-box">
            <input
              type="radio"
              name="service"
              id="service_existing_website"
              value="help"
              onChange={onServiceChange}
            />
            <label
              htmlFor="service_existing_website"
              className="input-toggle-caption"
            >
              Help with existing website
            </label>
          </div>
          <div className="form-input-box">
            <input
              type="radio"
              name="service"
              id="service_new_website"
              value="new"
              onChange={onServiceChange}
            />
            <label
              htmlFor="service_new_website"
              className="input-toggle-caption"
            >
              New Website
            </label>
          </div>
        </fieldset>

        {service === "help" && (
          <fieldset>
            <legend>How many items do you need help with</legend>
            <p>
              <small>
                <em>
                  Full disclouser without knowing what exact items are needed -
                  some items take considerably longer than others. This estimate
                  will be pretty squashy and will likely change after a web
                  consulation (which has been included in this estimate).
                </em>
              </small>
            </p>
            <span className="item-count">
              {itemCount} item{itemCount > 1 ? "s" : ""}
            </span>
            <div className="form-input-box">
              <label form="number_of_items">Items needing help with?</label>
              <input
                type="range"
                name="number_of_items"
                id="number_of_items"
                min="1"
                max="20"
                step="1"
                value={itemCount}
                onChange={onItemCountChange}
              />
            </div>
            <p>Have no idea? Why not smash this button a few times?</p>
            <button
              onClick={onRandomizeItemCount}
              aria-label="Randomly pick how many items"
            >
              Randomize
            </button>
          </fieldset>
        )}

        {service === "new" && (
          <fieldset>
            <legend>What do you want from your website?</legend>
            <h3>Service Options</h3>
            <div className="form-input-box">
              <input
                type="checkbox"
                name="contact_option"
                id="contact_option"
                onChange={onWebsiteServiceChange}
              />
              <label htmlFor="contact_option">
                A place where people can contact my business.
              </label>
            </div>
            <div className="form-input-box">
              <input
                type="checkbox"
                name="services_option"
                id="services_option"
                onChange={onWebsiteServiceChange}
              />
              <label htmlFor="services_option">
                I want to show off what I can do (aka services).
              </label>
            </div>
            <div className="form-input-box">
              <input
                type="checkbox"
                name="gallery_option"
                id="gallery_option"
                onChange={onWebsiteServiceChange}
              />
              <label htmlFor="gallery_option">
                I want to show off what I've done (aka photo gallery).
              </label>
            </div>
            <div className="form-input-box">
              <input
                type="checkbox"
                name="about_option"
                id="about_option"
                onChange={onWebsiteServiceChange}
              />
              <label htmlFor="about_option">
                I want to talk about my company.
              </label>
            </div>
            <div className="form-input-box">
              <input
                type="checkbox"
                name="payment_option"
                id="payment_option"
                onChange={onWebsiteServiceChange}
              />
              <label htmlFor="payment_option">
                A place where my customers can pay their invoice online.
              </label>
            </div>

            <h3>Website Format?</h3>
            <div className="form-input-box">
              <input
                type="radio"
                name="website_format"
                id="website_format_single_page"
                value="single"
                defaultChecked
                onChange={onWebsiteFormatChange}
              />
              <label htmlFor="website_format_single_page">Single Page</label>
              <br />
              <span className="input-additional-information">
                Fit all the services you want on a single page. Easier and
                faster to develop and easier to maintain. A good choice for many
                small businesses.
              </span>
            </div>
            <div className="form-input-box">
              <input
                type="radio"
                name="website_format"
                id="website_format_multi_page"
                value="multi"
                onChange={onWebsiteFormatChange}
              />
              <label htmlFor="website_format_multi_page">Multi Page</label>
              <br />
              <span className="input-additional-information">
                Give each of your services you want it's own page. This is
                harder and will take longer to develop than a single page
                website. Having certain services on their own page could help
                boost SEO in some instances.
              </span>
            </div>
            <div className="form-input-box">
              <input
                type="checkbox"
                name="design_proof"
                id="design_proof"
                onChange={onDesignProofChange}
              />
              <label htmlFor="design_proof">Custom design?</label>
              <span className="input-additional-information">
                This will require additional approval, increase the time and
                complexity of the build.
              </span>
            </div>
          </fieldset>
        )}

        <fieldset>
          <legend>Payment Options</legend>
          <div className="form-input-box">
            <input
              type="radio"
              name="payment_duration"
              id="payment_duration_immediate"
              value="immediate"
              onChange={onPaymentDurationChange}
            />
            <label htmlFor="payment_duration_immediate">All At Once</label>
          </div>
          <div className="form-input-box">
            <input
              type="radio"
              name="payment_duration"
              id="payment_duration_three"
              value="three"
              defaultChecked
              onChange={onPaymentDurationChange}
            />
            <label htmlFor="payment_duration_three">Over 3 Months</label>
          </div>
          <div className="form-input-box">
            <input
              type="radio"
              name="payment_duration"
              id="payment_duration_six"
              value="six"
              onChange={onPaymentDurationChange}
            />
            <label htmlFor="payment_duration_six">Over 6 Months</label>
          </div>
          <div className="form-input-box">
            <input
              type="radio"
              name="payment_duration"
              id="payment_duration_twelve"
              value="twelve"
              onChange={onPaymentDurationChange}
            />
            <label htmlFor="payment_duration_twelve">Over 12 Months</label>
          </div>
        </fieldset>
      </form>
      <div className="calculator-totals">
        <div>
          <span>Total</span>
          <span>${estimateTotal}</span>
        </div>
        <div>
          <span>Upfront</span>
          <span>${upfrontPayment}</span>
        </div>
        <div>
          <span>Payment</span>
          <span>${monthlyPayment}</span>
          <span>{getPaymentPlanTerms()}</span>
        </div>
      </div>
      <div className="payment-options">
        <h3>How to Pay</h3>
        <p>
          I know some of the calculations from the calculator can get expensive.
          I do find these estimates to be a barrier for local small businesses -
          Yes, I know this is what I'm trying to sovle. I hate how much some of
          these items cost. However, at the same time I must be respectful of my
          time and these estimates are already on the optimistic side.
        </p>

        <h4>The Rules</h4>
        <p>Simple transparent no crap rules.</p>
        <ul>
          <li>10% of the total required upfront.</li>
          <li>
            The remaining amount, after upfront is paid, is based on your
            schedule. This can be all at once, or over three, six or twelve
            months.
          </li>
          <li>
            There is no additional fee for paying over time and no reduced fee
            for paying early; you'll pay the same regardless of how you choose
            to pay. No interest <strong>EVER</strong>.
          </li>
          <li>
            All estimates are based on estimated time multiplied by my hourly
            rate (${hourRate}). Line items times are done in 30 minute
            intervals. The final total time required is in four hour intervals.
            Both rounded up.
          </li>
          <li>
            You only pay for how long it takes and never more than the estimate*
          </li>
          <li>A signed contract will be required for our protection.</li>
        </ul>
        <span className="disclaimer">
          * Based on the formal estimate not the calculator estimate. The
          website calculator estimate will be very close if not perfect.
        </span>
      </div>
    </SectionContainer>
  );
};

export default CalculatorPageSection;
