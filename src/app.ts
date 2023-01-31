import express from "express";
import "express-async-errors";

import handleError from "./errors/handleError";
import contactsRouter from "./routes/contacts.routes";
import userRouter from "./routes/user.routes";

const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/contacts", contactsRouter);

app.use(handleError);
export default app;
