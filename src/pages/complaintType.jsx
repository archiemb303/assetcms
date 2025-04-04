import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ComplaintType() {
    const [selectedOption, setSelectedOption] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const options = [
        {
            value: "transaction",
            label: "Transaction",
            description: "Select if a covered entity is in violation of the following transactions: claims and encounter information, payment and remittance advice, claims status, eligibility, enrollment and disenrollment, referrals and authorizations, coordination of benefits and premium payment"
        },
        {
            value: "code-sets",
            label: "Code Sets",
            description: "Select if a covered entity is in violation of the following Code Sets: HCPCS (Ancillary Services/Procedures), CPT-4 (Physicians Procedures), CDT (Dental Terminology), ICD-9 (Diagnosis and Hospital Inpatient Procedures), ICD-10 (As of October 1, 2015) and NDC (National Drug Codes) codes with which providers and health plan are familiar, are the adopted code sets for procedures, diagnoses, and drugs.",
        },
        {
            value: "unique-identifiers",
            label: "Unique Identifiers",
            description: "Select if a covered entity is in violation of the following Unique Identifiers: National Provider Identifier (NPI), Employer Identification Number (EIN).",
        },
        {
            value: "operating-rules",
            label: "Operating Rules",
            description: "Select if a covered entity is suspected of being in violation of any of the adopted Operating Rules: Electronic Funds Transfer/Electronic Remittance Advice (EFT/ERA), Health Care Claim Status, and Eligibility for a Health Plan.",
        },
    ];

    const handleNext = () => {
        if (!selectedOption) {
            setError("Please select a complaint type before proceeding.");
            return;
        }
        setError("");
        localStorage.setItem("complaintType", selectedOption);
        navigate("/complainant-details");
    };

    return (
        <>
            <main className="w-full lg:max-w-[80%] mx-auto">
                <div className="section-container py-5 px-5">
                    <section id="content" className="section">



                        <div className="stepper lg:gap-37 relative flex gap-10 mb-5 before:absolute before:left-0 before:top-2/4 before:h-px lg:before:w-full before:w-11/12 before:-translate-y-2/4 before:bg-gray-400 before:content-[''] sm:gap-16 md:gap-20">
                            {/* Item */}
                            <div className="stepper-item z-1 relative rounded-full border border-solid border-[#056791] bg-white p-0.5">
                                <span className="relative flex size-6 items-center justify-center rounded-full border border-solid border-gray-400 bg-[#056791] text-sm text-white">
                                    1
                                </span>
                            </div>
                            {/* Item */}
                            <div className="stepper-item z-1 relative rounded-full bg-white p-0.5">
                                <span className="relative flex size-6 items-center justify-center rounded-full border border-solid border-darkGray bg-white text-sm text-primary">
                                    2
                                </span>
                            </div>
                            {/* Item */}
                            <div className="stepper-item z-1 relative rounded-full bg-white p-0.5">
                                <span className="relative flex size-6 items-center justify-center rounded-full border border-solid border-darkGray bg-white text-sm text-primary">
                                    3
                                </span>
                            </div>
                            <div className="stepper-item z-1 relative rounded-full bg-white p-0.5">
                                <span className="relative flex size-6 items-center justify-center rounded-full border border-solid border-darkGray bg-white text-sm text-primary">
                                    4
                                </span>
                            </div>
                            <div className="stepper-item z-1 relative rounded-full bg-white p-0.5">
                                <span className="relative flex size-6 items-center justify-center rounded-full border border-solid border-darkGray bg-white text-sm text-primary">
                                    5
                                </span>
                            </div>
                            <div className="stepper-item z-1 relative rounded-full bg-white p-0.5">
                                <span className="relative flex size-6 items-center justify-center rounded-full border border-solid border-darkGray bg-white text-sm text-primary">
                                    6
                                </span>
                            </div>
                        </div>

                        <h1 className="text-2xl  lg:text-2xl font-medium  text-[#056791]  mb-2">Complaint Type </h1>


                        <h1 className="text-xl">Select the complaint type</h1>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-3">
                            {options.map((option) => (
                                <label
                                    key={option.value}
                                    className={`border-2 rounded-lg p-4 flex flex-col cursor-pointer transition-all ${selectedOption === option.value
                                        ? "border-blue-500 bg-blue-50 shadow-lg"
                                        : "border-gray-300 bg-white"
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="complaint"
                                        value={option.value}
                                        checked={selectedOption === option.value}
                                        onChange={(e) => {
                                            setSelectedOption(e.target.value);
                                            setError(""); // clear error when selected
                                        }}
                                        className="absolute opacity-0 w-0 h-0"
                                    />
                                    <h2 className="text-lg font-semibold">{option.label}</h2>
                                    <p className="text-gray-600 text-sm">{option.description}</p>
                                </label>
                            ))}
                        </div>
                        {error && <p className="text-red-600 mt-2">{error}</p>}

                        <div className="flex lg:justify-end justify-center mt-6 w-full">
                            <button className="border border-[#056791] px-5 py-3 text-[#056791] rounded cursor-pointer" onClick={() => navigate("/")}>Previous</button>
                            <button className="bg-[#056791] px-5 py-3 text-white rounded ml-8 cursor-pointer" onClick={handleNext}>Next - Complainant Details</button>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
