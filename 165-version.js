function compareVersion(version1, version2) {
  const parts1 = version1.split(".");
  const parts2 = version2.split(".");

  const n = Math.max(parts1.length, parts2.length);

  for (let i = 0; i < n; i++) {
    // parseInt 明确指定为十进制，不会有空格
    const num1 = version1.length > i ? parseInt(parts1[i], 10) : 0;
    const num2 = version2.length > i ? parseInt(parts2[i], 10) : 0;

    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }

  return 0;
}

console.log(compareVersion("1.0", "1.000"));
