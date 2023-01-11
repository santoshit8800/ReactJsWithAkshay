const Title = () => (
    <a href="/">
      <img 
      alt="logo" 
      title="Logo" 
      className="logo" src="https://lh3.googleusercontent.com/p/AF1QipNZCXWLqGecr7aGdFq2gvZWHJ6MrH3KWBFTm15E=w1080-h608-p-no-v0" />
    </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>          
        </ul>
      </div>
    </div>
  );
};

export default Header;