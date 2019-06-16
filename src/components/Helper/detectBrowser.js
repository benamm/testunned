import { detect } from 'detect-browser';

const browser = detect();
export const DetectBrowser = () => {
  if (browser) {
    return {
      BN: browser.name,
      BV: browser.version,
      UOS: browser.os
    }
  }
}

export const DetectUserPlatform = () => {
  let OSName = 'Unknown OS';
  if (navigator.userAgent.indexOf("Win") !== -1) OSName = "Windows";
  if (navigator.userAgent.indexOf("Mac") !== -1) OSName = "Macintosh";
  if (navigator.userAgent.indexOf("Linux") !== -1) OSName = "Linux";
  if (navigator.userAgent.indexOf("Android") !== -1) OSName = "Android";
  if (navigator.userAgent.indexOf("like Mac") !== -1) OSName = "iOS";
  return OSName;
}

const getBrowserType = DetectBrowser();
const browserName = getBrowserType.BN;
const browserVersion = getBrowserType.BV;
const userOs = getBrowserType.UOS;

const DetectPlatform = DetectUserPlatform();

export const userPlatformType = () => {
  switch (DetectPlatform) {
    case "Android":
      return 1
    case "iOS":
      return 2
    case "Windows" || "Macintosh" || "Linux":
      return 3
    default:
      return 0
  }
}

const platformType = userPlatformType();

export const DetectUserDevice = () => {
  return {
    platformType,
    browserName,
    browserVersion,
    userOs,
  }
}

export const userDeviceInfo = {
  pl: DetectUserDevice().platformType,
  bl: parseInt(DetectUserDevice().browserVersion),
  di: 'null',
  dn: DetectUserDevice().userOs,
  os: 'null'
}