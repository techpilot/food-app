import Image from "next/image";
import avatar from "@/assets/images/avatar.png";
import rating_icon from "@/assets/svgs/rating-icon.svg";

interface ReviewsCardProps {
  name?: string;
  review: string;
}

const ReviewsCard: React.FC<ReviewsCardProps> = ({ name, review }) => {
  return (
    <div
      className="h-[100%] w-[100%] bg-white rounded-md shadow-lg flex flex-col items-center 
    justify-around gap-4 p-5"
    >
      <div className="flex items-center">
        <Image src={rating_icon} alt="" className="w-7" />
        <Image src={rating_icon} alt="" className="w-7" />
        <Image src={rating_icon} alt="" className="w-7" />
        <Image src={rating_icon} alt="" className="w-7" />
        <Image src={rating_icon} alt="" className="w-7" />
      </div>
      <p className="text-sm lg:text-base font-medium text-[#5e5e5e] text-center">
        {review}
      </p>

      <div className="flex flex-col gap-2 items-center">
        <Image src={avatar} alt="" className="h-[7rem] w-[7rem] rounded-full" />
        <p className="font-semibold text-base lg:text-lg">{name}</p>
      </div>
    </div>
  );
};

export default ReviewsCard;
