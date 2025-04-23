import React from 'react';
import Signup from '../components/Signup';

const SignupPage = () => {
  const handleSignupSuccess = (user) => {
    alert(`Account created for ${user.name}`);
    // Redirect or show login page
  };

  return (
    <div className="signup-page">
      <Signup onSignupSuccess={handleSignupSuccess} />
    </div>
  );
};

export default SignupPage;
