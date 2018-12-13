export const timeout = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

export function validateOrderAction(
  _target: any,
  _propertyName: string,
  descriptor: TypedPropertyDescriptor<Function>
) {
  const method = descriptor.value;

  descriptor.value = function() {
    if (arguments[0].version != this.version) {
      throw new Error("not sure what to do here");
    }
    if (arguments[0].aggregate_id != this.aggregate_id) {
      return;
    }
    this.version++;
    return method.apply(this, arguments);
  };
}
