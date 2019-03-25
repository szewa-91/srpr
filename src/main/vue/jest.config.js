module.exports = {
  moduleFileExtensions: [
    "scss",
    "js",
    "jsx",
    "json",
    "vue",
    "ts",
    "tsx"
  ],
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  snapshotSerializers: [
    "jest-serializer-vue"
  ],
  testMatch: [
    "**/tests/**/*.(ts|tsx)|**/tests/*.(ts|tsx)"
  ],
  testURL: "http://localhost/",
  globals: {
    "ts-jest": {
      babelConfig: true
    }
  }
};
