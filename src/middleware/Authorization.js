const UserRepository = require("../repository/user")

const userRepository = new UserRepository();

/**
 * Middleware to authorize roles
 * @param {Array<string>} allowedRoles - List of roles allowed to access the route
 * @returns Middleware function
 */
const authorize = (allowedRoles) => {
  return (req, res, next) => {
    try {
      const authHeader = req.header('Authorization');

      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(400).json({ message: 'Malformed token: Authorization header must start with "Bearer "' });
      }

      const token = authHeader.replace('Bearer ', '');
      console.log("token",token)

      if (!token) {
        return res.status(401).json({ message: 'Access Denied: No token provided' });
      }

      const decoded = userRepository.verifyToken(token)

      if (!allowedRoles.includes(decoded.role)) {
        return res.status(403).json({ message: `Access Denied! '${decoded.role}' does not have permission` });
      }

      req.user = decoded;

      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid or expired token', error: error.message });
    }
  };
};

module.exports = authorize;