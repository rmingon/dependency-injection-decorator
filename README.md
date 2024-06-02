## Dependency injector pattern library

#### Install library

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

### How to test

```typescript
@Injectable()
class Foo {

    mockedFunction() {
        return false
    }
}

@Injectable()
class Test {
    constructor(private readonly foo: Foo) {}

    testInjection() {
        return this.foo.mockedFunction()
    }
}

const FooMock = {
    mockedFunction: jest.fn(() => true)
}

describe("Should test injection pattern", () => {

    let useTest: Test;

    beforeEach(() => {
        Injector.container.clear()
        Injector.mock("Foo", FooMock)
        useTest = Injector.resolve(Test)
        jest.clearAllMocks()
    })
    
    it("Should Test class exist", () => {
        expect(useTest).toBeTruthy()
    })

    it("Should call mocked function inject via dependency", () => {
        useTest.testInjection()
        expect(FooMock.mockedFunction).toHaveBeenCalled()
    })
})
```

### You can now use injection pattern