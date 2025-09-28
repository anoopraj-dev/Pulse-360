export const roles = {
    admin:['approve_doctor','block_user','block_doctor','delete_user','view_patients','write_prescriptions'] as const,
    doctor:['view_patients','write_prescription','cancel_appointments'] as const,
    patient: ['view_records','book_appointment'] as const
}

export type Role = keyof typeof roles;

export type Permission = typeof roles[Role][number];