import { useMutation } from "@tanstack/react-query";
import { fetchData } from "@/app/utils/fetchData";

import { ContactUsPayload } from "../types";

import toast from "react-hot-toast";
import { AxiosErrorResponse, transformError } from "@/app/utils/utils";

export const useContactUs = () => {
  return useMutation<Response, AxiosErrorResponse, ContactUsPayload>({
    mutationFn: (payload) =>
      fetchData<ContactUsPayload>("/contact/", "POST", payload),
    onSuccess: () => {
      toast.success("Request sent.");
    },
    onError: (error) => {
      toast.error(transformError(error));
    },
  });
};
