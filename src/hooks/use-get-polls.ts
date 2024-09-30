import { $api } from "@/lib/api";
import { z } from "zod";
import { useQuery } from "@tanstack/react-query";
import { pollSchema } from "@/lib/types";

export const useGetPolls = () => {
  return useQuery({
    queryKey: ["polls"],
    queryFn: async () => {
      const { data } = await $api.get("/polls");
      return z.array(pollSchema).parse(data);
    },
  });
};
