import * as app from "./app";
import * as math from "./math";
//spyOn_restore
jest.mock("./math.js");
test("calls math.add", () => {
    const addMock = jest.spyOn(math, "add");
    // override the implementation
    addMock.mockImplementation(() => "mock");
    expect(app.doAdd(1, 2)).toEqual("mock");
    // restore the original implementation
    addMock.mockRestore();
    addMock.mockImplementation(() => 3);
    expect(app.doAdd(1, 2)).toEqual(3);
});