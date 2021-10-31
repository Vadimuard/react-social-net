import GoogleLogin from 'react-google-login';
import { GOOGLE_TOKEN_ID, SERVER_URL } from '../../constants';

export const Header = () => {
  const onSignIn = async (googleUser) => {
    const res = await fetch(`${SERVER_URL}/users`, {
      method: 'POST',
      body: JSON.stringify({ token: googleUser.tokenId }),
      headers: { 'Content-Type': 'application/json'}
    });
    const data = await res.json();
  //  TODO save session token
  //  TODO change login button to profile overview
  };

  return (
    <header className='header'>
      <div className='container mx-auto flex justify-between'>
        <h1 className='text-3xl font-bold mx-6'>Social net</h1>
        {/* eslint-disable-next-line no-undef */}
        <GoogleLogin className='mx-6' clientId={GOOGLE_TOKEN_ID} onSuccess={onSignIn} cookiePolicy='single_host_origin' />
      </div>
    </header>
  );
};
