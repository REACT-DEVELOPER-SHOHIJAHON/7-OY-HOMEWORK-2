import { useSelector } from "react-redux";
import { Container } from "../../utils";

const Banner = () => {
  const data = useSelector((state) => state.searchData);

  if (!data || !data.current || !data.location) {
    return <p></p>;
  }

  const {
    current: { condition, temp_c },
    location: { country, region, localtime },
  } = data;

  const formattedDate = new Date(localtime).toLocaleDateString("en-US", {
    weekday: "long",
  });

  return (
    <Container>
      <div className="bg-banner bg-cover bg-center rounded-[30px] h-[500px] mt-[60px] overflow-hidden shadow-lg">
        <div className="bg-gradient-to-t from-black/60 to-transparent w-full h-full flex justify-between items-end p-10">
          <div className="text-left space-y-4">
            <img
              src={condition.icon}
              alt="Weather Icon"
              className="w-[80px] h-[80px]"
            />
            <p className="text-[140px] text-white leading-none">{temp_c}°</p>
            <h1 className="text-[28px] text-white font-semibold">
              {country}, {region}
            </h1>
          </div>

          <div className="text-right space-y-2">
            <div className="flex gap-4 items-center">
              <p className="text-[28px] text-white font-medium">
                {condition.text},
              </p>
              <p className="text-[28px] text-white font-medium">
                {formattedDate}
              </p>
            </div>
            <p className="text-[28px] text-white font-medium">{localtime}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
