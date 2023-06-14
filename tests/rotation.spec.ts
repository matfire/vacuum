import { describe, test, expect } from 'vitest'
import { Vacuum } from "../src/vacuum";

describe("Rotation", () => {
    test("rotate left", () => {
        const vacuum = new Vacuum([2, 4], [0,0], "N")
        vacuum.run("G")
        expect(vacuum.getDirection()).toBe("W")
    })
    test("rotate right", () => {
        const vacuum = new Vacuum([2, 4], [0,0], "N")
        vacuum.run("D")
        expect(vacuum.getDirection()).toBe("E")
    })
})