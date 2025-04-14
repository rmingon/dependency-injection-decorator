# Dependency Injection Decorator

A lightweight, decorator-based Dependency Injection (DI) framework for TypeScript. Designed with simplicity and flexibility in mind, this library helps manage dependencies using TypeScript decorators—making your code cleaner, more testable, and aligned with SOLID principles.

## ✨ Features

- ⚙️ **Decorator-Based API** – Use `@Injectable` and `@Inject` to wire dependencies effortlessly.
- 📦 **Manual Dependency Resolution** – Explicitly resolve services using `Injector.resolve`.
- 🧪 **Testing Friendly** – Easily mock services for unit testing with tools like Jest.
- 💡 **Minimal & Lightweight** – No external dependencies, easy to integrate.

---

## Installation

Install the package via npm:

```bash
npm install dependency-injector-pattern
```

---

## Usage

### 1. Mark classes as injectable

```ts
import { Injectable, Injector } from 'dependency-injector-pattern';

@Injectable()
class Foo {
  hello() {
    console.log('Hello from Foo');
  }
}
```

### 2. Inject dependencies via constructor

```ts
@Injectable()
class Test {
  constructor(private readonly foo: Foo) {}

  test() {
    this.foo.hello();
  }
}
```

### 3. Resolve and use

```ts
const testService = Injector.resolve(Test);
testService.test(); // Outputs: Hello from Foo
```

---

## Testing Example

Easily mock dependencies for unit tests:

```ts
const FooMock = {
  hello: jest.fn(() => 'mocked'),
};

describe('Test Injection', () => {
  it('should use mocked Foo service', () => {
    const testService = Injector.resolve(Test, { Foo: FooMock });
    expect(testService.testInjection()).toBe('mocked');
  });
});
```

---

## Project Structure

```
├── src/
│   ├── decorators/
│   │   ├── injectable.ts
│   │   └── inject.ts
│   ├── injector.ts
│   └── index.ts
└── test/
    └── injector.spec.ts
```

---

## Notes

Make sure `emitDecoratorMetadata` and `experimentalDecorators` are enabled in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

---

## Contributing

Feel free to fork the repo, submit issues, or open PRs. Contributions are welcome!
