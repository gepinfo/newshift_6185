import { Request, Response } from 'express';
import { employeeService } from '../service/employeeService';
import { CustomLogger } from '../config/Logger'
let employee = new employeeService();

export class employeeController {
    
    constructor() { }
    
    public GetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    employee.GetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into employeeController.ts: GetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from employeeController.ts: GetEntityById');
    })}
public Delete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    employee.Delete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into employeeController.ts: Delete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from employeeController.ts: Delete');
    })}
public Search(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    employee.Search(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into employeeController.ts: Search');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from employeeController.ts: Search');
    })}
public Update(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    employee.Update(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into employeeController.ts: Update');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from employeeController.ts: Update');
    })}
public Create(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    employee.Create(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into employeeController.ts: Create');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from employeeController.ts: Create');
    })}
public GetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    employee.GetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into employeeController.ts: GetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from employeeController.ts: GetAllValues');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    employee.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into employeeController.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from employeeController.ts: GetNounCreatedBy');
    })}


}