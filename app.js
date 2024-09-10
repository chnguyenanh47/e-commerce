const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
var cors = require("cors");
require("./config/dbConnect");

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

const authRouter = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const blogRoute = require("./routes/blogRoute");
const prodcategoryRoute = require("./routes/prodcategoryRoute");
const blogCatRoute = require("./routes/blogCatRoute");
const brandRoute = require("./routes/brandRoute");
const couponRoute = require("./routes/couponRoute");
const colorRoute = require("./routes/colorRoute");
const enqRoute = require("./routes/enqRoute");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
// routes
app.use("/api/v1/user", authRouter);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/blog", blogRoute);
app.use("/api/v1/category", prodcategoryRoute);
app.use("/api/v1/blogcategory", blogCatRoute);
app.use("/api/v1/brand", brandRoute);
app.use("/api/v1/coupon", couponRoute);
app.use("/api/v1/color", colorRoute);
app.use("/api/v1/enq", enqRoute);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});
