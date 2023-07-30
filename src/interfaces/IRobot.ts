export interface IRobot {
   execute();
   move(direction: string, boost?: number);
   applyForce(currentPosition: number, force: number);
}