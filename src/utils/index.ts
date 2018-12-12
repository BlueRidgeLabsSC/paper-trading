export const timeout = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

export function ownAction(
  _target: any,
  _propertyName: string,
  descriptor: TypedPropertyDescriptor<Function>
) {
  const method = descriptor.value;

  descriptor.value = function() {
    if (arguments[0].aggregate_id != this.aggregate_id) {
      return;
    }
    this.version++;
    return method.apply(this, arguments);
  };
}

