import { Request, Response } from "express";
import { connection } from "../database/connection";

export class ListUserController{
    hendle(req: Request, res: Response){
        var sql = 'SELECT * FROM users';
        connection.query(sql, function(err, data, fields) { 
            if (err) throw err;  
            res.json(data);
        });
    }
}