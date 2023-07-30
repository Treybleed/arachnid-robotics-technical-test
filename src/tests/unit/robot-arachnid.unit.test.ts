import { describe, expect, test } from '@jest/globals';
import { RobotArachnid } from '../../classes/robots/robot-arachnid';

// Mk1 Robot Unit Tests

// Apply force function tests

describe('Mk1 Robot Apply force function', () => {
    test(`Output should be 5 (0 + 5)`, () => {
        const robot = new RobotArachnid(0, 0);
        expect(robot.applyForce(0, 5)).toBe(5);
    });
});

describe('Mk1 Robot Apply force function', () => {
    test(`Output should be -2 (2 - 4)`, () => {
        const robot = new RobotArachnid(0, 0);
        expect(robot.applyForce(2, -4)).toBe(-2);
    });
});

// Move function tests

describe('Mk1 Robot Move function', () => {
    test(`Output should be that both the robots x and y values increase and decrease with valid directions`, () => {
        const robot = new RobotArachnid(0, 0);
        robot.move('F');
        expect(robot.getCoordinates().y).toBe(1);

        robot.move('B');
        expect(robot.getCoordinates().y).toBe(0);

        robot.move('L');
        expect(robot.getCoordinates().x).toBe(-1);

        robot.move('R');
        expect(robot.getCoordinates().x).toBe(0);
    });
});

describe('Mk1 Robot Move function', () => {
    test(`Output should be that nothing changes with invalid directions`, () => {
        const robot = new RobotArachnid(5, 3);

        robot.move('W');
        expect(robot.getCoordinates().x).toBe(5);
        expect(robot.getCoordinates().y).toBe(3);

        robot.move('');
        expect(robot.getCoordinates().x).toBe(5);
        expect(robot.getCoordinates().y).toBe(3);
    });
});
