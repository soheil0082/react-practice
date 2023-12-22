import SearchBox from "./searchBox";
import FeaturesItem from "./featuresItem";

export default function Poster({ title, myClass, isHome }) {
  return (
    <div className={"poster " + myClass}>
      {isHome ? (
        <>
          <h1>آکادمی آموزش مهارت های کارآفرینی و کسب و کار دکتر محبوبه فلاح</h1>
          <p>
            آموزش‌های کاربردی حرفه ای کارآفرینی، کسب و کار، موفقیت و رشد فردی
            برای خانواده
          </p>
          <SearchBox />
          <div className="features">
            <FeaturesItem
              text="برگزاری دوره های آنلاین"
              image="/questionnaire.png"
            />
            <FeaturesItem
              text="برگزاری دوره های حضوری"
              image="/presentation.png"
            />
            <FeaturesItem
              text="برگزاری دوره های دانشگاهی"
              image="/student1.png"
            />
          </div>
        </>
      ) : (
        <h2>{title}</h2>
      )}
    </div>
  );
}
