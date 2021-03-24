import express from "express";
import UserController from "../controllers/UserController";
import { isAuthenticated } from "../middleware/isAuthenticated";
const router = express.Router();

router.post("/login", async (req, res) => {
  const controller = new UserController({
    req,
    res,
    action: "login",
  });
  await controller.handleRequest();
});

router.post(`/users`, async (req, res) => {
  const controller = new UserController({
    req,
    res,
    action: "create",
  });
  await controller.handleRequest();
});

router.post(`/members`, async (req, res) => {
  const controller = new UserController({
    req,
    res,
    action: "createMember",
  });
  await controller.handleRequest();
});

router.get("/users", isAuthenticated(), async (req, res) => {
  const controller = new UserController({
    req,
    res,
    action: "read",
  });
  await controller.handleRequest();
});

export { router };
