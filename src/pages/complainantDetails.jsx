import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import * as Form from "@radix-ui/react-form";
import * as RadioGroup from "@radix-ui/react-radio-group";
import * as Select from "@radix-ui/react-select";
import * as Dialog from "@radix-ui/react-dialog";
import * as React from "react";

export default function ComplaintType() {
    // Form state
    const [formData, setFormData] = React.useState({
        anonymous: '',
        organizationName: '',
        organizationType: '',
        organizationTypeOther: '',
        organizationRole: '',
        title: '',
        firstName: '',
        middleInitial: '',
        lastName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: '',
        email: '',
        phone: '',
        cellPhone: ''
    });

    // Modal state
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form here if needed
        setIsModalOpen(true);
    };

    const SelectItem = React.forwardRef(
        ({ children, className, ...props }, forwardedRef) => {
            return (
                <Select.Item
                    className="flex justify-between"
                    {...props}
                    ref={forwardedRef}
                >
                    <Select.ItemText>{children}</Select.ItemText>
                    <Select.ItemIndicator className="SelectItemIndicator">
                        <CheckIcon />
                    </Select.ItemIndicator>
                </Select.Item>
            );
        },
    );

    return (
        <>
            <main className="w-full lg:max-w-[80%] mx-auto">
                <div className="section-container py-5 px-5 ">
                    <section id="content" className="section ">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl lg:text-2xl font-medium text-[#056791] mb-2">Complainant Details</h1>
                            <div className="stepper lg:gap-22 relative flex gap-6 before:absolute before:left-0 before:top-2/4 before:h-px before:w-full before:-translate-y-2/4 before:bg-gray-400 before:content-[''] sm:gap-16 md:gap-20">
                                {/* Stepper items remain the same */}
                                {/* ... */}
                            </div>
                        </div>
                        <Form.Root onSubmit={handleSubmit}>
                            {/* Anonymous Radio Group */}
                            <div>
                                <p className="font-bold text-[#056791]">Do you want to remain anonymous during this process?<span className="text-red-500"> *</span></p>
                                <RadioGroup.Root
                                    className="gap-5 flex justify-start items-center mt-3"
                                    value={formData.anonymous}
                                    onValueChange={(value) => handleChange("anonymous", value)}
                                    required
                                >
                                    <div className="mb-2.5 flex items-center text-[#056791]">
                                        <RadioGroup.Item
                                            className="size-5 cursor-default rounded-full border border-solid border-primary bg-transparent shadow-none outline-none"
                                            value="yes"
                                            id="anonymous-yes"
                                        >
                                            <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-2.5 after:rounded-full after:bg-primary" />
                                        </RadioGroup.Item>
                                        <label className="pl-2 text-sm" htmlFor="anonymous-yes">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="mb-2.5 flex items-center">
                                        <RadioGroup.Item
                                            className="size-5 cursor-default rounded-full border border-solid border-primary bg-transparent shadow-none outline-none"
                                            value="no"
                                            id="anonymous-no"
                                        >
                                            <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-2.5 after:rounded-full after:bg-primary" />
                                        </RadioGroup.Item>
                                        <label className="pl-2 text-sm" htmlFor="anonymous-no">
                                            No
                                        </label>
                                    </div>
                                </RadioGroup.Root>
                                <p className="font-bold text-sm text-gray-600">Disclaimer: </p>
                                <p className="text-gray-600">If you select yes, CMS will not share your Information with the Filed Against Entity (FAE) during the investigation process. However, information provided in this complaint is subject to rules and policies under the Freedom of Information Act (FOIA).</p>
                            </div>

                            {/* Organization Name */}
                            <div className="first-name mt-3">
                                <p className="mb-2 text-[#056791]">Complainant Organization Name<span className="text-red-500"> *</span></p>
                                <Form.Field name="organizationName">
                                    <Form.Control asChild>
                                        <input
                                            className="box-border border-[#056791] inline-flex h-12 w-full lg:w-6/12 appearance-none items-center justify-center rounded-none border border-solid border-primary bg-white p-2.5 shadow-none outline-none"
                                            type="text"
                                            required
                                            value={formData.organizationName}
                                            onChange={(e) => handleChange("organizationName", e.target.value)}
                                        />
                                    </Form.Control>
                                </Form.Field>
                            </div>

                            {/* Organization Type */}
                            <div className="first-name mt-3">
                                <p className="mb-2 text-[#056791]">Complainant Organization Type</p>
                                <Select.Root
                                    value={formData.organizationType}
                                    onValueChange={(value) => handleChange("organizationType", value)}
                                >
                                    <Select.Trigger
                                        className="inline-flex h-12 w-full lg:w-6/12 items-center justify-between gap-2 rounded-none border border-solid border-primary bg-white p-2.5 shadow-none outline-none"
                                        aria-label="Organization Type"
                                    >
                                        <Select.Value placeholder="Select organization type" />
                                        <Select.Icon className="text-primary">
                                            <ChevronDownIcon className="w-5" />
                                        </Select.Icon>
                                    </Select.Trigger>
                                    <Select.Portal>
                                        <Select.Content className="z-[50] mx-auto w-11/12 overflow-hidden rounded-lg border border-lightgrayishblue bg-white shadow-lg">
                                            <Select.Viewport className="p-1">
                                                <Select.Group>
                                                    <SelectItem value="none">None</SelectItem>
                                                    <SelectItem value="clearinghouse">Health Care clearinghouse</SelectItem>
                                                    <SelectItem value="careprovider">Covered health care provider</SelectItem>
                                                    <SelectItem value="healthplan">Health Plan</SelectItem>
                                                    <SelectItem value="vendor">Vendor</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </Select.Group>
                                            </Select.Viewport>
                                        </Select.Content>
                                    </Select.Portal>
                                </Select.Root>
                            </div>

                            {/* Organization Type Other (conditionally shown) */}
                            {formData.organizationType === 'other' && (
                                <div className="first-name mt-3">
                                    <p className="mb-2 text-[#056791]">Complainant Organization Type (Other)</p>
                                    <Form.Field name="organizationTypeOther">
                                        <Form.Control asChild>
                                            <input
                                                className="box-border border-[#056791] inline-flex h-12 w-full lg:w-6/12 appearance-none items-center justify-center rounded-none border border-solid border-primary bg-white p-2.5 shadow-none outline-none"
                                                type="text"
                                                value={formData.organizationTypeOther}
                                                onChange={(e) => handleChange("organizationTypeOther", e.target.value)}
                                            />
                                        </Form.Control>
                                    </Form.Field>
                                </div>
                            )}

                            {/* Organization Role */}
                            <div className="first-name mt-3">
                                <p className="mb-2 text-[#056791]">Complainant Organization Role</p>
                                <Form.Field name="organizationRole">
                                    <Form.Control asChild>
                                        <input
                                            className="box-border border-[#056791] inline-flex h-12 w-full lg:w-6/12 appearance-none items-center justify-center rounded-none border border-solid border-primary bg-white p-2.5 shadow-none outline-none"
                                            type="text"
                                            value={formData.organizationRole}
                                            onChange={(e) => handleChange("organizationRole", e.target.value)}
                                        />
                                    </Form.Control>
                                </Form.Field>
                            </div>

                            {/* Title */}
                            <div className="first-name mt-3">
                                <p className="mb-2 text-[#056791]">Complainant Title*</p>
                                <Select.Root
                                    value={formData.title}
                                    onValueChange={(value) => handleChange("title", value)}
                                    required
                                >
                                    <Select.Trigger
                                        className="inline-flex h-12 w-full lg:w-6/12 items-center justify-between gap-2 rounded-none border border-solid border-primary bg-white p-2.5 shadow-none outline-none"
                                        aria-label="Title"
                                    >
                                        <Select.Value placeholder="Select title" />
                                        <Select.Icon className="text-primary">
                                            <ChevronDownIcon className="w-5" />
                                        </Select.Icon>
                                    </Select.Trigger>
                                    <Select.Portal>
                                        <Select.Content className="z-[50] mx-auto w-full lg:w-6/12 overflow-hidden rounded-lg border border-lightgrayishblue bg-white shadow-lg">
                                            <Select.Viewport className="p-1">
                                                <Select.Group>
                                                    <SelectItem value="none">None</SelectItem>
                                                    <SelectItem value="mr">Mr.</SelectItem>
                                                    <SelectItem value="mrs">Mrs.</SelectItem>
                                                    <SelectItem value="miss">Miss</SelectItem>
                                                    <SelectItem value="ms">Ms.</SelectItem>
                                                    <SelectItem value="dr">Dr.</SelectItem>
                                                </Select.Group>
                                            </Select.Viewport>
                                        </Select.Content>
                                    </Select.Portal>
                                </Select.Root>
                            </div>

                            {/* First Name */}
                            <div className="first-name mt-3">
                                <p className="mb-2 text-[#056791]">Complainant First Name*</p>
                                <Form.Field name="firstName">
                                    <Form.Control asChild>
                                        <input
                                            className="box-border border-[#056791] inline-flex h-12 w-full lg:w-6/12 appearance-none items-center justify-center rounded-none border border-solid border-primary bg-white p-2.5 shadow-none outline-none"
                                            type="text"
                                            required
                                            value={formData.firstName}
                                            onChange={(e) => handleChange("firstName", e.target.value)}
                                        />
                                    </Form.Control>
                                </Form.Field>
                            </div>

                            {/* Middle Initial */}
                            <div className="first-name mt-3">
                                <p className="mb-2 text-[#056791]">Complainant MI</p>
                                <Form.Field name="middleInitial">
                                    <Form.Control asChild>
                                        <input
                                            className="box-border border-[#056791] inline-flex h-12 w-full lg:w-6/12 appearance-none items-center justify-center rounded-none border border-solid border-primary bg-white p-2.5 shadow-none outline-none"
                                            type="text"
                                            value={formData.middleInitial}
                                            onChange={(e) => handleChange("middleInitial", e.target.value)}
                                        />
                                    </Form.Control>
                                </Form.Field>
                            </div>

                            {/* Last Name */}
                            <div className="first-name mt-3">
                                <p className="mb-2 text-[#056791]">Complainant Last Name*</p>
                                <Form.Field name="lastName">
                                    <Form.Control asChild>
                                        <input
                                            className="box-border border-[#056791] inline-flex h-12 w-full lg:w-6/12 appearance-none items-center justify-center rounded-none border border-solid border-primary bg-white p-2.5 shadow-none outline-none"
                                            type="text"
                                            required
                                            value={formData.lastName}
                                            onChange={(e) => handleChange("lastName", e.target.value)}
                                        />
                                    </Form.Control>
                                </Form.Field>
                            </div>

                            {/* Address Line 1 */}
                            <div className="first-name mt-3">
                                <p className="mb-2 text-[#056791]">Complainant Address Line 1*</p>
                                <Form.Field name="addressLine1">
                                    <Form.Control asChild>
                                        <input
                                            className="box-border border-[#056791] inline-flex h-12 w-full lg:w-6/12 appearance-none items-center justify-center rounded-none border border-solid border-primary bg-white p-2.5 shadow-none outline-none"
                                            type="text"
                                            required
                                            value={formData.addressLine1}
                                            onChange={(e) => handleChange("addressLine1", e.target.value)}
                                        />
                                    </Form.Control>
                                </Form.Field>
                            </div>

                            {/* Address Line 2 */}
                            <div className="first-name mt-3">
                                <p className="mb-2 text-[#056791]">Complainant Address Line 2</p>
                                <Form.Field name="addressLine2">
                                    <Form.Control asChild>
                                        <input
                                            className="box-border border-[#056791] inline-flex h-12 w-full lg:w-6/12 appearance-none items-center justify-center rounded-none border border-solid border-primary bg-white p-2.5 shadow-none outline-none"
                                            type="text"
                                            value={formData.addressLine2}
                                            onChange={(e) => handleChange("addressLine2", e.target.value)}
                                        />
                                    </Form.Control>
                                </Form.Field>
                            </div>

                            {/* City */}
                            <div className="first-name mt-3">
                                <p className="mb-2 text-[#056791]">Complainant City/Town*</p>
                                <Form.Field name="city">
                                    <Form.Control asChild>
                                        <input
                                            className="box-border border-[#056791] inline-flex h-12 w-full lg:w-6/12 appearance-none items-center justify-center rounded-none border border-solid border-primary bg-white p-2.5 shadow-none outline-none"
                                            type="text"
                                            required
                                            value={formData.city}
                                            onChange={(e) => handleChange("city", e.target.value)}
                                        />
                                    </Form.Control>
                                </Form.Field>
                            </div>

                            {/* State */}
                            <div className="first-name mt-3">
                                <p className="mb-2 text-[#056791]">Complainant State/Territory*</p>
                                <Select.Root
                                    value={formData.state}
                                    onValueChange={(value) => handleChange("state", value)}
                                    required
                                >
                                    <Select.Trigger
                                        className="inline-flex h-12 w-full lg:w-6/12 items-center justify-between gap-2 rounded-none border border-solid border-primary bg-white p-2.5 shadow-none outline-none"
                                        aria-label="State"
                                    >
                                        <Select.Value placeholder="Select state" />
                                        <Select.Icon className="text-primary">
                                            <ChevronDownIcon className="w-5" />
                                        </Select.Icon>
                                    </Select.Trigger>
                                    <Select.Portal>
                                        <Select.Content className="z-[50] mx-auto w-full lg:w-6/12 overflow-hidden rounded-lg border border-lightgrayishblue bg-white shadow-lg">
                                            <Select.Viewport className="p-1">
                                                <Select.Group>
                                                    <SelectItem value="Alabama">Alabama</SelectItem>
                                                    <SelectItem value="Arizona">Arizona</SelectItem>
                                                    <SelectItem value="Arkansas">Arkansas</SelectItem>
                                                    <SelectItem value="California">California</SelectItem>
                                                    {/* Add more states as needed */}
                                                </Select.Group>
                                            </Select.Viewport>
                                        </Select.Content>
                                    </Select.Portal>
                                </Select.Root>
                            </div>

                            {/* Zip Code */}
                            <div className="first-name mt-3">
                                <p className="mb-2 text-[#056791]">Complainant Zip Code*</p>
                                <Form.Field name="zipCode">
                                    <Form.Control asChild>
                                        <input
                                            className="box-border border-[#056791] inline-flex h-12 w-full lg:w-6/12 appearance-none items-center justify-center rounded-none border border-solid border-primary bg-white p-2.5 shadow-none outline-none"
                                            type="text"
                                            required
                                            value={formData.zipCode}
                                            onChange={(e) => handleChange("zipCode", e.target.value)}
                                        />
                                    </Form.Control>
                                </Form.Field>
                            </div>

                            {/* Email */}
                            <div className="first-name mt-3">
                                <p className="mb-2 text-[#056791]">Complainant Email Address*</p>
                                <Form.Field name="email">
                                    <Form.Control asChild>
                                        <input
                                            className="box-border border-[#056791] inline-flex h-12 w-full lg:w-6/12 appearance-none items-center justify-center rounded-none border border-solid border-primary bg-white p-2.5 shadow-none outline-none"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => handleChange("email", e.target.value)}
                                        />
                                    </Form.Control>
                                </Form.Field>
                            </div>

                            {/* Phone */}
                            <div className="first-name mt-3">
                                <p className="mb-2 text-[#056791]">Complainant Contact Phone Number*</p>
                                <Form.Field name="phone">
                                    <Form.Control asChild>
                                        <input
                                            className="box-border border-[#056791] inline-flex h-12 w-full lg:w-6/12 appearance-none items-center justify-center rounded-none border border-solid border-primary bg-white p-2.5 shadow-none outline-none"
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => handleChange("phone", e.target.value)}
                                        />
                                    </Form.Control>
                                </Form.Field>
                            </div>

                            {/* Cell Phone */}
                            <div className="first-name mt-3">
                                <p className="mb-2 text-[#056791]">Complainant Cell Phone Number</p>
                                <Form.Field name="cellPhone">
                                    <Form.Control asChild>
                                        <input
                                            className="box-border border-[#056791] inline-flex h-12 w-full lg:w-6/12 appearance-none items-center justify-center rounded-none border border-solid border-primary bg-white p-2.5 shadow-none outline-none"
                                            type="tel"
                                            value={formData.cellPhone}
                                            onChange={(e) => handleChange("cellPhone", e.target.value)}
                                        />
                                    </Form.Control>
                                </Form.Field>
                            </div>

                            <div className="flex lg:justify-start justify-center mt-8">
                                <button type="button" className="bg-white text-red-500 px-5 py-3 border border-red-500 rounded">
                                    Cancel
                                </button>
                                <Form.Submit asChild>
                                    <button type="submit" className="bg-[#056791] px-5 py-3 text-white rounded ml-8">
                                        Register Complaint
                                    </button>
                                </Form.Submit>
                            </div>
                        </Form.Root>
                    </section>
                </div>
            </main>

            {/* Modal to show form data */}
            <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                    <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
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
                                <p>{`${formData.title} ${formData.firstName} ${formData.middleInitial} ${formData.lastName}`}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-700">Address:</h3>
                                <p>
                                    {formData.addressLine1}<br />
                                    {formData.addressLine2 && <>{formData.addressLine2}<br /></>}
                                    {formData.city}, {formData.state} {formData.zipCode}
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-700">Contact Information:</h3>
                                <p>Email: {formData.email}</p>
                                <p>Phone: {formData.phone}</p>
                                {formData.cellPhone && <p>Cell: {formData.cellPhone}</p>}
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
        </>
    );
}