import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function App() {
  return (
    <>
      <Topbar />
      <Header />
      <Poster />
      <Cards
        title="کارگاه ها و رویدادها"
        des="اینجا شروع مسیر تربیت کودکان موفق شماست!"
        seemore="بیشتر بخوانید"
      />
      <Support />
      <Cards
        title="فروشگاه"
        des="محصولات آموزشی برای شما و کودکان شما"
        seemore="بیشتر بخوانید"
      />
      <Footer />
    </>
  );
}

function Topbar() {
  return (
    <div className="topbar">
      <MenuButton
        text="09157203062"
        icon="phone"
        bgcolor="#6466e9"
        color="#fff"
      />
      <MenuButton
        text="mahbubfalah@gmail.com"
        icon="mail"
        bgcolor="#6466e9"
        color="#fff"
      />
    </div>
  );
}

function Header() {
  return (
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
          <MenuItem text="کارگاه ها و ر ویدادها " />
          <MenuItem text="فروشگاه " />
          <MenuItem text="مقالات " />
          <MenuItem text="تماس با ما" />
        </ul>
      </div>
      <div className="container">
        <MenuButton
          text=""
          icon="shopping_bag"
          bgcolor="rgba(0, 0, 0, .08)"
          color="#343a40"
        />
        <MenuButton
          text="ورود و ثبت نام"
          icon="login"
          bgcolor="#6466e9"
          color="#fff"
        />
      </div>
    </header>
  );
}

function Poster() {
  return (
    <div className="poster">
      <h1>آکادمی آموزش مهارت های کارآفرینی و کسب و کار دکتر محبوبه فلاح</h1>
      <p>
        آموزش‌های کاربردی حرفه ای کارآفرینی، کسب و کار، موفقیت و رشد فردی برای
        خانواده
      </p>
      <SearchBox />
      <div className="features">
        <FeaturesItem
          text="برگزاری دوره های آنلاین"
          image="/questionnaire.png"
        />
        <FeaturesItem text="برگزاری دوره های حضوری" image="/presentation.png" />
        <FeaturesItem text="برگزاری دوره های دانشگاهی" image="/student1.png" />
      </div>
    </div>
  );
}

function Cards({ title, des, seemore }) {
  return (
    <div className="cards">
      <h3 className="sectionT">{title}</h3>
      <p className="sectionD">
        <span>{des}</span>
      </p>
      <div className="cardContainer">
        <Card
          image="/Peachpuff-Brush-Stroke-Photography-Logo-1.png"
          seeMore={seemore}
        />
        <Card
          image="/Peachpuff-Brush-Stroke-Photography-Logo-1.png"
          seeMore={seemore}
        />
        <Card
          image="/Peachpuff-Brush-Stroke-Photography-Logo-1.png"
          seeMore={seemore}
        />
      </div>
      ;
    </div>
  );
}

function Support() {
  return (
    <div className="support">
      <img src="/advice.png" />
      <div className="help">
        <h3>درخواست مشاوره</h3>
        <p>
          برای کسب اطلاعات بیشتر درباره این محصول درخواست مشاوره خود را ارسال
          کنید و یا با ما در تماس باشید.
        </p>
        <MenuButton
          text="درخواست مشاوره"
          icon=""
          bgcolor="#FFD001"
          color="black"
        />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#6466e9"
          fill-opacity="1"
          d="M0,224L80,208C160,192,320,160,480,165.3C640,171,800,213,960,224C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>{" "}
      <div className="footer">
        <div className="info">
          <h4>درباره سایت</h4>
          <p>
            ما این سایت را راه اندازی کرده ایم، چرا که معتقدیم مهم ترین عامل
            موفقیت؛ تغییر نگرش، ایجاد دیدگاه های مثبت و یادگیری مهارت های
            کاربردی است. هدف ما توانمندسازی همه افراد خانواده و به ویژه کودکان و
            نوجوانان است. به آکادمی کارآفرینی ما خوش آمدید.
          </p>
        </div>
        <div className="info list">
          <div className="detail">
            <span class="material-symbols-outlined">location_on</span>
            <span>لورم- لورم ایپسوم- متن ساختگی- لورم- لورم 2</span>
          </div>
          <div className="detail">
            <span class="material-symbols-outlined">phone_iphone</span>
            <span>09157203062</span>
          </div>
          <div className="detail">
            <span class="material-symbols-outlined">mail</span>
            <span>info@drmahbubfalah.com</span>
          </div>
        </div>
        <div className="info">
          <EmailSub />
        </div>
      </div>
    </>
  );
}

function Card({ image }) {
  return (
    <div className="card">
      <img
        className="cardimg"
        src="/photo6427672290-400x400.jpg"
        width="300px"
      />
      <h4>سمینار پرورش قهرمانان کسب و کار</h4>
      <p>
        شما هم به این نتیجه رسیدید که برای ساختن یک آینده متفاوت برای فرزندتون
        یک مسیر متفاوت رو انتخاب کنید؟
      </p>
      <div className="readmore">بیشتر بخوانید</div>
    </div>
  );
}

function SearchBox() {
  return (
    <form class="search-container">
      <input type="text" id="search-bar" placeholder="چی میخوای یاد بگیری؟!" />
      <a href="#">
        <img
          class="search-icon"
          src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
        />
      </a>
    </form>
  );
}

function FeaturesItem({ text, image }) {
  return (
    <div className="fItem">
      <img src={image} />
      <p>{text}</p>
    </div>
  );
}

function MenuItem({ text }) {
  return (
    <li>
      <a>{text}</a>
    </li>
  );
}

function MenuButton({ text, icon, bgcolor, color }) {
  return (
    <button
      className="menuBtn"
      style={{ backgroundColor: bgcolor, color: color }}
    >
      <span className="material-symbols-outlined">{icon}</span>
      <span> {text} </span>
    </button>
  );
}

function EmailSub() {
  return (
    <div className="info">
      <h4>در خبرنامه ما عضو شوید</h4>
      <form action="#">
        <input
          type="text"
          placeholder="ایمیل خود را وارد کنید"
          className="sub"
        />
        <input type="submit" value="اشتراک" className="sub btn" />
      </form>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
