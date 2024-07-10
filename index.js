import bodyParser from "body-parser";
import express from "express";
import movieRoutes from "./routes/movieRoutes.js";
import { specs, swaggerUi } from "./swaggerConfig.js";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/api/movies", movieRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
