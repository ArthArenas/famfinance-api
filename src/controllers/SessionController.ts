import BaseController, { IArgs } from "./BaseController";
import Joi from "joi";

interface ISessionArgs extends IArgs {}

export default class SessionController extends BaseController {
  constructor(args: ISessionArgs) {
    super(args);
  }

  protected async me() {
    this.ok({ user: this.cu.getUser() });
  }

  protected async logout() {
    this.req.logout();
    this.cu.logOut();
    console.log("User logged out!");
    return this.ok({});
  }

  protected meParams() {
    return Joi.object({});
  }

  protected logoutParams() {
    return Joi.object({});
  }
}
