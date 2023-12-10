export default function Contact() {
  return (
    <form>
      <label for="name">نام : </label>
      <input type="text" name="name" />
      <br></br>
      <label for="name">ایمیل : </label>
      <input type="text" name="mail" />
      <br></br>
      <label for="message">پیام شما :</label>
      <br></br>
      <textarea name="message" id="message" cols="30" rows="4"></textarea>
      <br></br>
      <input type="submit" value="ارسال پیام" />
    </form>
  );
}
