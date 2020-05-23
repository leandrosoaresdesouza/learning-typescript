import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [{ name: "Leandro", email: "leandrossouza.dev@gmail.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: "Leandro Soares",
        email: "lsoares199658@gmail.com",
      },
      message: {
        subject: "Welcome to the dashboard",
        body: "Welcome",
      },
    });

    return res.send();
  },
};
