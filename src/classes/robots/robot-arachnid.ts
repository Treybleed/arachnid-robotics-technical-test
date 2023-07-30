import { Direction } from "../../enums/direction";
import { ICoordinates } from "../../interfaces/ICoordinates";
import { IRobot } from "../../interfaces/IRobot";

export class RobotArachnid implements IRobot {
    private currentPosition: ICoordinates;
    private route: string;
    private speed: number;

    constructor(x: number = 0, y: number = 0, command: string = "", speed: number = 1) {
        this.currentPosition = { x, y }
        this.route = command;
        this.speed = speed;
    }

    getCoordinates() {
        return this.currentPosition;
    }

    execute(command = this.route): ICoordinates {
        for (let direction of command) {
            this.move(direction);
        }

        return this.getCoordinates();
    }

    move(direction: string) {
        switch(direction as Direction) {
            case Direction.F:
                this.currentPosition.y = this.applyForce( this.currentPosition.y, this.speed)
                break;
            case Direction.B:
                this.currentPosition.y = this.applyForce( this.currentPosition.y, -this.speed)
                break;
            case Direction.R:
                this.currentPosition.x = this.applyForce( this.currentPosition.x, this.speed)
                break;
            case Direction.L:
                this.currentPosition.x = this.applyForce( this.currentPosition.x, -this.speed)
                break;
        }
    }

    applyForce(currentPosition: number, force: number) {
        return currentPosition += force;
    }
}