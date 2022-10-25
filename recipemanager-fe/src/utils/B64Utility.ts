import { Buffer } from 'buffer';

class B64Utility {

  /**
   * Encode a string as a base64 string
   */
  public static encode(value: string): string {
    return Buffer.from(value).toString("base64");
  }

  /**
   * Decode a base64 string to a human-readable string
   */
  public static decode(value: string): string {
    return Buffer.from(value, "base64").toString();
  }
}

export default B64Utility;
