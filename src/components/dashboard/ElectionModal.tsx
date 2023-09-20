'use client';
import React, { useEffect, useState } from 'react';
import { Button, InputField } from '../form-control';
import { Arrow } from '@/svg';
import OTPInput from 'react-otp-input';

const VotingMethod = () => {
  return (
    <div className="mt-5 voting__method">
      <p>Choose Voting Method</p>

      <div>
        <div className="button__con mt-3">
          <button>Fingerprint</button>
        </div>

        <div className="button__con mt-3">
          <button>OTP</button>
        </div>
      </div>
    </div>
  );
};

const EnterEmail = () => {
  return (
    <div className="mt-4 enter__email">
      {/* <p>Type email address</p> */}
      <InputField name="email" type="email" placeholder="Email" label="Type email address" />
    </div>
  );
};

const EnterOTP = () => {
  const [otp, setOtp] = useState('');

  return (
    <div className="mt-4 enter__otp">
      <p>Input the One-time-password that was sent to your mail</p>
      <div className="w-100">
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span></span>}
          renderInput={(props) => <input {...props} />}
          containerStyle="otp__container mt-3"
          inputStyle="otp__input"
          shouldAutoFocus
        />
      </div>
    </div>
  );
};

const ElectionModal = () => {
  return (
    <div className="voting__app__election__modal bg-white d-flex flex-column h-100">
      <div className="content">
        <h5 className="title">Presidential Election</h5>

        {/* <VotingMethod /> */}
        {/* <EnterEmail /> */}
        <EnterOTP />
      </div>

      <div className="d-flex justify-content-end w-100">
        <div>
          <Button color="green" type="button">
            <div className="d-flex align-items-center gap-3">
              Next <Arrow />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ElectionModal;
