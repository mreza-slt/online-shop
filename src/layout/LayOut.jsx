import Navigation from "../components/navigation/Navigation";

const LayOut = ({ children }) => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      {children}
    </div>
  );
};

export default LayOut;
