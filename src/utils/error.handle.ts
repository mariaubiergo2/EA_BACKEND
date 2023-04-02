import { Response } from "express";

//Error manager
const handleHttp = (res: Response, error: string, errorRaw?: any) => {
    console.log(errorRaw);
    res.status(500);
    res.send({error});
};

export {handleHttp};
