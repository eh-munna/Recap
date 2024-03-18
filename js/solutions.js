/* 

বাকে র ভাই মি রপুর চি ড়ি য়াখানার ম্যানে জার । প্রতি দি ন তাকে অসংখ্য টি কে ট বি ক্রি করতে হয় । টাকার হি সে ব এ
তি নি সবসময় গড়মি ল বাধি য়ে ফে লে ন । তুমি যে হে তুসদ্য ডে ভে ল োপার হচ্ছ ো বাকে র ভাই ত োমার কাছে একটি
হে ল্প চে য়ে ছে । বাকে র ভাই কে calculateMoney( ) নামে একটি ফাংশন বানি য়ে দি তে হবে যাকে প্রতি দি ন
টি কে ট সে ল করার সংখ্যা ইনপুট দি লে সে সকল খরচ বাদ দি য়ে ম োট কত টাকা বাকে র ভাইর কাছে থাকে তা বলে
দি তে পারে ।

চি ড়ি য়াখানায় প্রতি টি কে ট বি ক্রি হয় ১২০ টাকায় । আর ব্যয় এর মধ্যে প্রতি দি ন ১ জন দার োয়ান কে দি তে হয় ৫০০
টাকা এবং ৮ জন স্টাফ কে লাঞ্চ করান োর জন্যে খরচ হয় জনপ্রতি ৫০ টাকা করে ।


*/

const calculateMoney = (numberOfTickets) => {
  if (numberOfTickets < 0) {
    return `Please provide a positive number more than 0`;
  } else {
    const singleTicketPrice = 120;
    const totalTicketPrice = numberOfTickets * singleTicketPrice;
    const guardSalary = 500;
    const totalStuff = 8;
    const lunchCost = totalStuff * 50;
    const totalExpenses = guardSalary + lunchCost;
    const remainingMoney = totalTicketPrice - totalExpenses;
    return remainingMoney;
  }
};

console.log(calculateMoney(10));

const checkName = (name) => {
  const nameCase = name.toLowerCase();
  if (
    nameCase[nameCase.length - 1] === 'a' ||
    nameCase[nameCase.length - 1] === 'y' ||
    nameCase[nameCase.length - 1] === 'i' ||
    nameCase[nameCase.length - 1] === 'e' ||
    nameCase[nameCase.length - 1] === 'o' ||
    nameCase[nameCase.length - 1] === 'u' ||
    nameCase[nameCase.length - 1] === 'w'
  ) {
    return `Good Name`;
  }
  return `Bad Name`;
};

const letters = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
const checkName2 = (name) => {
  const nameCase = name.toLowerCase();
  for (let i = 0; i < letters.length; i++) {
    if (nameCase[nameCase.length - 1] === letters[i]) {
      return `Good Name`;
    }
  }
  return `Bad Name`;
};
const checkName3 = (name) => {
  const nameCase = name.toLowerCase();
  const lastChar = nameCase[nameCase.length - 1];
  if (letters.includes(lastChar)) {
    return `Good Name`;
  }
  return `Bad Name`;
};
