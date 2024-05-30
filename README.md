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

const testService = Injector.resolve(Test)
testService.test()
'Hello'
```

### You can now use injection pattern