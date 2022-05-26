import dayjs from "dayjs";
import { v4 as uuid } from 'uuid';
import { hash } from 'bcryptjs';
import { Response, Request } from "express";
import { connection } from "../database/connection";


export class CreateUserController{
    async handle(req: Request, res: Response){
        const { name, email, password, admin } = req.body;

        const hours = dayjs().format('YYYY-MM-DD HH:mm:ss');
        const created_at = hours;
        const updated_at = hours;
        const id = uuid();

        const passwordHash = await hash(password, 8);

        const sql = `INSERT INTO users (id, name, email, password, admin, created_at, updated_at) VALUES ('${id}','${name}','${email}','${passwordHash}',${admin},'${created_at}','${updated_at}')`;

        var data = {
            id,
            name, 
            email, 
            admin,
            created_at,
            updated_at
        };

        connection.query(sql, (err, re) => {
            if(err){
                console.log('Error', err);
            }
        });

        return res.json(data);
    }
}