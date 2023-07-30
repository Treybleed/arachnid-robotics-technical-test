import { describe, expect, test } from '@jest/globals';
import { RobotArachnidMk3 } from '../../classes/robots/robot-arachnid-mk3';
import { MovementOrientation } from '../../enums/movement-orientation';
import { MovementDirection } from '../../enums/movement-direction';

// Mk3 Robot Unit Tests

// Get boost function tests

describe('Mk3 Robot get boost function', () => {
    test(`Output should be that the correct boost amount is returned`, () => {
        const robot = new RobotArachnidMk3(0, 0, '', 'UP');

        expect(robot.getBoost('FFRL', 1)).toBe(0);
        expect(robot.getBoost('FFRL', 0)).toBe(0);
        expect(robot.getBoost('FFRL', -4)).toBe(0);
        expect(robot.getBoost('FFRL5FRRRBL', 5)).toBe(5);
        expect(robot.getBoost('FFRL5FRRRBLLLRRFF2FR', 18)).toBe(2);
        expect(robot.getBoost('FFRL', 10)).toBe(0);
    });
});

// Boosted speed function tests

describe('Mk3 Robot boosted speed function', () => {
    test(`Output should be that the robot should move forward without boosting`, () => {
        const robot = new RobotArachnidMk3(0, 0, '', 'UP', 1);

        expect(robot.boostedSpeed(0)).toBe(1);
    });
});
describe('Mk3 Robot boosted speed function', () => {
    test(`Output should be that the robot should move forward with a boost`, () => {
        const robot = new RobotArachnidMk3(0, 0, '', 'UP', 1);

        expect(robot.boostedSpeed(2)).toBe(2);
    });
});
describe('Mk3 Robot boosted speed function', () => {
    test(`Output should be that the robot cannot boost when negative numbers are provided`, () => {
        const robot = new RobotArachnidMk3(0, 0, '', 'UP', 1);

        expect(robot.boostedSpeed(-1)).toBe(1);
    });
});


// Overheat tests

describe('Mk3 Robot overheat test', () => {
    test(`Output should be that the robot moves forward 5 then overheats and moves no more`, () => {
        const robot = new RobotArachnidMk3(0, 0, '', 'UP', 1);

        expect(robot.boostedSpeed(9)).toBe(5);
    });
});

// Fuel tests

describe('Mk3 Robot fuel test', () => {
    test(`Output should be that the robots fuel goes down after boosting`, () => {
        const robot = new RobotArachnidMk3(0, 0, '', 'UP', 1, 10);

        robot.boostedSpeed(2);
        expect(robot.getFuel()).toBe(8);
    });
});
describe('Mk3 Robot fuel test', () => {
    test(`Output should be that the robot cannot boost when no fuel`, () => {
        const robot = new RobotArachnidMk3(0, 0, '', 'UP', 1, 0);

        expect(robot.boostedSpeed(3)).toBe(1);
    });
});
describe('Mk3 Robot fuel test', () => {
    test(`Output should be that the robot cannot boost more than the total fuel`, () => {
        const robot = new RobotArachnidMk3(0, 0, '', 'UP', 1, 2);

        expect(robot.boostedSpeed(4)).toBe(2);
        expect(robot.getFuel()).toBe(0);
    });
});

// Rotate function tests

describe('Mk3 Robot Rotate function', () => {
    test(`Output should be the robot is now facing RIGHT`, () => {
        const robot = new RobotArachnidMk3(0, 0, '', 'UP');

        robot.rotate(MovementDirection.RIGHT);
        expect(robot.getOrientation()).toBe(MovementOrientation.RIGHT);
    });
});
describe('Mk3 Robot Rotate function', () => {
    test(`Output should be the robot is now facing LEFT`, () => {
        const robot = new RobotArachnidMk3(0, 0, '', 'UP');

        robot.rotate(MovementDirection.LEFT);
        expect(robot.getOrientation()).toBe(MovementOrientation.LEFT);
    });
});
describe('Mk3 Robot Rotate function', () => {
    test(`Output should be the robot is now facing DOWN`, () => {
        const robot = new RobotArachnidMk3(0, 0, '', 'UP');

        robot.rotate(MovementDirection.LEFT);
        robot.rotate(MovementDirection.LEFT);
        expect(robot.getOrientation()).toBe(MovementOrientation.DOWN);
    });
});

// Apply force function tests

describe('Mk2 Robot Apply force function', () => {
    test(`Output should be 1 (0 + 1) with a orientation of UP`, () => {
        const robot = new RobotArachnidMk3(0, 0, '', 'UP');

        robot.applyForce(MovementOrientation.UP, 1);

        expect(robot.getCoordinates().y).toBe(1);
    });
});
describe('Mk2 Robot Apply force function', () => {
    test(`Output should be 6 (3 + 3) with a orientation of RIGHT`, () => {
        const robot = new RobotArachnidMk3(3, 3, '', 'RIGHT');

        robot.applyForce(MovementOrientation.RIGHT, 3);

        expect(robot.getCoordinates().x).toBe(6);
    });
});
describe('Mk2 Robot Apply force function', () => {
    test(`Output should be 2 (3 - 1) with a orientation of DOWN`, () => {
        const robot = new RobotArachnidMk3(3, 1, '', 'DOWN');

        robot.applyForce(MovementOrientation.DOWN, 1);

        expect(robot.getCoordinates().y).toBe(0);
    });
});
describe('Mk2 Robot Apply force function', () => {
    test(`Output should be 3 (5 - 2) with a orientation of LEFT`, () => {
        const robot = new RobotArachnidMk3(5, 0, '', 'LEFT');

        robot.applyForce(MovementOrientation.LEFT, 2);

        expect(robot.getCoordinates().x).toBe(3);
    });
});

// Move function tests

describe('Mk2 Robot Move function', () => {
    test(`Output should be that the robot moves forward in the correct orientation`, () => {
        const robotUpTest = new RobotArachnidMk3(0, 0, '', 'UP');
        robotUpTest.move('F', 0);
        expect(robotUpTest.getCoordinates().y).toBe(1);

        const robotDownTest = new RobotArachnidMk3(0, 5, '', 'DOWN');
        robotDownTest.move('F', 0);
        expect(robotDownTest.getCoordinates().y).toBe(4);

        const robotRightTest = new RobotArachnidMk3(0, 0, '', 'RIGHT');
        robotRightTest.move('F', 0);
        expect(robotRightTest.getCoordinates().x).toBe(1);

        const robotLeftTest = new RobotArachnidMk3(5, 0, '', 'LEFT');
        robotLeftTest.move('F', 0);
        expect(robotLeftTest.getCoordinates().x).toBe(4);
    });
});
describe('Mk2 Robot Move function', () => {
    test(`Output should be that the robot rotates 90 degrees LEFT and RIGHT correctly`, () => {
        const robot = new RobotArachnidMk3(0, 0, '', 'UP');

        robot.move('L', 0);
        expect(robot.getOrientation()).toBe(MovementOrientation.LEFT);
        robot.move('R', 0);
        expect(robot.getOrientation()).toBe(MovementOrientation.UP);
    });
});
describe('Mk2 Robot Move function', () => {
    test(`Output should be that the robot rotates 180 degrees correctly`, () => {
        const robot = new RobotArachnidMk3(0, 0, '', 'UP');

        robot.move('L', 0);
        robot.move('L', 0);
        expect(robot.getOrientation()).toBe(MovementOrientation.DOWN);
    });
});
describe('Mk2 Robot Move function', () => {
    test(`Output should be that the robot can move into negative coordinates`, () => {
        const robot = new RobotArachnidMk3(0, 0, '', 'LEFT');

        robot.move('F', 0);
        expect(robot.getCoordinates().x).toBe(-1);

        const robotDownTest = new RobotArachnidMk3(0, 0, '', 'DOWN');

        robotDownTest.move('F', 0);
        expect(robotDownTest.getCoordinates().y).toBe(-1);
    });
});


