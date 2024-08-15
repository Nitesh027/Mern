// const jwt = require("jsonwebtoken");

// // JWT authentication middleware
// const jwtAuthMiddleware = (req, res, next) => {
//   // Extract the JWT token from the request headers
//   const authHeader = req.headers.authorization;
//   if (!authHeader) return res.status(401).json({ error: "Unauthorized" });

//   const token = authHeader.split(" ")[1];
//   if (!token) return res.status(401).json({ error: "Unauthorized" });

//   try {
//     // Verify the JWT token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
//     // Attach user information to the request object
//     req.user = decoded;
    
//     next();
//   } catch (err) {
//     console.error(err);
//     res.status(401).json({ error: "Invalid token" });
//   }
// };

// // Function to generate a new JWT token
// const generateToken = (userData) => {
//   return jwt.sign(userData, process.env.JWT_SECRET);
// };

// module.exports = { jwtAuthMiddleware, generateToken };
