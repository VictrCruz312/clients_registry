import express from "express";
import contactsRouter from "./routes/contacts.routes";
import userRouter from "./routes/user.routes";

const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/contacts", contactsRouter);

export default app;
