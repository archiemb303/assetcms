import { CheckIcon } from "lucide-react"; // Or wherever your CheckIcon is from

export default function Stepper({ steps = [] }) {
    return (
        <div className="relative flex items-center justify-between mb-10 w-full">
            {steps.map((step, index) => (
                <div
                    key={index}
                    className="relative flex-1 flex flex-col items-center justify-center text-center"
                >
                    {/* Line between steps */}
                    {index !== steps.length - 1 && (
                        <div className="absolute top-[14px] left-1/2 right-[-50%] h-px bg-gray-400 z-0" />
                    )}

                    {/* Step Circle */}
                    <div className="relative z-10 rounded-full bg-white p-0.5 border border-[#056791]">
                        <span
                            className={`flex size-6 items-center justify-center rounded-full border text-xs
                                ${
                                    step.status === "completed"
                                        ? "border-gray-400 bg-[#056791] text-white"
                                        : step.status === "active"
                                        ? "border-gray-400 bg-[#056791] text-white"
                                        : "border-darkGray bg-white text-[#056791]"
                                }
                            `}
                        >
                            {step.status === "completed" ? <CheckIcon className="w-4 h-4" /> : index + 1}
                        </span>
                    </div>

                    {/* Step Label */}
                    <span className="mt-2 text-xs text-[#056791] px-1 truncate w-[60px] text-center sm:w-auto sm:whitespace-normal">
                        {step.label}
                    </span>
                </div>
            ))}
        </div>
    );
}
