import { Direction } from "../../enums/direction";
import { MovementDirection } from "../../enums/movement-direction";
import { MovementOrientation } from "../../enums/movement-orientation";
import { ICoordinates } from "../../interfaces/ICoordinates";
import { IRobot } from "../../interfaces/IRobot";

export class RobotArachnidMk3 implements IRobot {
    private currentPosition: ICoordinates;
    private route: string;
    private speed: number;
    private orientation: MovementOrientation;
    private fuel: number;
    private maxBoost: number = 5;

    constructor(x: number = 0, y: number = 0, command: string = "", startingDirection: string = 'UP', speed: number = 1, fuel: number = 30) {
        this.currentPosition = { x, y }
        this.route = command;
        this.orientation = MovementOrientation[startingDirection];
        this.speed = speed;
        this.fuel = fuel;
    }

    getCoordinates() {
        return this.currentPosition;
    }

    getOrientation() {
        return this.orientation;
    }

    getFuel() {
        return this.fuel;
    }

    execute(command = this.route): ICoordinates {
        let index = 0;

        for (let direction of command) {
            this.move(direction, this.getBoost(this.route, index));
            index++;
        }

        return this.getCoordinates();
    }

    getBoost(route: string, currentIndex: number) {
        if(currentIndex < 1) {
            return 0;
        }

        const previousCommand = route.charAt(currentIndex - 1);

        if(!isNaN(Number(previousCommand))) {
            return Number(previousCommand);
        }

        return 0;
    }

    move(direction: string, boostAmount: number) {

        switch(direction as Direction) {
            // Moves the robot forward in the direction it is currently facing (UP, DOWN, LEFT, RIGHT)
            case Direction.F:
                this.applyForce(this.orientation, this.boostedSpeed(boostAmount));
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

    boostedSpeed(boostAmount) {
        if(boostAmount > 0 && this.fuel > 0) {
            // Clamp boost amount at our max boost, any heigher we overheated
            boostAmount = Math.min(Math.max(boostAmount, 1), this.maxBoost);

            if(boostAmount > this.fuel) {
                boostAmount = this.fuel;
            }

            this.fuel -= boostAmount;
            return boostAmount;
        }

        return this.speed;
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
                this.currentPosition.y += force;
                break;
            }
            case MovementOrientation.RIGHT: {
                this.currentPosition.x += force;
                break;
            }
            case MovementOrientation.DOWN: {
                this.currentPosition.y -= force
                break;
            }
            case MovementOrientation.LEFT: {
                this.currentPosition.x -= force;
                break;
            }
        }

        return;
    }
}