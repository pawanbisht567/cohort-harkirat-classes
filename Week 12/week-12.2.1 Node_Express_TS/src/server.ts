import express, { Express, Request, Response, NextFunction} from "express";

const app: Express = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    return res.json({ msg : 'Hello world'})
})

app.listen(4000, () => {
    console.log('Make the express server run, at full speedss')
})