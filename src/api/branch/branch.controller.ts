import { Router } from "express";
import { BranchModel } from "./branch.model";

export class BranchController {
  public path = "/branches";
  public router: Router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {}
}
