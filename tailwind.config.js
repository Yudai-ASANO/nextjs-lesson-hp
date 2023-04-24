/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // デプロイ時に必要なファイルのみのCSSを作成してくれるものになる
    // ビルド時に未使用のクラスを削除することになるので、最終的なCSSファイルのサイズが大幅に縮小されて、パフォーマンスが向上する。
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
