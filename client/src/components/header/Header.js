export const Header = () => {
  return (
    <header className="header">
      <div className='container mx-auto flex justify-between'>
        <h1 className="text-3xl font-bold mx-6">Social net</h1>
        <button className='login-btn mx-6'>Log in with Google</button>
      </div>
    </header>
  );
};
