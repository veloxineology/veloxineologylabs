import { USER } from "@/data/user";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://veloxineologylabs.vercel.app",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const SOURCE_CODE_GITHUB_URL = "https://github.com/veloxineology";

export const VIETNAM_HOLIDAYS = [
  "2025-03-08", // Ngày Quốc tế Phụ nữ
  "2025-04-07", // Ngày Giỗ Tổ Hùng Vương
  "2025-04-30", // Ngày Giải phóng Miền Nam
  "2025-05-01", // Ngày Quốc tế Lao động
  "2025-09-02", // Ngày Quốc khánh Việt Nam
  "2025-11-20", // Ngày Nhà giáo Việt Nam
];
