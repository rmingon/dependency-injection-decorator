import { Injectable, Injector } from '../index'

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

    beforeAll(() => {
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