import { useMutation, UseMutationResult } from "@tanstack/react-query";
import api from "@/lib/api";
import { useSession } from "next-auth/react";

interface MutationArgs {
  endpoint: string;
  variables: any;
}

const patchData = async ({ endpoint, variables }: MutationArgs) => {
  const { data: session } = useSession();
  const token = session?.user?.token || ""; // ✅ Get token from session

  const apiClient = api(token); // ✅ Call api() to get Axios instance
  const response = await apiClient.patch(endpoint, variables);
  return response.data;
};

export const usePatchQuery = (): UseMutationResult<
  any,
  Error,
  MutationArgs
> => {
  return useMutation({
    mutationFn: patchData,
  });
};
