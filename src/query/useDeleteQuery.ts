import { useMutation, UseMutationResult } from "@tanstack/react-query";
import api from "@/lib/api";
import { useSession } from "next-auth/react";

interface DeleteArgs {
  endpoint: string;
}

const deleteData = async ({ endpoint }: DeleteArgs) => {
  const { data: session } = useSession();
  const token = session?.user?.token || ""; // ✅ Get token from session

  const apiClient = api(token);
  const response = await apiClient.delete(endpoint);
  return response.data;
};

export const useDeleteQuery = (): UseMutationResult<any, Error, DeleteArgs> => {
  return useMutation({
    mutationFn: deleteData,
  });
};
