import React from "react";

const OfficeClock = ({ remainingTime }) => {
  const officeTimeZones = {
    London: -5,
    NewYork: -4,
    SaltLakeCity: -6,
  };

  const getDayNumberSuffix = (day) => {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const dateformat =
    new Date().toLocaleString("en-US", { weekday: "long" }) +
    "," +
    new Date().toLocaleString("default", { month: "long" }) +
    "." +
    new Date().getDate()+
    getDayNumberSuffix(new Date().getDate());;

  const strTime = new Date().getHours() >= 12 ? " PM" : " AM";

  const getLocalTime = (timezoneOffset) => {
    const today = new Date();
    const remainingMilliseconds = remainingTime * 1000;
    const targetTime = new Date(today.getTime() + remainingMilliseconds);
    const targetTimeInOfficeTimeZone = new Date(
      targetTime.getTime() + timezoneOffset * 3600000
    );

    const localHours = targetTimeInOfficeTimeZone.getHours();
    const localMinutes = targetTimeInOfficeTimeZone.getMinutes();

    return `${localHours.toString().padStart(2, "0")}:${localMinutes
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="office-clock">
      <div className="office-clock-est">
      <small>Est. Deployment Time :</small>
        </div>
        <ul>
      <div>

        London:&nbsp;{" "}
        {dateformat + " @ " + getLocalTime(officeTimeZones.London) + strTime}
      </div>
      <div>
        New York:&nbsp;{" "}
        {dateformat + " @ " + getLocalTime(officeTimeZones.NewYork) + strTime}
      </div>
      <div>
        Salt Lake City:{" "}
        {dateformat +
          " @ " +
          getLocalTime(officeTimeZones.SaltLakeCity) +
          strTime}
      </div>
      </ul>
    </div>
  );
};

export default OfficeClock;
