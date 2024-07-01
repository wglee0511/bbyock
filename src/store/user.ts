import { SajuResult } from "@/lib/saju";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type UserValueType = {
  user?: {
    name: string;
    result: SajuResult;
  };
};

type UserType = UserValueType & {};

const initialUserState: UserValueType = {
  user: undefined,
};

export const useUserStore = create<UserType>()(
  devtools(
    () => ({
      ...initialUserState,
    }),
    {
      name: "UserStore",
    },
  ),
);
