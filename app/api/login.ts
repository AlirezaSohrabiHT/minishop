import db from "@/lib/db";
import { NextApiRequest , NextApiResponse } from "next";

interface LoginRequestBody{
    email: string;
    password: string;
}

interface User{
    id: number;
    email: string;
    password: string;
}

export default async function handler (req:NextApiRequest , res:NextApiResponse) {

    if (req.method == 'POST') {
        const {email , password}: LoginRequestBody = req.body;

        try {
            const user = db.prepare(`SELECT * FROM user WHERE email = ?`).get(email) as User | undefined;
            if (!user || user.password !== password){
                return res.status(400).json({error: 'Invalid credentials'})
            }
    
        return res.status(200).json({message: 'Login successful'});
        } catch (error) {
            console.log(error)
            return res.status(500).json({error: 'Something went wrong'})
        }}
        else {
            return res.status(405).json({error: 'Method not allowed'})
        }
    }