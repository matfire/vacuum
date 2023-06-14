import { describe, test, expect } from "vitest";
import { Vacuum } from "../src/vacuum";

describe("Move", () => {
    test("move forward", () => {
        const vacuum = new Vacuum([2, 4], [0,0], "N")
        vacuum.run("A")
        expect(vacuum.getPosition()).toEqual([0,1])
    })
    test("move out of bounds", () => {
        const vacuum = new Vacuum([2, 4], [0,3], "N")
        expect(() => vacuum.run("A")).toThrowError("Out of bounds")
    })
});