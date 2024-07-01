import { SaJuElement, SajuResult } from "@/lib/saju";
import { create } from "zustand";
import { createJSONStorage, persist, devtools } from "zustand/middleware";
type UserValueType = {
  user?: {
    name: string;
    result: SajuResult;
    saju: SaJuElement;
  };
};

type UserType = UserValueType & {};

const initialUserState: UserValueType = {
  user: undefined,
};

export const useUserStore = create<UserType>()(
  devtools(
    persist(
      () => ({
        ...initialUserState,
      }),
      {
        name: "UserStore",
      },
    ),
  ),
);
