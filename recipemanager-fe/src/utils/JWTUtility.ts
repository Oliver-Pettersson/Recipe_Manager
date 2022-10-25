import B64Utility from "./B64Utility";

export const JWT_NO_EXP_CLAIM =
  "No expiration claim found inside the token-payload";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const decodePayload = (jwt: string): any => {
    const encodedPayload = jwt.split(".")[1];
    return JSON.parse(B64Utility.decode(encodedPayload));
  }

  const getExpirationDate =(jwt: string): Date => {
    const payload = decodePayload(jwt);
    if (!payload.exp) {
      throw new Error(JWT_NO_EXP_CLAIM);
    }
    return new Date(payload.exp * 1000);
  }

const checkIfIsExpired = (jwt: string): boolean => {
  return getExpirationDate(jwt).getTime() < Date.now();
}

const JWTUtility = {
  checkIfIsExpired,
  getExpirationDate,
  decodePayload
};

export default JWTUtility;
