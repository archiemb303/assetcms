import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <>
            <main className="w-full lg:max-w-[80%] mx-auto">
                <div className="section-container py-5 px-5 ">
                    <section id="content" className="section ">
                        <h1 className="text-2xl -bold  text-[#056791]  mb-2">Administrative Simplification Enforcement and Testing Tool (ASETT) </h1>
                        <p className="text-red-500">Disclaimer: If you file a complaint without registration, you will not be able to view your complaints,upload supporting documents, correspond electronically, or test transactions.</p>
                        <p className="mt-2">
                            The following is the list of steps you will take in order to file a complaint regarding HIPAA Transactions and Code Sets, Unique
                            Identifiers, and/or Operating Rules. If you wish to file a Health Insurance Privacy complaint, please visit the
                            <u>{" "}<a className="underline text-[#056791]" href="http://www.hhs.gov/ocr/privacy/hipaa/complaints/index.html" title="External link to file complaint process of the Office for Civil Rights(OCR).">Office for Civil Rights (OCR)</a>
                            </u>{" "}
                            website.
                        </p>
                        <p className="text-xl text-[#056791] mt-3 ">Step 1: Identify the type of HIPAA/ACA complaint</p>
                        <p className="text-xl text-[#056791] mt-3 ">Step 2: Provide your contact information</p>
                        <p className="text-xl text-[#056791] mt-3 ">Step 3: Identify the Filed Against Entity</p>
                        <p className="text-xl text-[#056791] mt-3 ">Step 4: Describe the HIPAA/ACA violation</p>
                        <p className="text-xl text-[#056791] mt-3 ">Step 5: Review and Submit</p>
                        <p className=" mt-3 ">You can review all information entered before submitting your complaint to CMS. Once the complaint is submitted, CMS will review all information and respond to your complaint.</p>
                        <p className=" mt-3 ">Click the Register Complaint button below to begin filing your complaint.</p>
                        <div className="flex lg:justify-end justify-center mt-8">
                            <button className="bg-white text-red-500 px-5 py-3 border border-red-500 rounded">Cancel</button>
                            <button className="bg-[#056791] px-5 py-3 text-white rounded ml-8" onClick={() => navigate("/complaint-type")}>Register Complaint</button>
                        </div>
                    </section>
                </div>
            </main>


        </>
    );
}
