const months = ["January", "February", "March", "April", "May", "December"];
const capitalMonths = myFilter(months, (month) => {
  return month.includes("u");
});

