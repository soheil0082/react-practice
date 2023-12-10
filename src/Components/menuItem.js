export default function MenuItem({ text, icon, bgcolor, color, isBtn, route }) {
  return isBtn ? (
    <button
      className="menuBtn"
      style={{ backgroundColor: bgcolor, color: color }}
    >
      <span className="material-symbols-outlined">{icon}</span>
      {text === null ? null : <span>{text}</span>}
    </button>
  ) : (
    <li>
      <a href={route}>{text}</a>
    </li>
  );
}
