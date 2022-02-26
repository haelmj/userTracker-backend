import { Router } from "express";
import { UserModel } from "./user.model";

export class UserController {
  public path = "/users";
  public router: Router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {}
}
