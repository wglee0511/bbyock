import { SajuKey } from "../lib/saju";

export const COLORS_SA_JU: SajuColor = {
  wood: "#47DD00",
  earth: "#FFF502",
  metal: "#FFFFFF",
  water: "#000000",
  fire: "#FF0202",
};

export const COLORS_SA_JU_KOREAN: SajuColor = {
  wood: "초록색",
  earth: "노랑색",
  metal: "흰색",
  water: "검은색",
  fire: "빨강색",
};

type SajuColor = {
  [key in SajuKey]: string;
};
