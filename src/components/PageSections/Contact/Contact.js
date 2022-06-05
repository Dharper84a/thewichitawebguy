import React, {useState} from 'react';

import SectionContainer from '../../SectionContainer/SectionContainer';
const ContactPageSection = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [useEstimate, setUseEstimate] = useState(false);

  const onUseEstimateHandler = (e) => {
    e.preventDefault();
    setUseEstimate(!useEstimate);
  }

  const onEmailChange = (e) => { setEmail(e.target.value); }
  const onPhoneChange = (e) => { setPhone(e.target.value); }
  const onMessageChange = (e) => { setMessage(e.target.value); }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('Send');
  }
  return(
    <SectionContainer>
      <h2>Let's Talk</h2>
      <form>
        <div className="form-input-box">
          <input type="email" name="email" value={email} onChange={onEmailChange} placeholder="Email" />
        </div>
        <div className="form-input-box">
          <input type="tel" name="phone" value={phone} onChange={onPhoneChange} placeholder="Phone Number" />
        </div>
        <div className="form-input-box">
          <textarea name="message" onChange={onMessageChange} placeholder="Message">{message}</textarea>
        </div>
        <div>
          <button onClick={onUseEstimateHandler}>Use Estimate</button>
          
        </div>
        <div className="form-input-box">
          <input type="submit" value="Send" onClick={onSubmitHandler} />
        </div>
        {useEstimate && 
          <p>The estimate will be sent with your message.</p>
          }
      </form>
    </SectionContainer>
  );
}

export default ContactPageSection;