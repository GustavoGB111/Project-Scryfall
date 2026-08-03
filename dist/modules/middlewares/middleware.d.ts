import type { Request, Response, NextFunction } from "express";
export declare class Middlewares {
    auth(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
    forgotPassword(req: Request, res: Response, next: NextFunction): Promise<Response | void>;
}
//# sourceMappingURL=middleware.d.ts.map