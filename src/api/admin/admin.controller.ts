import { Router } from "express";
import Controller from "@/utils/interfaces/controller.interface";

interface IAdminController extends Controller {}

export class AdminController implements IAdminController{
    public path = "/admin";
    public router: Router = Router();
    
    constructor() {
        this.initializeRoutes();
    }
    
    private initializeRoutes() {}
}