import MenuItem from "./menuItem";

export default function Support() {
  return (
    <div className="support">
      <img src="/advice.png" />
      <div className="help">
        <h3>درخواست مشاوره</h3>
        <p>
          برای کسب اطلاعات بیشتر درباره این محصول درخواست مشاوره خود را ارسال
          کنید و یا با ما در تماس باشید.
        </p>
        <MenuItem
          text="درخواست مشاوره"
          icon=""
          bgcolor="#FFD001"
          color="black"
          isBtn={true}
        />
      </div>
    </div>
  );
}
