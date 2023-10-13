module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    "no-unused-vars": "off", // 사용하지 않는 변수 경고 끄기
    indent: ["error", 2], // 들여쓰기 스타일 설정 (2칸 들여쓰기)
    semi: ["error", "always"], // 세미콜론(;) 사용 강제 설정
  },
};
