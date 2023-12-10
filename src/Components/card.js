export default function Card({ image, title, description, btn }) {
  return (
    <div className="card">
      <img className="cardimg" src={image} width="300px" alt="" />
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="readmore">{btn}</div>
    </div>
  );
}
