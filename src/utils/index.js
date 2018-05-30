// this will help us autobind class methods

export default function autoBind(classComponent) {
  // this returns an array of methods off class componenents protoype
  const classMethods = Object.getOwnPropertyNames(classComponent.prototype);
  classMethods.forEach((method) => {
    if (method.startsWith('handle')) {
      this[method] = this[method].bind(this);
    }
  });
}
