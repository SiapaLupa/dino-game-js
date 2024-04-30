import { ColorDrawable, IGround } from "../types";

export default class Ground implements IGround, ColorDrawable {
  public constructor(
    public positionX: number,
    public positionY: number,
    public width: number,
    public height: number,
    public color: string,
    public gravitationalAcceleration: number = 0
  ) {}
}
