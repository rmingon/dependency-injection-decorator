## Dependency injector pattern library

#### INSTALL THE LIB

```bash
npm i dependency-injector-pattern
```

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