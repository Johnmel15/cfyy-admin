import { useMutation, UseMutationResult } from "@tanstack/react-query";
import api from "@/lib/api";
import { useSession } from "next-auth/react";

interface UploadArgs {
  endpoint: string;
  formData: FormData;
}

const uploadData = async ({ endpoint, formData }: UploadArgs) => {
  const { data: session } = useSession();
  const token = session?.user?.token || ""; // ✅ Get token from session

  const apiClient = api(token);
  const response = await apiClient.post(endpoint, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const useUploadQuery = (): UseMutationResult<any, Error, UploadArgs> => {
  return useMutation({
    mutationFn: uploadData,
  });
};
