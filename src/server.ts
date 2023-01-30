import app from "./app";
import "dotenv/config";

(async () => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`server running at port ${process.env.port || 3000}`);
  });
})();
