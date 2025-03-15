import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { useSession } from "next-auth/react";

async function fetchQuery({ queryKey }: any) {
  const [_key, { token, endpoint, id }] = queryKey;

  try {
    const response = await api(token).get(`${endpoint}/${id}`);
    return response.data ?? {}; // Ensure default value is returned
  } catch (error) {
    console.error("Error fetching data:", error);
    return {}; // Return empty object instead of undefined
  }
}

interface Props {
  variables: { key: string; id: number | string };
  endpoint: string;
  enabled?: boolean;
}

export const useGetOneQuery = ({ variables, endpoint, enabled }: Props) => {
  const { data: session } = useSession();
  const token = session?.user?.token || ""; // ✅ Get token from session

  const isEnabled = enabled ?? !!token;

  return useQuery({
    queryKey: [variables.key, { token, endpoint, id: variables.id }],
    queryFn: fetchQuery,
    enabled: isEnabled,
  });
};
