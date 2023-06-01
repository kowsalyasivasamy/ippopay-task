const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{6,20}$/;
const repeatCharsRegex = /(.)\1{2,}/;

const getRepeatCount = (password) => {
  let repeatCount = 0;
  for (let i = 0; i < password.length; i++) {
    let currentChar = password[i];
    let nextChar = password[i + 1];
    let nextNextChar = password[i + 2];

    if (currentChar === nextChar && currentChar === nextNextChar) {
      // Identifying same consecutive 3 letters
      let count = 3;
      while (password[i] === password[i + count]) {
        count++;
      }
      repeatCount += Math.floor(count / 3);
      i = i + count - 1;
    }
  }
  return repeatCount;
};

export const getMinimalStepCount = (password) => {
  const passwordlen = password.length;

  if (passwordlen > 0) {
    // If password is already strong return 0(stepcount)
    if (passwordRegex.test(password) && !repeatCharsRegex.test(password)) {
      return 0;
    } else {
      const lower = /[a-z]/.test(password) ? 0 : 1;
      const upper = /[A-Z]/.test(password) ? 0 : 1;
      const digit = /[0-9]/.test(password) ? 0 : 1;
      const mustAdd = lower + upper + digit;

      let repeatCount = getRepeatCount(password),
        deleteCount,
        addCount;

      // If password length is greater than 20
      if (passwordlen > 20) {
        deleteCount = passwordlen - 20;
        // remove repeatives and then subtract repeatCount from deletecount
        if (repeatCount) {
          const remainingRepeating = repeatCount * 3 - deleteCount;
          return (
            Math.max(Math.floor(remainingRepeating / 3), mustAdd) + deleteCount
          );
        }
        return deleteCount; // just remove chars as per deletecount
      }

      // If password length is less than 6 find the max of mustAdd & addCount
      else if (passwordlen < 6) {
        addCount = 6 - passwordlen;
        return Math.max(mustAdd, addCount);
      }

      // If password length >=6 and <= 20
      else {
        // Repeatives replaced with mustAdd case also handled here
        return Math.max(repeatCount, mustAdd);
      }
    }
  } else {
    return 6;
  }
};
