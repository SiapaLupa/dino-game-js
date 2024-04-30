export interface ColorDrawable {
  color: string;
}
export interface ImageDrawable {
  image: HTMLImageElement;
}

export interface IDrawer {
  draw(context: CanvasRenderingContext2D): void;
}

export type FactoryResult<E extends Entity, D extends IDrawer> = {
  model: E;
  drawer: D;
}[];

export interface IFactory {
  model: Entity;
  drawer: IDrawer;
  create(count: number): FactoryResult<Entity, IDrawer>;
}

export interface Entity {
  positionX: number;
  positionY: number;
  width: number;
  height: number;
  gravitationalAcceleration: number;
}
export interface MoveableEntity {
  move(): void;
}
export interface JumpAbility {
  isJumping(): boolean;
  jump(): void;
  land(): void
}

export interface IPlayer extends Entity, MoveableEntity, JumpAbility {
}

export interface ICactus extends Entity, MoveableEntity {}

export interface IGround extends Entity {}
