import "reflect-metadata";

interface Type<T> {
  new (...args: any[]): T;
}

export function Injectable() {
  return function <T>(target: Type<T>) {
    Reflect.getMetadata("design:paramtypes", target);
  };
}