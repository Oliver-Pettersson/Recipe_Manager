import { getCookie, removeCookie, setCookie } from "typescript-cookie";
import { CookieAttributes } from "typescript-cookie/dist/types";
import CookieType from "../models/Cookies";

/**
 * CookieUtility is a wrapper class that can be used to interact with cookies.
 */
class CookieUtility {
  private static readonly defaultOptions: CookieAttributes = {
    secure: process.env.NEXT_PUBLIC_USE_HTTPS === "true",
    sameSite: "strict",
  };

  private static combineOptions(options?: CookieAttributes): CookieAttributes {
    return {
      ...CookieUtility.defaultOptions,
      ...options,
    };
  }

  public static set(name: CookieType, value: string, options?: CookieAttributes) {
    setCookie(name, value, this.combineOptions(options));
  }

  public static get(name: CookieType): string | undefined {
    return getCookie(name);
  }

  public static remove(name: CookieType) {
    removeCookie(name);
  }
}

export default CookieUtility;
