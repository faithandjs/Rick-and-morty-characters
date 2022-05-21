export interface characterProp {
  gender: string;
  id: number;
  image: string;
  location: {
    dimension: string;
    name: string;
  };
  name: string;
  origin: {
    dimension: string;
    name: string;
  };
  species: string;
  status: string;
  type: string;
}
export interface characterPropProp {
  character: characterProp;
}

export enum lifeStatus{
  ALIVE = 'Alive',
  DEAD = 'Dead',
  UNKNOWN = 'unknown',
}