export const protectRoute = async (res, req, next) => {
    if (!req.auth().isAuthenticated) {
        return res.status(401).json({message: "Unauthorized - you must be logged in"})
    }
    next();
}