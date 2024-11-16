import express, { NextFunction, Request, Response } from "express";
import { signupInput, SignupParams } from "@pawan16/common";

const app = express();

app.use(express.json());

app.get('/home', (req: Request, res: Response, next: NextFunction) =>{
    res.status(200).send("hello from the Home")
});

app.post('/user', (req: Request, res: Response, next: NextFunction) => {
    const userRequest = signupInput.safeParse(req.body);
    if(!userRequest.success) {
        res.status(400).json({message: "Data is not send in correct format!!!"});
    }
    
    const userData: SignupParams | undefined = userRequest.data;
    res.status(200).json({ username: userData?.username, password: userData?.password, message: "Success"});
    
    
})
app.listen(4000, () => {
    console.log('Server running at 4000')
});