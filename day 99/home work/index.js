function mostFrequentDigitSum(n) {
  let result = n;
  const digitsSumArr = [];

  while (result !== 0) {
    let digitsSum = 0;
    const strN = String(result);

    for (let i = 0; i < strN.length; i++) {
      digitsSum += parseInt(strN[i]);
    }

    result -= digitsSum;

    digitsSumArr.push(digitsSum);
  }


  const frequencyMap = {};
  let maxFreq = 0;
  let mostFrequent = 0;

  for (const sum of digitsSumArr) {
    frequencyMap[sum] = (frequencyMap[sum] || 0) + 1;

    if (
      frequencyMap[sum] > maxFreq ||
      (frequencyMap[sum] === maxFreq && sum > mostFrequent)
    ) {
      maxFreq = frequencyMap[sum];
      mostFrequent = sum;
    }
  }

  return mostFrequent;
}
