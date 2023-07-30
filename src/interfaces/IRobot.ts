export interface IRobot {
   execute();
   move(direction: string);
   applyForce(currentPosition: number, force: number);
}