export const Sensors = [
  {
    name: "temperature",
    readDataUrl:
      "https://api.thingspeak.com/channels/1387292/fields/1/last.txt",
    readingFrequenct: 1000,
    threshold: 0.48,
  },
  {
    name: "LDR",
    readDataUrl: "https://api.thingspeak.com/channels/1387292/fields/2/last.txt",
    readingFrequenct: 4000,
    threshold: 0.45,
  },
  {
    name: "rain",
    readDataUrl: "https://api.thingspeak.com/channels/1387292/fields/3/last.txt",
    readingFrequenct: 2000,
    threshold: 0.35,
  },
  {
    name: "moisture",
    readDataUrl: "https://api.thingspeak.com/channels/1387292/fields/4/last.txt",
    readingFrequenct: 3000,
    threshold: 0.4,
  },
];
export const DefaultReadingFrequenct = 1000;
export const DateFormat = "YYYY-MM-DD HH:mm:ss";
