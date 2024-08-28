import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faSun } from "@fortawesome/free-solid-svg-icons";

const InfoCard = ({ icon, color, label, value }) => {
  const bgColor = `${color}-100`;
  const textColor = `${color}-800`;
  const iconColor = `${color}-600`;
  return (
    <div
      className={`flex items-center gap-6 bg-${bgColor} p-6 rounded-xl shadow-lg border border-${color}-300`}
    >
      <FontAwesomeIcon
        className={`text-[60px] text-${iconColor}`}
        icon={icon}
      />
      <div className={`text-${textColor}`}>
        <p className="text-[18px] font-medium mb-1">{label}</p>
        <p className="text-[22px] font-semibold">{value}</p>
      </div>
    </div>
  );
};

const Info = () => {
  const data = useSelector((state) => state.searchData);

  if (!data || !data.current || !data.forecast) {
    return (
      <Container>
        <div className="w-full max-w-[800px] mx-auto my-8 p-6 bg-white rounded-xl shadow-lg text-center">
          <p className="text-gray-500">Loading data...</p>
        </div>
      </Container>
    );
  }

  const { humidity, uv } = data.current;
  const { sunrise, sunset } = data.forecast.forecastday[0].astro;

  return (
    <Container>
      <div className="w-full max-w-[900px] mx-auto my-8 p-6 bg-white rounded-xl shadow-lg flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-6">
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <InfoCard
            icon={faDroplet}
            color="blue"
            label="Humidity"
            value={`${humidity}%`}
          />
          <InfoCard
            icon={faSun}
            color="yellow"
            label="UV Index"
            value={`${uv} out of 10`}
          />
        </div>

        <div className="w-full lg:w-[1px] bg-gray-300 my-6 lg:my-0 lg:mx-4"></div>

        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <InfoCard
            icon={faSun}
            color="yellow"
            label="Sunrise"
            value={sunrise}
          />
          <InfoCard icon={faSun} color="orange" label="Sunset" value={sunset} />
        </div>
      </div>
    </Container>
  );
};

export default Info;
