import MenuItem from "../Components/menuItem";
import TopBar from "../Components/topBar";

export default function Header() {
  return (
    <>
      <TopBar></TopBar>
      <header className="header">
        <div className="container">
          {" "}
          <img
            src="/Peachpuff-Brush-Stroke-Photography-Logo-1.png"
            alt="logo"
            width={200}
            className="logo"
          />
          <ul className="menu">
            <MenuItem text="کارگاه ها و ر ویدادها " isBtn={false} />
            <MenuItem text="فروشگاه " isBtn={false} />
            <MenuItem text="مقالات " isBtn={false} />
            <MenuItem text="تماس با ما" isBtn={false} route="contact" />
          </ul>
        </div>
        <div className="container">
          <MenuItem
            text=""
            icon="shopping_bag"
            bgcolor="rgba(0, 0, 0, .08)"
            color="#343a40"
            isBtn={true}
          />
          <MenuItem
            text="ورود و ثبت نام"
            icon="login"
            bgcolor="#6466e9"
            color="#fff"
            isBtn={true}
          />
        </div>
      </header>
    </>
  );
}
