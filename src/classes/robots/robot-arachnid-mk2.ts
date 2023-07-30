import { Direction } from "../../enums/direction";
import { MovementDirection } from "../../enums/movement-direction";
import { MovementOrientation } from "../../enums/movement-orientation";
import { ICoordinates } from "../../interfaces/ICoordinates";
import { IRobot } from "../../interfaces/IRobot";

export class RobotArachnidMk2 implements IRobot {
    private currentPosition: ICoordinates;
    private route: string;
    private speed: number;
    private orientation: MovementOrientation;

    constructor(x: number = 0, y: number = 0, command: string = "", startingDirection: string = 'UP', speed = 1) {
        this.currentPosition = { x, y }
        this.route = command;
        this.orientation = MovementOrientation[startingDirection];
        this.speed = speed;
    }

    getCoordinates() {
        return this.currentPosition;
    }

    getOrientation() {
        return this.orientation;
    }

    execute(command = this.route): ICoordinates {
        for (let direction of command) {
            this.move(direction);

            console.log('s');
        }

        return this.getCoordinates();
    }

    move(direction: string) {
        switch(direction as Direction) {
            // Moves the robot forward in the direction it is currently facing (UP, DOWN, LEFT, RIGHT)
            case Direction.F:
                this.applyForce(this.orientation, this.speed);
                break;

            // Rotate the robot + 90 degrees
            case Direction.R:
                this.rotate(MovementDirection.RIGHT);
                break;

            // Rotate the robot - 90 degrees
            case Direction.L:
                this.rotate(MovementDirection.LEFT);
                break;
            
            // Rotates the robot 180 degrees
            case Direction.B:
                this.rotate(MovementDirection.LEFT);
                this.rotate(MovementDirection.LEFT);
                break;
        }
    }

    rotate(rotateDirection: MovementDirection) {

        if(rotateDirection ===  MovementDirection.RIGHT) {
            this.orientation = this.orientation + 1;
        }
        else if(rotateDirection === MovementDirection.LEFT) {
            this.orientation = this.orientation - 1;
        }

        // Clamp values to keep our movement within our allowed directions
        if(this.orientation < 0) {
            this.orientation = 3;
        }
        else if (this.orientation > 3) {
            this.orientation = 0;
        }
    }

    applyForce(movementOrientation: MovementOrientation, force: number) {
        switch(movementOrientation) {
            case MovementOrientation.UP: {
                this.currentPosition.y = this.caluclateSafeNewCoordinate(this.currentPosition.y, force);
                break;
            }
            case MovementOrientation.RIGHT: {
                this.currentPosition.x = this.caluclateSafeNewCoordinate(this.currentPosition.x, force);
                break;
            }
            case MovementOrientation.DOWN: {
                this.currentPosition.y = this.caluclateSafeNewCoordinate(this.currentPosition.y, -force);
                break;
            }
            case MovementOrientation.LEFT: {
                this.currentPosition.x = this.caluclateSafeNewCoordinate(this.currentPosition.x, -force);
                break;
            }
        }

        return;
    }

    // Only apply force if it is safe to do so
    caluclateSafeNewCoordinate(currentPositionValue: number, force: number) {
        return ((currentPositionValue + force) >= 0) ? currentPositionValue + force : currentPositionValue;
    }
}