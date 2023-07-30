import { describe, expect, test } from '@jest/globals';
import { RobotArachnid } from '../../classes/robots/robot-arachnid';

// Mk1 Robot Integration Tests

describe('Test chamber scenario 1: (0,0,FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF)', () => {
    test(`Output should be the robot has moved to (-1, 21)`, () => {
        const robot = new RobotArachnid(0, 0, 'FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF');
        robot.execute();

        expect(robot.getCoordinates().x).toBe(-1);
        expect(robot.getCoordinates().y).toBe(21);
    });
});

describe('Test chamber scenario 2: (3,6,FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF)', () => {
    test(`Output should be the robot has moved to (4, 19)`, () => {
        const robot = new RobotArachnid(3, 6, 'FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF');
        robot.execute();

        expect(robot.getCoordinates().x).toBe(4);
        expect(robot.getCoordinates().y).toBe(19);
    });
});

describe('Test chamber scenario 3: (0,7,RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR)', () => {
    test(`Output should be the robot has moved to (3, 15)`, () => {
        const robot = new RobotArachnid(0, 7, 'RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR');
        robot.execute();

        expect(robot.getCoordinates().x).toBe(3);
        expect(robot.getCoordinates().y).toBe(15);
    });
});
