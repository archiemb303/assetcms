import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import * as Form from "@radix-ui/react-form";
import * as RadioGroup from "@radix-ui/react-radio-group";
import * as Select from "@radix-ui/react-select";

import { useState } from "react";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import ComplainantForm from "../components/complainantForm";

export default function ComplaintType() {

    const [formData, setFormData] = useState({
        anonymous: '',
        organizationName: '',
        organizationType: '',
        organizationTypeOther: '',
        organizationRole: '',
        organizationContact: '',
        title: '',
        firstName: '',
        middleInitial: '',
        lastName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCodeExt: '',
        zipCode: '',
        email: '',
        phone: '',
        cellPhone: ''
    });
    const [errors, setErrors] = useState({
        anonymous: '',
        organizationName: '',
        organizationContact: '',
        title: '',
        firstName: '',
        lastName: '',
        addressLine1: '',
        city: '',
        state: '',
        zipCode: '',
        email: '',
        phone: '',
    });
    const navigate = useNavigate();





    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const validateForm = () => {

        let newErrors = {};

        if (!formData.anonymous) {
            newErrors.anonymous = "Select if you want to remain Anonymous.";
        }

        if (!formData.organizationName) {
            newErrors.organizationName = "Complainant Organization Name is required";
        }
        if (!formData.organizationContact) {
            newErrors.organizationContact = "Complainant Contact Phone Number is required";
        } else if (!/^\(\d{3}\)\s\d{3}-\d{4}$/.test(formData.organizationContact)) {
            newErrors.organizationContact = "Phone number must be in the format (123) 456-7890";
        }
        if (!formData.title) {
            newErrors.title = "Select the Complainant's Title.";
        }
        if (!formData.firstName) {
            newErrors.firstName = "Select the Complainant's First Name is required";
        }
        if (!formData.lastName) {
            newErrors.lastName = "Select the Complainant's Last Name is required";
        }
        if (!formData.addressLine1) {
            newErrors.addressLine1 = "Address Line 1 is required";
        }
        if (!formData.city) {
            newErrors.city = "City/Town is required";
        }
        if (!formData.state) {
            newErrors.state = "State/Territory is required";
        }
        if (!formData.zipCode) {
            newErrors.zipCode = "Zipcode is required";
        }
        if (!formData.phone) {
            newErrors.phone = "Complainant Contact Phone Number is required";
        } else if (!/^\(\d{3}\)\s\d{3}-\d{4}$/.test(formData.phone)) {
            newErrors.phone = "Phone number must be in the format (123) 456-7890";
        }

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();

        if (!isValid) {
            return;
        }
        setIsModalOpen(true);
    };

    const SelectItem = React.forwardRef(
        ({ children, className, ...props }, forwardedRef) => {
            return (
                <Select.Item
                    className={`text-3 relative flex h-6 select-none items-center rounded-none px-5 py-5 leading-none text-black outline-none hover:bg-blue-50 focus:bg-blue-50 ${className || ""
                        }`}
                    {...props}
                    ref={forwardedRef}
                >
                    <Select.ItemText>{children}</Select.ItemText>
                    <Select.ItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center hover:bg-transparent">
                        <CheckIcon className="w-4 text-[#056791]" />
                    </Select.ItemIndicator>
                </Select.Item>
            );
        },
    );

    const formatPhoneNumber = (value) => {
        const cleaned = value.replace(/\D/g, ""); // Remove all non-digit characters
        const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
        if (!match) return value;
        let formatted = "";
        if (match[1]) formatted += `(${match[1]}`;
        if (match[1] && match[1].length === 3) formatted += ") ";
        if (match[2]) formatted += match[2];
        if (match[2] && match[2].length === 3) formatted += "-";
        if (match[3]) formatted += match[3];
        return formatted;
    };

    return (
        <>
            <main className="w-full lg:max-w-[80%] mx-auto">
                <div className="section-container py-5 px-5 ">
                    <section id="content" className="section ">
                        <h1 className="text-2xl lg:text-2xl font-medium text-[#056791] mb-2">Complainant Details</h1>
                        <div className="stepper lg:gap-37 relative flex gap-10 mb-5 before:absolute before:left-0 before:top-2/4 before:h-px lg:before:w-full before:w-11/12 before:-translate-y-2/4 before:bg-gray-400 before:content-[''] sm:gap-16 md:gap-20">
                            {/* Item */}
                            <div className="stepper-item z-1 relative rounded-full border border-solid border-[#056791] bg-white p-0.5">
                                <span className="relative flex size-6 items-center justify-center rounded-full border border-solid border-gray-400 bg-[#056791] text-sm text-white">
                                    <CheckIcon className="w-4 text-white" />
                                </span>
                            </div>
                            {/* Item */}
                            <div className="stepper-item z-1 relative rounded-full bg-white p-0.5">
                                <span className="relative flex size-6 items-center justify-center rounded-full border border-solid border-gray-400 bg-[#056791] text-sm text-white">
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

                        <Form.Root onSubmit={handleSubmit}>
                            {/* Anonymous Radio Group */}
                            <div className="border border-[#056791] rounded-lg p-5 lg:w-6/12">
                                <p className="font-bold text-[#056791]">Do you want to remain anonymous during this process?<span className="text-red-500"> *</span></p>
                                <RadioGroup.Root
                                    className="gap-5 flex justify-start items-center mt-3"
                                    value={formData.anonymous}
                                    onValueChange={(value) => handleChange("anonymous", value)}
                                    required
                                >
                                    <div className="mb-2.5 flex items-center text-[#056791]">
                                        <RadioGroup.Item
                                            className="size-5 cursor-pointer rounded-full border border-solid border-primary bg-transparent shadow-none outline-none"
                                            value="yes"
                                            id="anonymous-yes"
                                        >
                                            <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-2.5 after:rounded-full after:bg-[#056791]" />                                        </RadioGroup.Item>
                                        <label className="pl-2 text-sm" htmlFor="anonymous-yes">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="mb-2.5 flex items-center">
                                        <RadioGroup.Item
                                            className="size-5 cursor-pointer rounded-full border border-solid border-[#056791] bg-transparent shadow-none outline-none"
                                            value="no"
                                            id="anonymous-no"
                                        >
                                            <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-2.5 after:rounded-full after:bg-[#056791]" />                                      </RadioGroup.Item>
                                        <label className="pl-2 text-sm" htmlFor="anonymous-no">
                                            No
                                        </label>
                                    </div>
                                </RadioGroup.Root>
                                <p className="font-bold text-sm text-gray-600">Disclaimer: </p>
                                <p className="text-gray-600 text-sm">If you select yes, CMS will not share your Information with the Filed Against Entity (FAE) during the investigation process. However, information provided in this complaint is subject to rules and policies under the Freedom of Information Act (FOIA).</p>
                            </div>
                            {!formData.anonymous &&
                                errors.anonymous && (
                                    <p className="text-sm text-red-500">
                                        {errors.anonymous}
                                    </p>
                                )}

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
                                {!formData.organizationName &&
                                    errors.organizationName && (
                                        <p className="text-sm text-red-500">
                                            {errors.organizationName}
                                        </p>
                                    )}
                            </div>

                            {/* Organization Type */}
                            <div className="first-name mt-3">
                                <p className="mb-2 text-[#056791]">Complainant Organization Type</p>
                                <Select.Root
                                    value={formData.organizationType}
                                    onValueChange={(value) => handleChange("organizationType", value)}
                                >
                                    <Select.Trigger
                                        className="inline-flex h-12 w-full lg:w-6/12 items-center justify-between gap-2 rounded-none border border-solid border-[#056791] bg-white p-2.5 shadow-none outline-none"
                                        aria-label="Organization Type"
                                    >
                                        <Select.Value placeholder="Select organization type" />
                                        <Select.Icon className="text-primary">
                                            <ChevronDownIcon className="w-5" />
                                        </Select.Icon>
                                    </Select.Trigger>
                                    <Select.Portal>
                                        <Select.Content className="z-[50] mx-auto mt-11 w-full overflow-hidden rounded-lg  bg-white shadow-2xl">
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

                            {/* Organization Contact */}
                            <div className="first-name mt-3">
                                <p className="mb-2 text-[#056791]">Complainant Organization Phone Number<span className="text-red-500"> *</span></p>
                                <Form.Field name="organizationContact">
                                    <Form.Control asChild>
                                        <input
                                            className="box-border border-[#056791] inline-flex h-12 w-full lg:w-6/12 appearance-none items-center justify-center rounded-none border border-solid border-primary bg-white p-2.5 shadow-none outline-none"
                                            type="text"
                                            value={formData.organizationContact}
                                            onChange={(e) => {
                                                const formatted = formatPhoneNumber(e.target.value);
                                                handleChange("organizationContact", formatted);
                                            }}
                                            maxLength={14} // (123) 456-7890 = 14 characters
                                            placeholder="(123) 456-7890"
                                        />
                                    </Form.Control>
                                </Form.Field>
                                {
                                    errors.organizationContact && (
                                        <p className="text-sm text-red-500">
                                            {errors.organizationContact}
                                        </p>
                                    )}
                            </div>

                            {/* Title */}
                            <div className="first-name mt-3">
                                <p className="mb-2 text-[#056791]">Complainant Title<span className="text-red-500"> *</span></p>
                                <Select.Root
                                    value={formData.title}
                                    onValueChange={(value) => handleChange("title", value)}
                                    required
                                >
                                    <Select.Trigger
                                        className="inline-flex h-12 w-full lg:w-6/12 items-center justify-between gap-2 rounded-none border border-solid border-[#056791] bg-white p-2.5 shadow-none outline-none"
                                        aria-label="Title"
                                    >
                                        <Select.Value placeholder="Select title" />
                                        <Select.Icon className="text-primary">
                                            <ChevronDownIcon className="w-5" />
                                        </Select.Icon>
                                    </Select.Trigger>
                                    <Select.Portal>
                                        <Select.Content className="z-[50] mx-auto w-full overflow-hidden rounded-lg bg-white shadow-lg">                                            <Select.Viewport className="p-1">
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
                                {!formData.title &&
                                    errors.title && (
                                        <p className="text-sm text-red-500">
                                            {errors.title}
                                        </p>
                                    )}
                            </div>

                            {/* First Name */}
                            <div className="first-name mt-3">
                                <p className="mb-2 text-[#056791]">Complainant First Name<span className="text-red-500"> *</span></p>
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
                                {!formData.firstName &&
                                    errors.firstName && (
                                        <p className="text-sm text-red-500">
                                            {errors.firstName}
                                        </p>
                                    )}
                            </div>

                            {/* Middle Initial */}
                            <div className="first-name mt-3">
                                <p className="mb-2 text-[#056791]">Complainant Middle Initial</p>
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
                                <p className="mb-2 text-[#056791]">Complainant Last Name<span className="text-red-500"> *</span></p>
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
                                {!formData.lastName &&
                                    errors.lastName && (
                                        <p className="text-sm text-red-500">
                                            {errors.lastName}
                                        </p>
                                    )}
                            </div>

                            {/* Address Line 1 */}
                            <div className="first-name mt-3">
                                <p className="mb-2 text-[#056791]">Complainant Address Line 1<span className="text-red-500"> *</span></p>
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
                                {!formData.addressLine1 &&
                                    errors.addressLine1 && (
                                        <p className="text-sm text-red-500">
                                            {errors.addressLine1}
                                        </p>
                                    )}
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
                                <p className="mb-2 text-[#056791]">Complainant City/Town<span className="text-red-500"> *</span></p>
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
                                {!formData.city &&
                                    errors.city && (
                                        <p className="text-sm text-red-500">
                                            {errors.city}
                                        </p>
                                    )}
                            </div>

                            {/* State */}
                            <div className="first-name mt-3">
                                <p className="mb-2 text-[#056791]">Complainant State/Territory<span className="text-red-500"> *</span></p>
                                <Select.Root
                                    value={formData.state}
                                    onValueChange={(value) => handleChange("state", value)}
                                    required
                                >
                                    <Select.Trigger
                                        className="inline-flex h-12 w-full lg:w-6/12 items-center justify-between gap-2 rounded-none border border-solid border-[#056791] bg-white p-2.5 shadow-none outline-none"
                                        aria-label="State"
                                    >
                                        <Select.Value placeholder="Select state" />
                                        <Select.Icon className="text-primary">
                                            <ChevronDownIcon className="w-5" />
                                        </Select.Icon>
                                    </Select.Trigger>
                                    <Select.Portal>
                                        <Select.Content className="z-[50] mx-auto w-full  overflow-hidden rounded-lg bg-white shadow-lg">                                            <Select.Viewport className="p-1">
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
                                {!formData.state &&
                                    errors.state && (
                                        <p className="text-sm text-red-500">
                                            {errors.state}
                                        </p>
                                    )}
                            </div>

                            {/* Zip Code */}
                            <div className="first-name mt-3">
                                <p className="mb-2 text-[#056791]">Complainant Zip Code<span className="text-red-500"> *</span></p>
                                <div className="flex w-full lg:w-6/12 gap-2">
                                    {/* Zip Code */}
                                    <Form.Field name="zipCode" className="flex-1">
                                        <Form.Control asChild>
                                            <input
                                                className="box-border border-[#056791] h-12 w-full appearance-none items-center justify-center rounded-none border border-solid border-primary bg-white p-2.5 shadow-none outline-none text-sm"
                                                type="text"
                                                required
                                                value={formData.zipCode}
                                                maxLength={5}
                                                onChange={(e) => handleChange("zipCode", e.target.value)}
                                                placeholder="55555"
                                            />
                                        </Form.Control>
                                    </Form.Field>

                                    {/* Zip Code Extension */}
                                    <Form.Field name="zipCodeExt" className="w-[80px]">
                                        <Form.Control asChild>
                                            <input
                                                className="box-border border-[#056791] h-12 w-full appearance-none items-center justify-center rounded-none border border-solid border-primary bg-white p-2.5 shadow-none outline-none text-sm"
                                                type="text"
                                                placeholder="Ext."
                                                maxLength={5}
                                                value={formData.zipCodeExt || ""}
                                                onChange={(e) => handleChange("zipCodeExt", e.target.value)}
                                            />
                                        </Form.Control>
                                    </Form.Field>
                                </div>


                                {!formData.zipCode &&
                                    errors.zipCode && (
                                        <p className="text-sm text-red-500">
                                            {errors.zipCode}
                                        </p>
                                    )}
                            </div>

                            {/* Email */}
                            <div className="first-name mt-3">
                                <p className="mb-2 text-[#056791]">Complainant Email Address<span className="text-red-500"> *</span></p>
                                <Form.Field name="email">
                                    <Form.Control asChild>
                                        <input
                                            className="box-border border-[#056791] inline-flex h-12 w-full lg:w-6/12 appearance-none items-center justify-center rounded-none border border-solid border-primary bg-white p-2.5 shadow-none outline-none"
                                            type="email"
                                            required
                                            value={formData.email}
                                            placeholder="example@demo.com"
                                            onChange={(e) => handleChange("email", e.target.value)}
                                        />
                                    </Form.Control>
                                </Form.Field>
                                {
                                    errors.email && (
                                        <p className="text-sm text-red-500">
                                            {errors.email}
                                        </p>
                                    )}
                            </div>

                            {/* Phone */}
                            <div className="first-name mt-3">
                                <p className="mb-2 text-[#056791]">Complainant Contact Phone Number<span className="text-red-500"> *</span></p>
                                <div className="flex w-full lg:w-6/12 max-w-full flex-row gap-2">
                                    {/* Phone Input */}
                                    <Form.Field name="phone" className="flex-1">
                                        <Form.Control asChild>
                                            <input
                                                className="box-border border-[#056791] h-12 w-full appearance-none items-center justify-center rounded-none border border-solid border-primary bg-white p-2.5 shadow-none outline-none text-sm"
                                                type="text"
                                                value={formData.phone}
                                                onChange={(e) => {
                                                    const formatted = formatPhoneNumber(e.target.value);
                                                    handleChange("phone", formatted);
                                                }}
                                                maxLength={14}
                                                placeholder="(123) 456-7890"
                                            />
                                        </Form.Control>
                                    </Form.Field>

                                    {/* Phone Ext Input */}
                                    <Form.Field name="zipCodeExt" className="w-20">
                                        <Form.Control asChild>
                                            <input
                                                className="box-border border-[#056791] h-12 w-full appearance-none items-center justify-center rounded-none border border-solid border-primary bg-white p-2.5 shadow-none outline-none text-sm"
                                                type="text"
                                                placeholder="Ext."
                                                maxLength={5}
                                                value={formData.phoneExt || ""}
                                                onChange={(e) => handleChange("zipCodeExt", e.target.value)}
                                            />
                                        </Form.Control>
                                    </Form.Field>
                                </div>

                                {
                                    errors.phone && (
                                        <p className="text-sm text-red-500">
                                            {errors.phone}
                                        </p>
                                    )}
                            </div>

                            {/* Cell Phone */}
                            <div className="first-name mt-3">
                                <p className="mb-2 text-[#056791]">Complainant Cell Phone Number</p>
                                <Form.Field name="cellPhone">
                                    <Form.Control asChild>
                                        <input
                                            className="box-border border-[#056791] inline-flex h-12 w-full lg:w-6/12 appearance-none items-center justify-center rounded-none border border-solid border-primary bg-white p-2.5 shadow-none outline-none"
                                            type="text"
                                            value={formData.cellPhone}
                                            onChange={(e) => {
                                                const formatted = formatPhoneNumber(e.target.value);
                                                handleChange("cellPhone", formatted);
                                            }}
                                            maxLength={14} // (123) 456-7890 = 14 characters
                                            placeholder="(123) 456-7890"
                                        />
                                    </Form.Control>
                                </Form.Field>
                            </div>

                            <div className="flex lg:justify-end justify-center mt-6 lg:w-6/12">
                                <button className="border border-[#056791] px-5 py-3 text-[#056791] cursor-pointer rounded" onClick={() => navigate("/complaint-type")}>Previous</button>
                                <button className="bg-[#056791] px-5 py-3 text-white cursor-pointer rounded ml-8" onClick={(e) => handleSubmit(e)}>Register Complainant Details</button>
                            </div>
                        </Form.Root>
                    </section>
                </div>
            </main>

            {/* Modal to show form data */}
            <ComplainantForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} formData={formData} />

        </>
    );
}