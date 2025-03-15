import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

async function fetchQuery({ queryKey }: any) {
  const [_key, { token, endpoint }] = queryKey;

  try {
    const response = await api(token).get(endpoint);
    return response.data ?? [];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
}

interface Props {
  variables: { key: string };
  endpoint: string;
  enabled?: boolean;
}

export const useGetAllQuery = ({ variables, endpoint, enabled }: Props) => {
  const { data: session } = useSession();
  const token = session?.user?.token || ""; // Get token from session

  const isEnabled = enabled ?? !!token;

  return useQuery({
    queryKey: [variables.key, { token, endpoint }],
    queryFn: fetchQuery,
    enabled: isEnabled,
  });
};
