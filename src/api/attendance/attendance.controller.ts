import { Router } from "express";
import { AttendanceModel } from "./attendance.model";
import Controller from "@/utils/interfaces/controller.interface";

interface IAttendanceController extends Controller {
  
}
export class AttendanceController implements IAttendanceController {
  public path = "/attendance";
  public router: Router = Router();

  constructor() {
    this.initializeRoutes();
  }
  
  private initializeRoutes() {}
}