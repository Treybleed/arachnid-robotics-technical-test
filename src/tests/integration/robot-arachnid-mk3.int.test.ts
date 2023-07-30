import { describe, expect, test } from '@jest/globals';
import { RobotArachnidMk3 } from '../../classes/robots/robot-arachnid-mk3';

// Mk3 Robot Integration Tests

describe('Test chamber scenario 1: (0,0,FFFFFF3FLFFFFFFR5FL)', () => {
    test(`Output should be the robot has moved to (-6, 14)`, () => {
        const robot = new RobotArachnidMk3(0, 0, 'FFFFFF3FLFFFFFFR5FL');
        robot.execute();

        expect(robot.getCoordinates().x).toBe(-6);
        expect(robot.getCoordinates().y).toBe(14);
    });
});

describe('Test chamber scenario 2: (4,3,FFFFFFFF5FRFFFFFF3FRFFFFFFLFFFFF5FFF5FFFFFFFLFFFFF)', () => {
    test(`Output should be the robot has moved to (3, 14)`, () => {
        const robot = new RobotArachnidMk3(4, 3, 'FFFFFFFF5FRFFFFFF3FRFFFFFFLFFFFF5FFF5FFFFFFFLFFFFF');
        robot.execute();

        expect(robot.getCoordinates().x).toBe(36);
        expect(robot.getCoordinates().y).toBe(15);
    });
});
