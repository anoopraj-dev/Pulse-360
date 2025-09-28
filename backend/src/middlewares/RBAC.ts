import type { Request, Response, NextFunction } from "express";
import type { Permission, Role } from "../config/RBAC.js";
import { roles } from "../config/RBAC.js";

interface AuthRequest extends Request {
  user?: {
    id: string;
    role: Role;
  };
}

export const authorize = (permission: Permission) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    const userRole = req.user?.role; 

    if (!userRole) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const permissions =[...roles[userRole]]; 

    if (permissions.includes(permission)) {
      return next();
    }

    return res
      .status(403)
      .json({ message: "Forbidden: You don’t have permission for this action" });
  };
};
