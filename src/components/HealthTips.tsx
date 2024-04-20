import HealthAnswer from "./utils/HealthAnswer";

const tips = [
  {
    title: "Why you should eat healthy",
    answer:
      "Eating healthy fuels your body for energy, strengthens bones and muscles, and helps ward off diseases. It keeps you feeling your best inside and out!",
  },
  {
    title: "Why should we be your food plug?",
    answer:
      "Tired of the same old food? Try something new and exciting! We offer unique dishes you won't find elsewhere.",
  },
];

const HealthTips = () => {
  return (
    <div className="px-3 md:px-20 py-[2rem] flex flex-col gap-[1rem]">
      <p className="text-center text-xl lg:text-3xl font-semibold text-[#012970] capitalize">
        Health tips
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem]">
        {tips?.map((tip, idx) => (
          <HealthAnswer key={idx} tip={tip} />
        ))}
      </div>
    </div>
  );
};

export default HealthTips;
