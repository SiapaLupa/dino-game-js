export default class Utils {
  public static randomIntBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
