import * as Dialog from "@radix-ui/react-dialog";
export default function ComplainantForm({ isModalOpen, setIsModalOpen, formData }) {
    const complaintTypeRaw = localStorage.getItem("complaintType") || "Not selected";

    const complaintTypeMap = {
        transaction: "Transactions",
        "code-sets": "Code Sets",
        "unique-identifiers": "Unique Identifiers",
        "operating-rules": "Operating Rules"
    };

    const complaintType = complaintTypeMap[complaintTypeRaw] || "Not selected";

    const maskName = (name = "") => name ? name[0] + "*".repeat(name.length - 1) : "";

    const maskEmail = (email = "") => {
        const [user, domain] = email.split("@");
        if (!user || !domain) return "***";
        return user[0] + "***@" + domain;
    };

    const maskPhone = (phone = "") => {
        return phone.length >= 4 ? "***-***-" + phone.slice(-4) : "***";
    };

    const maskAddress = (formData) => {
        return `${formData.city}, ${formData.state} ${formData.zipCode.slice(0, 2)}***`;
    };
    return (
        <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen} >
            <Dialog.Portal className="p-5">
                <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg w-[95vw] max-w-[90vw] sm:max-w-md px-4 py-5 sm:px-6">
                <Dialog.Title className="text-xl font-bold text-[#056791] mb-4">
                        Complaint Details Summary
                    </Dialog.Title>
                    <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                        {/* Hide scrollbar but keep functionality */}
                        <style jsx>{`
                            div::-webkit-scrollbar {
                                width: 0;
                                background: transparent;
                            }
                        `}</style>
                        <div>
                            <h3 className="font-semibold text-gray-700">Complaint Type:</h3>
                            <p>{complaintType}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-700">Anonymous:</h3>
                            <p>{formData.anonymous === 'yes' ? 'Yes' : 'No'}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-700">Organization Name:</h3>
                            <p>{formData.organizationName}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-700">Organization Type:</h3>
                            <p>
                                {formData.organizationType === 'other'
                                    ? formData.organizationTypeOther
                                    : formData.organizationType}
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-700">Name:</h3>
                            <p>
                                {formData.anonymous === 'yes'
                                    ? `${formData.title} ${maskName(formData.firstName)} ${formData.middleInitial ? maskName(formData.middleInitial) : ""} ${maskName(formData.lastName)}`
                                    : `${formData.title} ${formData.firstName} ${formData.middleInitial} ${formData.lastName}`}
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-700">Address:</h3>
                            <p>
                                {formData.anonymous === 'yes' ? (
                                    maskAddress(formData)
                                ) : (
                                    <>
                                        {formData.addressLine1}<br />
                                        {formData.addressLine2 && <>{formData.addressLine2}<br /></>}
                                        {formData.city}, {formData.state} {formData.zipCode}
                                    </>
                                )}
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-700">Contact Information:</h3>
                            {formData.anonymous === 'yes' ? (
                                <>
                                    <p>Email: {maskEmail(formData.email)}</p>
                                    <p>Phone: {maskPhone(formData.phone)}</p>
                                    {formData.cellPhone && <p>Cell: {maskPhone(formData.cellPhone)}</p>}
                                </>
                            ) : (
                                <>
                                    <p>Email: {formData.email}</p>
                                    <p>Phone: {formData.phone}</p>
                                    {formData.cellPhone && <p>Cell: {formData.cellPhone}</p>}
                                </>
                            )}
                        </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                        <Dialog.Close asChild>
                            <button className="bg-[#056791] px-4 py-2 text-white rounded">
                                Close
                            </button>
                        </Dialog.Close>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}