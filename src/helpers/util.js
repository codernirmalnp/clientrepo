import moment from "moment";
import { each, find } from "lodash";
import { defaultCurrency } from "../configs/constant";

export const formatCurrency = (value) => {
  let sym = defaultCurrency.symbol || "";
  let pos = defaultCurrency.symbolPosition || "after";
  let val = value ? numberWithCommas(value) : "0";
  if (pos === "before") {
    return `${sym} ${val}`;
  } else {
    return `${val} ${sym}`;
  }
};

export const parseMessage = (message) => {
  var text = "";
  if (typeof message == "object") {
    for (let key in message) {
      if (Array.isArray(message[key])) {
        // eslint-disable-next-line no-loop-func
        message[key].forEach((elem) => {
          text += elem;
        });
      } else if (typeof message[key] == "string") {
        text += message[key];
      } else {
        text += JSON.stringify(message[key]);
      }
    }
  } else if (typeof message == "string") {
    text = message;
  } else {
    text += JSON.stringify(message);
  }
  return text;
};

export const getDiffDate = (d1, d2) => {
  var duration = moment.duration(d1.diff(d2));
  var hours = parseInt(duration.asHours());
  var minutes = parseInt(duration.asMinutes()) - hours * 60;
  var seconds = parseInt(duration.asSeconds()) - minutes * 60 - hours * 3600;
  return (
    (hours < 10 ? "0" : "") +
    hours +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds
  );
};

export const generateSlug = (text) => {
  var slug = "";
  if (text) {
    slug = text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^\w-]+/g, "") // Remove all non-word chars
      .replace(/--+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, ""); // Trim - from end of text
  }
  return slug;
};

export const bytesToHuman = (bytes) => {
  let units = ["B", "KB", "MB", "GB", "TB", "PB"];
  let i = 0;
  for (i = 0; bytes >= 1024; i++) {
    bytes /= 1024;
  }
  return Math.round(bytes, 2) + " " + units[`${i}`];
};

export const countryToFlag = (isoCode) => {
  return typeof String.fromCodePoint !== "undefined"
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
};

export const getWeekDayList = () => {
  let arr = [
    { name: "Sunday", id: "sunday" },
    { name: "Monday", id: "monday" },
    { name: "Tuesday", id: "tuesday" },
    { name: "Wednesday", id: "wednesday" },
    { name: "Thursday", id: "thursday" },
    { name: "Friday", id: "friday" },
    { name: "Saturday", id: "saturday" },
  ];
  return arr;
};

export const getOpeningDay = () => {
  let arr = [];
  for (var i = 1; i <= 7; i++) {
    var opening = {
      day: "",
      status: 0,
      openingTime: "",
      closingTime: "",
    };
    switch (i) {
      case 1:
        opening.day = "sunday";
        break;
      case 2:
        opening.day = "monday";
        break;
      case 3:
        opening.day = "tuesday";
        break;
      case 4:
        opening.day = "wednesday";
        break;
      case 5:
        opening.day = "thursday";
        break;
      case 6:
        opening.day = "friday";
        break;
      case 7:
        opening.day = "saturday";
        break;
      default:
        break;
    }
    arr.push(opening);
  }
  return arr;
};

export const getMonthlyAnchorList = () => {
  let arr = [];
  for (var i = 1; i < 31; i++) {
    arr.push({ name: `${ordinalSuffix(i)}`, id: i });
  }
  return arr;
};

export const getDelayDayList = () => {
  let arr = [];
  for (var i = 7; i < 31; i++) {
    arr.push({ name: `${i} days`, id: i });
  }
  return arr;
};

export const generateDuration = () => {
  var x = 5; //minutes interval
  var times = []; // time array
  var tt = 0; // start time
  //loop to increment the time and push results in array
  for (var i = 0; tt < 24 * 60; i++) {
    var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
    var mm = tt % 60; // getting minutes of the hour in 0-55 format
    times[i] = {
      id: ("0" + hh).slice(-2) + ":" + ("0" + mm).slice(-2) + ":00",
      name: hh > 0 ? hh + "h " + (mm > 0 ? mm + "min" : "") : mm + "min",
    };
    tt = tt + x;
  }
  return times;
};

export const getMonthList = () => {
  let arr = [
    { name: "January", value: "01" },
    { name: "Feburary", value: "02" },
    { name: "March", value: "03" },
    { name: "April", value: "04" },
    { name: "May", value: "05" },
    { name: "June", value: "06" },
    { name: "July", value: "07" },
    { name: "August", value: "08" },
    { name: "September", value: "09" },
    { name: "October", value: "10" },
    { name: "November", value: "11" },
    { name: "December", value: "12" },
  ];
  return arr;
};

export const getYearList = () => {
  let arr = [
    { name: "2020", value: "2020" },
    { name: "2021", value: "2021" },
    { name: "2022", value: "2022" },
    { name: "2023", value: "2023" },
    { name: "2024", value: "2024" },
    { name: "2025", value: "2025" },
    { name: "2026", value: "2026" },
    { name: "2027", value: "2027" },
    { name: "2028", value: "2028" },
    { name: "2029", value: "2029" },
    { name: "2030", value: "2030" },
  ];
  return arr;
};

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

export const ordinalSuffix = (i) => {
  var j = i % 10,
    k = i % 100;
  if (j === 1 && k !== 11) {
    return i + "st";
  }
  if (j === 2 && k !== 12) {
    return i + "nd";
  }
  if (j === 3 && k !== 13) {
    return i + "rd";
  }
  return i + "th";
};

export const checkPermission = (module, section, action, permission) => {
  if (
    permission
      ?.find((item) => item.key === module)
      ?.section?.find((value) => value.key === section)
      ?.action?.find((data) => data.key === action)?.value
  ) {
    return true;
  }
  return false;
};

export const intersection = (a, b) => {
  return a.filter((element) => b.some((x) => x.productId === element));
};

export const union = (a, b) => {
  return [...a, ...not(b, a)];
};

export const not = (a, b) => {
  return a
    .filter((value) => b.indexOf(value.productId) === -1)
    .map(function (value) {
      return value.productId;
    });
};

export const extractValue = (arr, prop) => {
  // extract value from property
  let extractedValue = arr.map((item) => item[prop]);

  return extractedValue;
};

export const getPermission = (_module, _section, _actions, permission) => {
  const result = {};
  let sectionGranted;
  let actionGranted;
  const moduleGranted = find(permission, (module) => {
    return module.key.toLocaleLowerCase() === _module.toLocaleLowerCase();
  });
  if (moduleGranted) {
    sectionGranted = find(moduleGranted.section, (section) => {
      return section.key.toLocaleLowerCase() === _section.toLocaleLowerCase();
    });
  }
  if (sectionGranted) {
    each(_actions, (_action) => {
      actionGranted = find(sectionGranted.action, (action) => {
        return action.key.toLocaleLowerCase() === _action.toLocaleLowerCase();
      });
      if (actionGranted) {
        result[actionGranted.key] = actionGranted.value;
      }
    });
  }
  return result;
};
