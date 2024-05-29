## Dependency injector pattern library

#### How to use

```typescript
@Injectable()
class Foo {
    hello() {
        console.log('Hello')
    }
}

@Injectable()
class Test {
    constructor(private readonly foo: Foo) {}

    test() {
        this.foo.hello()
    }
}

export const testService = Injector.resolve(Test)
```