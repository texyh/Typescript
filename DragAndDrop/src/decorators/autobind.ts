export function AutoBind(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjustDesc: PropertyDescriptor = {
    configurable: true,
    get() {
      const func = originalMethod.bind(this);
      return func;
    },
  };

  return adjustDesc;
}
