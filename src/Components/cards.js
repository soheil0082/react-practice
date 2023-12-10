export default function Cards({ title, des, children }) {
  return (
    <div className="cards">
      <h3 className="sectionT">{title}</h3>
      <p className="sectionD">
        <span>{des}</span>
      </p>
      <div className="cardContainer">{children}</div>;
    </div>
  );
}
