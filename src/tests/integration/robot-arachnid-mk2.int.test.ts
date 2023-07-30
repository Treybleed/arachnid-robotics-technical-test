import { describe, expect, test } from '@jest/globals';
import { RobotArachnidMk2 } from '../../classes/robots/robot-arachnid-mk2';

// Mk2 Robot Integration Tests

describe('Test chamber scenario 1: (0,0,FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF)', () => {
    test(`Output should be the robot has moved to (0, 0)`, () => {
        const robot = new RobotArachnidMk2(0, 0, 'FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF');
        robot.execute();

        expect(robot.getCoordinates().x).toBe(0);
        expect(robot.getCoordinates().y).toBe(0);
    });
});

describe('Test chamber scenario 2: (3,6,FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF)', () => {
    test(`Output should be the robot has moved to (3, 14)`, () => {
        const robot = new RobotArachnidMk2(3, 6, 'FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF');
        robot.execute();

        expect(robot.getCoordinates().x).toBe(3);
        expect(robot.getCoordinates().y).toBe(14);
    });
});

describe('Test chamber scenario 3: (0,7,RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR)', () => {
    test(`Output should be the robot has moved to (2, 18)`, () => {
        const robot = new RobotArachnidMk2(0, 7, 'RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR');
        robot.execute();

        expect(robot.getCoordinates().x).toBe(2);
        expect(robot.getCoordinates().y).toBe(18);
    });
});
