export type SajuElementCounts = {
  [key in SajuKey]: number;
};

export type SajuKey = keyof typeof SA_JU_KOREAN_ELEMENT;
export type SajuElementKey = keyof typeof SA_JU_ELEMENT;

export interface SaJu {
  year: SajuKey;
  month: SajuKey;
  day: SajuKey;
  hour: SajuKey;
}

export interface DateOfBirth {
  year: number;
  month: number;
  day: number;
  hour: number;
}

export type RedeemElement = {
  [key in SajuKey]: SajuKey;
};

export type SajuResult = {
  dominantElement: SajuKey;
  redeemElement: SajuKey;
  neededElement?: SajuKey;
  avoidedElement: SajuKey;
  oppositeElement: SajuKey;
};

const heavenlyStems = [
  "갑",
  "을",
  "병",
  "정",
  "무",
  "기",
  "경",
  "신",
  "임",
  "계",
];
const earthlyBranches = [
  "자",
  "축",
  "인",
  "묘",
  "진",
  "사",
  "오",
  "미",
  "신",
  "유",
  "술",
  "해",
];

export const SA_JU_ELEMENT: { [key: string]: SajuKey } = {
  갑: "wood",
  을: "wood",
  병: "fire",
  정: "fire",
  무: "earth",
  기: "earth",
  경: "metal",
  신: "metal",
  임: "water",
  계: "water",
  자: "water",
  축: "earth",
  인: "wood",
  묘: "wood",
  진: "earth",
  사: "fire",
  오: "fire",
  미: "earth",
  유: "metal",
  술: "earth",
  해: "water",
} as const;

export const SA_JU_KOREAN_ELEMENT = {
  wood: "목",
  fire: "화",
  earth: "토",
  metal: "금",
  water: "수",
} as const;

export const SA_JU_REDEEM_ELEMENT: RedeemElement = {
  water: "wood",
  wood: "fire",
  earth: "metal",
  fire: "earth",
  metal: "water",
};

export const SA_JU_OPPOSITE_ELEMENT: RedeemElement = {
  water: "earth",
  wood: "metal",
  earth: "wood",
  fire: "water",
  metal: "fire",
};

export function getGanZhiIndex(year: number): number {
  return (year - 4) % 60;
}

export function getHeavenlyStem(index: number): string {
  return heavenlyStems[index % 10];
}

export function getEarthlyBranch(index: number): string {
  return earthlyBranches[index % 12];
}

export function getYearGanZhi(year: number): string {
  const index = getGanZhiIndex(year);
  return getHeavenlyStem(index) + getEarthlyBranch(index);
}

export function getMonthGanZhi(year: number, month: number): string {
  // Simplified calculation for the purpose of this example
  const index = (year * 12 + month) % 60;
  return getHeavenlyStem(index) + getEarthlyBranch(index);
}

export function getDayGanZhi(year: number, month: number, day: number): string {
  // Simplified calculation for the purpose of this example
  const index = (year * 360 + month * 30 + day) % 60;
  return getHeavenlyStem(index) + getEarthlyBranch(index);
}

export function getHourGanZhi(dayGanZhi: string, hour: number): string {
  const dayStem = heavenlyStems.indexOf(dayGanZhi.charAt(0));
  const index = (dayStem * 2 + Math.floor((hour + 1) / 2)) % 10;
  return (
    getHeavenlyStem(index) + earthlyBranches[Math.floor((hour + 1) / 2) % 12]
  );
}

export function calculateSaJu(dob: DateOfBirth): {
  year: string;
  month: string;
  day: string;
  hour: string;
} {
  const yearGanZhi = getYearGanZhi(dob.year);
  const monthGanZhi = getMonthGanZhi(dob.year, dob.month);
  const dayGanZhi = getDayGanZhi(dob.year, dob.month, dob.day);
  const hourGanZhi = getHourGanZhi(dayGanZhi, dob.hour);

  return {
    year: yearGanZhi,
    month: monthGanZhi,
    day: dayGanZhi,
    hour: hourGanZhi,
  };
}

export function getElementCounts(saJu: SaJu): SajuElementCounts {
  const counts: SajuElementCounts = {
    wood: 0,
    fire: 0,
    earth: 0,
    metal: 0,
    water: 0,
  };
  const allElements = [saJu.year, saJu.month, saJu.day, saJu.hour];
  allElements.forEach((ganZhi) => {
    counts[SA_JU_ELEMENT[ganZhi.charAt(0)] as SajuKey]++;
    counts[SA_JU_ELEMENT[ganZhi.charAt(1)] as SajuKey]++;
  });
  return counts;
}

export function analyzeElements(fourPillars: SajuElementCounts): SajuResult {
  const sortedElements = Object.entries(fourPillars).sort(
    (a, b) => b[1] - a[1],
  );

  const dominantElement = sortedElements[0][0] as SajuKey;
  const neededElement = sortedElements.find((entry) => entry[1] === 0)?.[0] as
    | SajuKey
    | undefined;
  const avoidedElement = sortedElements[0][0] as SajuKey;

  return {
    dominantElement,
    redeemElement: SA_JU_REDEEM_ELEMENT[dominantElement],
    neededElement,
    avoidedElement,
    oppositeElement: SA_JU_OPPOSITE_ELEMENT[dominantElement],
  };
}
