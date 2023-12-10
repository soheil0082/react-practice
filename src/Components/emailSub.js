export default function EmailSub() {
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
