import { SajuKey } from "../lib/saju";

export const COLORS_SA_JU: SajuColor = {
  wood: "#47DD00",
  earth: "#FFF502",
  metal: "#FFFFFF",
  water: "#000000",
  fire: "#FF0202",
};

type SajuColor = {
  [key in SajuKey]: string;
};
