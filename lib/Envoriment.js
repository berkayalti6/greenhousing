export const Sensors = [
  {
    name: "Sıcaklık",
    readDataUrl:
      "https://api.thingspeak.com/channels/1387292/fields/1/last.txt",
    readingFrequenct: 1000,
    threshold: 0.48,
  },
  {
    name: "Nem",
    readDataUrl: "https://api.thingspeak.com/channels/1387322/fields/1/last.txt",
    readingFrequenct: 4000,
    threshold: 0.45,
  },
  {
    name: "Yagmur",
    readDataUrl: "https://api.thingspeak.com/channels/1387323/fields/1/last.txt",
    readingFrequenct: 2000,
    threshold: 0.35,
  },
  {
    name: "Isık",
    readDataUrl: "https://api.thingspeak.com/channels/1387324/fields/1/last.txt",
    readingFrequenct: 3000,
    threshold: 0.4,
  },
];
export const DefaultReadingFrequenct = 1000;
export const DateFormat = "YYYY-MM-DD HH:mm:ss";
