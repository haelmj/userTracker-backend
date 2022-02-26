import { Router } from "express";
import { UserModel } from "./user.model";
import Controller from "@/utils/interfaces/controller.interface";

interface IUserController extends Controller {}

export class UserController implements IUserController{
  public path = "/users";
  public router: Router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {}
}
