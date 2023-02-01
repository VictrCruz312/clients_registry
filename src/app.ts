import express from "express";
import "express-async-errors";

import handleError from "./errors/handleError";
import adminRouter from "./routes/admin.routes";
import contactsRouter from "./routes/contacts.routes";
import loginRouter from "./routes/login.routes";
import reportRouter from "./routes/reports.routes";
import userRouter from "./routes/user.routes";

const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/contacts", contactsRouter);
app.use("/login", loginRouter);
app.use("/admin", adminRouter);
app.use("/report", reportRouter);

app.use(handleError);
export default app;
