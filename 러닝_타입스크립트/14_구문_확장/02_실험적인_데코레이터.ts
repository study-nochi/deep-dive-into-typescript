function logOnCall(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  console.log("[logOnCall] I am decorating", target.constructor.name);

  descriptor.value = function (...args: unknown[]) {
    console.log(`[descriptor.value] Calling '${key}' with:`, ...args);
    return original.call(this, ...args);
  };
}

class Greeter {
  @logOnCall
  greet(message: string) {
    console.log(`[greet] Hello, ${message}!`);
  }
}

new Greeter().greet("you");
