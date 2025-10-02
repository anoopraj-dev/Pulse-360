
import { useEffect, useState } from "react";
import Headings from "../../components/Headings";
import { api } from "../../api/api";
import DoctorInfo from "../../components/DoctotInfo";

interface Doctor {
    name: string;
    email: string;
    createdAt: string;
    medical_history: string[];
    patientId: string;
    role: string;
    updatedAt: string;

}

const DoctorProfile = () => {
    const [user, setUser] = useState<Doctor | null>(null);

    const fetchUser = async () => {
        try {
            const { data } = await api.get('/api/doctor/profile');
            setUser(data.user);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])

    if (!user) return <div>Loading...</div>

    const userData = Object.entries(user).reduce((acc, [key, value]) => {
        let displayValue: string | number;

        if (Array.isArray(value)) {
            displayValue = value.length ? value.join(", ") : "None";
        } else if (typeof value === "boolean") {
            displayValue = value ? "Yes" : "No";
        } else {
            displayValue = value as string | number;
        }

        const fieldName = key
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase());

        acc[fieldName] = displayValue;
        return acc;
    }, {} as Record<string, string | number>);


    return (
        <div className="flex flex-col items-center my-18 px-48">
            <Headings text="See whats on your calendar" className="my-8 text-center" />
            <div>

                <div>
                    <DoctorInfo data={userData}/>
                </div>

            </div>
        </div>
    )
}

export default DoctorProfile;
