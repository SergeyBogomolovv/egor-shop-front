import { $api } from "@/lib/api";
import { productSchema } from "@/lib/types";
import { z } from "zod";
import { useQuery } from "@tanstack/react-query";

export const useGetTickets = () => {
  return useQuery({
    queryKey: ["tickets"],
    queryFn: async () => {
      const { data } = await $api.get("/tickets");
      return z.array(productSchema).parse(data);
    },
  });
};
