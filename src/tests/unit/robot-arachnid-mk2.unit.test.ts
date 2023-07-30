import { describe, expect, test } from '@jest/globals';
import { RobotArachnidMk2 } from '../../classes/robots/robot-arachnid-mk2';
import { MovementOrientation } from '../../enums/movement-orientation';
import { MovementDirection } from '../../enums/movement-direction';

// Mk2 Robot Unit Tests

// Rotate function tests

describe('Mk2 Robot Rotate function', () => {
    test(`Output should be the robot is now facing RIGHT`, () => {
        const robot = new RobotArachnidMk2(0, 0, '', 'UP');

        robot.rotate(MovementDirection.RIGHT);
        expect(robot.getOrientation()).toBe(MovementOrientation.RIGHT);
    });
});
describe('Mk2 Robot Rotate function', () => {
    test(`Output should be the robot is now facing LEFT`, () => {
        const robot = new RobotArachnidMk2(0, 0, '', 'UP');

        robot.rotate(MovementDirection.LEFT);
        expect(robot.getOrientation()).toBe(MovementOrientation.LEFT);
    });
});
describe('Mk2 Robot Rotate function', () => {
    test(`Output should be the robot is now facing DOWN`, () => {
        const robot = new RobotArachnidMk2(0, 0, '', 'UP');

        robot.rotate(MovementDirection.LEFT);
        robot.rotate(MovementDirection.LEFT);
        expect(robot.getOrientation()).toBe(MovementOrientation.DOWN);
    });
});

// Calculate safe new coordinate function tests

describe('Mk2 Robot calculate safe new coordinate function', () => {
    test(`Output should be that the calculated new coordinate (1) is allowed`, () => {
        const robot = new RobotArachnidMk2(0, 0, '', 'UP');

        expect(robot.caluclateSafeNewCoordinate(robot.getCoordinates().y, 1)).toBe(1);
        expect(robot.caluclateSafeNewCoordinate(robot.getCoordinates().x, 1)).toBe(1);
    });
});
describe('Mk2 Robot calculate safe new coordinate function', () => {
    test(`Output should be that the calculated new coordinate (-1) is not allowed and 0 is returned`, () => {
        const robot = new RobotArachnidMk2(0, 0, '', 'UP');

        expect(robot.caluclateSafeNewCoordinate(robot.getCoordinates().y, -1)).toBe(0);
        expect(robot.caluclateSafeNewCoordinate(robot.getCoordinates().x, -1)).toBe(0);
    });
});

// Apply force function tests

describe('Mk2 Robot Apply force function', () => {
    test(`Output should be 1 (0 + 1) with a orientation of UP`, () => {
        const robot = new RobotArachnidMk2(0, 0, '', 'UP');

        robot.applyForce(MovementOrientation.UP, 1);

        expect(robot.getCoordinates().y).toBe(1);
    });
});
describe('Mk2 Robot Apply force function', () => {
    test(`Output should be 6 (3 + 3) with a orientation of RIGHT`, () => {
        const robot = new RobotArachnidMk2(3, 3, '', 'RIGHT');

        robot.applyForce(MovementOrientation.RIGHT, 3);

        expect(robot.getCoordinates().x).toBe(6);
    });
});
describe('Mk2 Robot Apply force function', () => {
    test(`Output should be 2 (3 - 1) with a orientation of DOWN`, () => {
        const robot = new RobotArachnidMk2(3, 1, '', 'DOWN');

        robot.applyForce(MovementOrientation.DOWN, 1);

        expect(robot.getCoordinates().y).toBe(0);
    });
});
describe('Mk2 Robot Apply force function', () => {
    test(`Output should be 3 (5 - 2) with a orientation of LEFT`, () => {
        const robot = new RobotArachnidMk2(5, 0, '', 'LEFT');

        robot.applyForce(MovementOrientation.LEFT, 2);

        expect(robot.getCoordinates().x).toBe(3);
    });
});

// Move function tests

describe('Mk2 Robot Move function', () => {
    test(`Output should be that the robot moves forward in the correct orientation`, () => {
        const robotUpTest = new RobotArachnidMk2(0, 0, '', 'UP');
        robotUpTest.move('F');
        expect(robotUpTest.getCoordinates().y).toBe(1);

        const robotDownTest = new RobotArachnidMk2(0, 5, '', 'DOWN');
        robotDownTest.move('F');
        expect(robotDownTest.getCoordinates().y).toBe(4);

        const robotRightTest = new RobotArachnidMk2(0, 0, '', 'RIGHT');
        robotRightTest.move('F');
        expect(robotRightTest.getCoordinates().x).toBe(1);

        const robotLeftTest = new RobotArachnidMk2(5, 0, '', 'LEFT');
        robotLeftTest.move('F');
        expect(robotLeftTest.getCoordinates().x).toBe(4);
    });
});
describe('Mk2 Robot Move function', () => {
    test(`Output should be that the robot rotates 90 degrees LEFT and RIGHT correctly`, () => {
        const robot = new RobotArachnidMk2(0, 0, '', 'UP');

        robot.move('L');
        expect(robot.getOrientation()).toBe(MovementOrientation.LEFT);
        robot.move('R');
        expect(robot.getOrientation()).toBe(MovementOrientation.UP);
    });
});
describe('Mk2 Robot Move function', () => {
    test(`Output should be that the robot rotates 180 degrees correctly`, () => {
        const robot = new RobotArachnidMk2(0, 0, '', 'UP');

        robot.move('L');
        robot.move('L');
        expect(robot.getOrientation()).toBe(MovementOrientation.DOWN);
    });
});


