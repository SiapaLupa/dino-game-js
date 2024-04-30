import { FactoryResult, ICactus, IDrawer, IFactory } from "../types";
import Utils from "../utils";

export default class CactusFactory implements IFactory {
  public constructor(
    public model: ICactus,
    public drawer: IDrawer
  ) {}

  public create(count: number): FactoryResult<ICactus, IDrawer> {
    const result: FactoryResult<ICactus, IDrawer> = [];

    for (let index = 0; index < count; index++) {
      const model = Object.assign({}, this.model);
      const drawer = Object.assign({}, this.drawer, { model: model });

      Object.setPrototypeOf(model, Object.getPrototypeOf(this.model));
      Object.setPrototypeOf(drawer, Object.getPrototypeOf(this.drawer));

      model.positionX += index * 500 + Utils.randomIntBetween(0, 3) * 500;

      result.push({
        model,
        drawer,
      });
    }

    return result;
  }
}
