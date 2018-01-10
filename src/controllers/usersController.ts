import * as express from "express";

// tslint:disable:variable-name
export function get(_req: express.Request, res: express.Response) {
  res.send("users");
}
