import { Router } from "express";
import { BranchModel } from "./branch.model";
import Controller from "@/utils/interfaces/controller.interface";

interface IBranchController extends Controller {}

export class BranchController implements IBranchController{
  public path = "/branches";
  public router: Router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {}
}
