import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "blackFade",
  colors: {
    whiteFade: [
      "rgba(255, 255, 255, 1)", // 100% 白
      "rgba(255, 255, 255, 0.9)",
      "rgba(255, 255, 255, 0.8)",
      "rgba(255, 255, 255, 0.7)",
      "rgba(255, 255, 255, 0.6)",
      "rgba(255, 255, 255, 0.5)",
      "rgba(255, 255, 255, 0.4)",
      "rgba(255, 255, 255, 0.3)",
      "rgba(255, 255, 255, 0.2)",
      "rgba(255, 255, 255, 0)", // 完全透明
    ],
    blackFade: [
      "rgba(0, 0, 0, 1)",
      "rgba(0, 0, 0, 0.9)",
      "rgba(0, 0, 0, 0.8)",
      "rgba(0, 0, 0, 0.7)",
      "rgba(0, 0, 0, 0.6)",
      "rgba(0, 0, 0, 0.5)",
      "rgba(0, 0, 0, 0.4)",
      "rgba(0, 0, 0, 0.3)",
      "rgba(0, 0, 0, 0.2)",
      "rgba(0, 0, 0, 0)",
    ],
  },
  components: {
    Switch: {
      vars: () => {
        return {
          track: {
            "--switch-bg": "var(--mantine-color-text)",
            "--switch-thumb-bg": "var(--mantine-color-body)",
            "--switch-text-color": "var(--mantine-color-body)",
          },
        };
      },
    },
  },
});
