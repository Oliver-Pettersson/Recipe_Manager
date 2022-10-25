import {ACCESS_TOKEN, REFRESH_TOKEN} from "../../config/constants/Cookies";

type CookieType = typeof ACCESS_TOKEN | typeof REFRESH_TOKEN;

export default CookieType;