import { config } from "@tamagui/config/v3";
import { createTamagui } from "tamagui";
import { tokens } from "@tamagui/config/v3";
import { themes } from "./theme-builder";

export const tamaguiConfig = createTamagui({
  ...config,
  themes,
  tokens,
});

export default tamaguiConfig;

export type Conf = typeof tamaguiConfig;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
