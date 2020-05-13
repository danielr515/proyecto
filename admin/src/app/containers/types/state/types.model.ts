export interface FullType {
  id: number;
  name: string;
  weakness: Type[];
  resistances: Type[];
}
export interface Type {
  id: number;
  name: string;
}
