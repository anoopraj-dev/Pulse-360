import type { Request, Response, NextFunction } from "express";
import Doctor from "../models/doctor.model.js";
import Patient from "../models/patient.model.js";
import { generateUniqueId } from "../utils/idGernerator.js";

interface CustomRequest extends Request {
  registrationId?: string;
}

export const generateId = () => {
  return async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      const { role } = req.body;
        console.log(role)
        console.log(typeof role);

      if (!role || !["doctor", "patient"].includes(role)) {
        return res.status(400).json({
          success: false,
          message: "Role is required",
        });
      }

      const prefix = role === "doctor" ? "DOC" : "PAT";

      let uniqueId = "";
      let exists = true;
      let attempts = 0;
      const MAX_ATTEMPTS = 10; 

      while (exists && attempts < MAX_ATTEMPTS) {
        uniqueId = generateUniqueId(prefix);

        const found =
          role === "doctor"
            ? await Doctor.exists({ doctorId: uniqueId })
            : await Patient.exists({ patientId: uniqueId });

        exists = !!found;
        attempts++;
      }

      if (attempts >= MAX_ATTEMPTS) {
        return res.status(500).json({
          success: false,
          message: "Failed to generate unique ID, please try again.",
        });
      }

      req.registrationId = uniqueId;
      next();
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error,
      });
    }
  };
};
