import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "FINTEENS",
  description:
    "Master financial literacy with interactive lessons, quizzes, and progress tracking for teens.",
  icons: {
    icon: "/newLogo.png",
    apple: "/newLogo.png",
  },
  keywords: [
    "finteens",
    "financial-literacy",
    "teens",
    "money",
    "finance-education",
    "reactjs",
    "nextjs",
    "vercel",
    "shadcn-ui",
    "postgresql",
    "drizzle",
    "clerk",
    "tailwindcss",
  ] as Array<string>,
  authors: {
    name: "Sanidhya Kumar Verma",
    url: "https://github.com/sanidhyy",
  },
} as const;

export const links = {
  sourceCode:
    "https://github.com/HackIndiaXYZ/hackindia-spark-7-north-region-coders-against-humanity",
  email: "sanidhya.verma12345@gmail.com",
} as const;
