import express, { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const router: Router = express.Router();

export function healthRoutes(): Router {
  router.get('/notification-health', (_req: Request, res: Response) => {
    res.status(StatusCodes.OK).json({ message: 'Notification service is up and running' });
  });
  return router;
}
