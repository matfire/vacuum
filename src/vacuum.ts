import { direction, rotationSides } from "./types";
import {allowedCommands} from "./config.json"
export class Vacuum {
  private grid: { x: number; y: number };
  private position: number[];
  private direction: direction;
  constructor(grid: number[], position: number[], direction: direction) {
    this.grid = { x: grid[0], y: grid[1] };
    this.position = position;
    this.direction = direction;
  }

  private rotate(side: rotationSides) {
    const directions = ["N", "E", "S", "W"];
    const currentDirectionIndex = directions.indexOf(this.direction);
    let newDirectionIndex =
      side === "G" ? currentDirectionIndex - 1 : currentDirectionIndex + 1;
      if (newDirectionIndex === -1) {
        newDirectionIndex = directions.length - 1;
      }
    const newDirection = directions[newDirectionIndex % 4];
    this.direction = newDirection as direction;
  }

  private move() {
    switch (this.direction) {
      case "N": {
        if (this.position[1] + 1 >= this.grid.y) throw new Error("Out of bounds");
        this.position[1] += 1;
        break;
      }
      case "E": {
        if (this.position[0] + 1 >= this.grid.x) throw new Error("Out of bounds");
        this.position[0] += 1;
        break;
      }
      case "S": {
        if (this.position[1] - 1 < 0) throw new Error("Out of bounds");
        this.position[1] -= 1;
        break;
      }
      case "W": {
        if (this.position[0] - 1 < 0) throw new Error("Out of bounds");
        this.position[0] -= 1;
        break;
      }
    }
  }

  getDirection() {
    return this.direction;
  }

  getPosition() {
    return this.position;
  }

  run(instructions: string) {
    const invalidInstruction = instructions
      .split("")
      .find((instruction) => !allowedCommands.includes(instruction));
    if (invalidInstruction) {
      throw new Error(`Invalid instruction: ${invalidInstruction}`);
    }
    instructions.split("").forEach((instruction) => {
      switch (instruction) {
        case "A":
          this.move();
          break;
        default:
          this.rotate(instruction as rotationSides);
      }
    });
  }
}
