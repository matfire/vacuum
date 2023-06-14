import { describe, expect, test } from "vitest";
import { Vacuum } from "../src/vacuum";

describe("Complete run", () => {
    test("moves multiple times forward", () => {
        const vacuum = new Vacuum([2, 4], [0,0], "N")
        vacuum.run("AA")
        expect(vacuum.getPosition()).toEqual([0,2])
    })
    test("moves multiple times forward and rotates", () => {
        const vacuum = new Vacuum([2, 4], [0,0], "N")
        vacuum.run("AAG")
        expect(vacuum.getPosition()).toEqual([0,2])
        expect(vacuum.getDirection()).toBe("W")
    })

    test("moves, rotates and moves in different direction", () => {
        const vacuum = new Vacuum([2, 4], [0,0], "N")
        vacuum.run("AADA")
        expect(vacuum.getPosition()).toEqual([1,2])
        expect(vacuum.getDirection()).toBe("E")
    })
})