"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Control, useForm } from "react-hook-form";
import React from "react";

import { ContactUsInputType, contactUsSchema } from "../utils/validationSchema";
import { InputFieldPhoneNo } from "@/app/components/form/InputFieldPhoneNo";
import { TextAreaField } from "@/app/components/form/TextAreaField";
import { useContactUs } from "../features/contact/api/useContact";
import { InputField } from "@/app/components/form/InputField";
import { ContactUsPayload } from "../features/contact/types";
import { Button } from "@/app/components/elements/Button";
import { blobToBase64 } from "../utils/utils";

export const ContactUsForm = () => {
  const { mutate, isPending } = useContactUs();
  const {
    reset,
    watch,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactUsInputType>({
    resolver: zodResolver(contactUsSchema),
  });

  const onSubmit = async (values: ContactUsInputType) => {
    const file = values.screenshot?.[0];
    let base64: string | null = null;
    if (file) {
      base64 = await blobToBase64(file);
    }

    const payload: ContactUsPayload = {
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      phone_number: values.phone || "",
      screenshot_base64: base64 || "",
    };
    mutate(payload, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-black pt-[65px] text-[16px] sm:text-[20px] md:pl-8 xl:pl-16 overflow-y-auto"
    >
      <div>
        <h3 className="text-base">FILL OUT OUR SIMPLE ORDER FORM</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 text-sm">
        <div className="mt-4">
          <label htmlFor="firstName" className="text-[#817D7C]">
            First Name *
          </label>
          <InputField
            registration={{ ...register("firstName") }}
            hasError={errors.firstName}
            className="mt-2"
            isRequired
          />
        </div>
        <div className="mt-4">
          <label htmlFor="lastName" className="text-[#817D7C]">
            Last Name *
          </label>
          <InputField
            registration={{ ...register("lastName") }}
            hasError={errors.lastName}
            className="mt-2"
            isRequired
          />
        </div>
        <div className="mt-4 col-span-2">
          <label htmlFor="email" className="text-[#817D7C]">
            Email
          </label>
          <InputField
            registration={{ ...register("email") }}
            hasError={errors.email}
            className="mt-2"
            isRequired
          />
        </div>
        <div className="mt-4 col-span-2">
          <label htmlFor="phone" className="text-[#817D7C]">
            Phone number *
          </label>
          <InputFieldPhoneNo
            control={control as unknown as Control}
            className="mt-2"
            name="phone"
            hasError={errors.phone}
            errorMessage={errors.phone?.message}
            isRequired
          />
        </div>
        <div className="col-span-2 mt-5">
          <label htmlFor="screenshot" className="text-[#817D7C]">
            Attach a screenshot of your shopping cart
          </label>

          <div className="relative mt-3">
            <input
              type="file"
              id="screenshot"
              accept=".pdf,.png,.jpg,.jpeg,.webp"
              {...register("screenshot")}
              className="absolute inset-0 opacity-0 z-10 cursor-pointer"
            />

            <div className="text-xs h-[40px] px-4 text-center rounded-[3px] flex items-center justify-center border border-black bg-white cursor-pointer">
              CHOOSE FILE (.pdf, .png, .jpg)
            </div>
          </div>
          {watch("screenshot")?.[0] && (
            <p className="text-sm mt-2 text-gray-600">
              Selected: {watch("screenshot")[0].name}
            </p>
          )}
        </div>
        <div className="mt-4 col-span-2">
          <label htmlFor="message" className="text-[#817D7C]">
            More details on order
          </label>
          <TextAreaField
            id="message"
            registration={{ ...register("message") }}
            hasError={errors.message}
            className="resize-none text-sm w-full"
            labelClassName="!mb-1"
            isRequired
            rows={3}
            placeholder="Write your message here..."
          />
        </div>
        <p className="mt-3 col-span-2 text-left">
          Vamp Drop will need your personal information in order to be able to
          respond to your order and track delivery of your products. <br />
          <br /> For more information, reach out to us on support@vampdrop.com
        </p>
      </div>
      <Button
        isLoading={isPending}
        type="submit"
        className="mt-3 w-full !text-sm uppercase !mb-10"
        disabled={isPending}
      >
        {isPending ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};
