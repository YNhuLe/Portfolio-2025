import "./TechStack.scss";


function TechStack({ logos }) {
  return (
    <div className="hive">
      {logos?.map((logo, index) => (
        <div className="hex" key={index}>
          <img src={logo.url} alt={logo.name} className="hex-logo" />
          <span className="hex-title">{logo.name}</span>
        </div>
      ))}
    </div>
  );
}

export default TechStack;
