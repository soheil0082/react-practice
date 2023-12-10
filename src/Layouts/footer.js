import EmailSub from "../Components/emailSub";

export default function Footer() {
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
