import * as app from "./app";
import * as math from "./math";
//jest.spyOn
jest.mock("./math.js");
test("calls math.add", () => {
    const addMock = jest.spyOn(math, "add");
    addMock.mockImplementation(() => 3);
    // calls the original implementation
    expect(app.doAdd(1, 2)).toEqual(3);
    // and the spy stores the calls to add
    expect(addMock).toHaveBeenCalledWith(1, 2);
});