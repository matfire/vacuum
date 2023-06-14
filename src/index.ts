#! /usr/bin/env node
import { Vacuum } from "./vacuum";
import { Command } from 'commander';
import readline from "readline"
const program = new Command();

program
    .name("vacuum")
    .version("0.0.1")
    .argument("<grid>", "Grid size formatted as x,y")
    .argument("<position>", "Initial position formatted as x,y")
    .argument("<direction>", "Initial direction (N, E, S, W)")
    .action((grid, position, direction) => {
        const vacuum = new Vacuum(grid.split(",").map((e: string) => parseInt(e)), position.split(",").map((e: string) => parseInt(e)), direction)
        const r1 = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        r1.question("Enter instructions: ", (instructions) => {
            vacuum.run(instructions);
            console.log(`x=${vacuum.getPosition()[0]} y=${vacuum.getPosition()[1]} direction=${vacuum.getDirection()}`)
            r1.close()
        })
    })
program.parse(process.argv);