export default function FeaturesItem({ text, image }) {
  return (
    <div className="fItem">
      <img src={image} alt="" />
      <p>{text}</p>
    </div>
  );
}
