import MenuItem from "./menuItem";

export default function TopBar() {
  return (
    <div className="topbar">
      <MenuItem
        text="09157203062"
        icon="phone"
        bgcolor="#6466e9"
        color="#fff"
        isBtn={true}
      />
      <MenuItem
        text="mahbubfalah@gmail.com"
        icon="mail"
        bgcolor="#6466e9"
        color="#fff"
        isBtn={true}
      />
    </div>
  );
}
