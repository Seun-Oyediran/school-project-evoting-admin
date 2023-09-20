import React from 'react';

const Announcement = () => {
  return (
    <div className="voting__app__announcement__card">
      <div className="title">
        <h3>Announcement</h3>
      </div>
      <div className="content">
        <p className="my-3">
          All candidates are to ensure that their thumbs are correctly placed when casting their
          voted in order not to render the vote Invalid
        </p>
        <p className="my-3">
          Candidates with disabilities can make use of the OTP option that generates a secret code
          sent to their mails to cast their vote
        </p>
      </div>
    </div>
  );
};

export default Announcement;
