"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";

import ReviewsCard from "./ReviewsCard";

const reviews = [
  {
    review:
      "So impressed by Vior's fresh, high-quality ingredients! Every bite is a taste explosion. Can't wait to try their new menu items. #viorfreshness",
    name: "Aaliyah",
  },
  {
    review:
      "Vior Foods impressed me! Their meals are incredibly flavorful and healthy, using fresh ingredients (big plus!). Delivery was fast and convenient. Perfect for busy folks who still want delicious, nutritious food. Highly recommend!",
    name: "Patrick",
  },
  {
    review:
      "Finally, a food company that gets vegetables right! Vior's plant-based options are delicious and creative. Highly recommend!",
    name: "Halo",
  },
  {
    review:
      "Vior Foods is a lifesaver! Their portion sizes are perfect, and the food is always satisfying. No more boring lunches for me! #viorportionperfect",
    name: "Doris",
  },
  {
    review:
      "Vior Foods delivers! Their meals are incredibly flavorful and healthy. Perfect for busy folks who still want delicious food.",
    name: "Obi",
  },
];

function SwiperContaier() {
  return (
    <div className="py-[4rem] px-3 md:px-20">
      <p className="text-center text-xl lg:text-3xl mb-[3rem] font-semibold text-[#012970] capitalize">
        What are they saying about us
      </p>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerGroup: 3,
            slidesPerView: 3,
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="h-[28rem]"
      >
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx}>
            <ReviewsCard review={review.review} name={review.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperContaier;
