import Poster from "../Components/poster";
import Cards from "../Components/cards";
import Support from "../Components/support";
import Card from "../Components/card";

export default function Body() {
  return (
    <div className="body">
      <Poster myClass="home" isHome={true} />
      <Cards
        title="کارگاه ها و رویدادها"
        des="اینجا شروع مسیر تربیت کودکان موفق شماست!"
        seemore="بیشتر بخوانید"
      >
        <Card
          image="/photo6427672290-400x400.jpg"
          title="سمینار پرورش قهرمانان کسب و کار"
          description="شما هم به این نتیجه رسیدید که برای ساختن یک آینده متفاوت برای فرزندتون یک مسیر متفاوت رو انتخاب کنید؟"
          btn="بیشتر بخوانید"
        />
        <Card
          image="/photo6427672290-400x400.jpg"
          title="سمینار پرورش قهرمانان کسب و کار"
          description="شما هم به این نتیجه رسیدید که برای ساختن یک آینده متفاوت برای فرزندتون یک مسیر متفاوت رو انتخاب کنید؟"
          btn="بیشتر بخوانید"
        />
        <Card
          image="/photo6427672290-400x400.jpg"
          title="سمینار پرورش قهرمانان کسب و کار"
          description="شما هم به این نتیجه رسیدید که برای ساختن یک آینده متفاوت برای فرزندتون یک مسیر متفاوت رو انتخاب کنید؟"
          btn="بیشتر بخوانید"
        />
      </Cards>
      <Support />
      <Cards
        title="فروشگاه"
        des="محصولات آموزشی برای شما و کودکان شما"
        seemore="بیشتر بخوانید"
      >
        <Card
          image="/photo6427672290-400x400.jpg"
          title="سمینار پرورش قهرمانان کسب و کار"
          description="شما هم به این نتیجه رسیدید که برای ساختن یک آینده متفاوت برای فرزندتون یک مسیر متفاوت رو انتخاب کنید؟"
          btn="بیشتر بخوانید"
        />
        <Card
          image="/photo6427672290-400x400.jpg"
          title="سمینار پرورش قهرمانان کسب و کار"
          description="شما هم به این نتیجه رسیدید که برای ساختن یک آینده متفاوت برای فرزندتون یک مسیر متفاوت رو انتخاب کنید؟"
          btn="بیشتر بخوانید"
        />
        <Card
          image="/photo6427672290-400x400.jpg"
          title="سمینار پرورش قهرمانان کسب و کار"
          description="شما هم به این نتیجه رسیدید که برای ساختن یک آینده متفاوت برای فرزندتون یک مسیر متفاوت رو انتخاب کنید؟"
          btn="بیشتر بخوانید"
        />
      </Cards>
    </div>
  );
}