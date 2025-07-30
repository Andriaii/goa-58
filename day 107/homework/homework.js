// function birthdayInfo(birthDateStr) {
//   const birthDate = new Date(birthDateStr);
//   const today = new Date();

//   // ასაკის გამოთვლა
//   let age = today.getFullYear() - birthDate.getFullYear();
//   const thisYearBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());

//   // თუ დაბადების დღე ჯერ არ დამდგარა წელს
//   if (today < thisYearBirthday) {
//     age--;
//   }

//   // შემდეგ დაბადების დღემდე დღეების გამოთვლა
//   let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
//   if (today > nextBirthday) {
//     nextBirthday.setFullYear(today.getFullYear() + 1);
//   }

//   const diffTime = nextBirthday - today;
//   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // მილიწამებიდან დღეებში

//   return {
//     age,
//     daysUntilNextBirthday: diffDays
//   };
// }







// function calculateWorkHours(startTime, endTime) {
//   const [startHours, startMinutes] = startTime.split(":").map(Number);
//   const [endHours, endMinutes] = endTime.split(":").map(Number);

//   const startDate = new Date(0, 0, 0, startHours, startMinutes);
//   const endDate = new Date(0, 0, 0, endHours, endMinutes);

//   // თუ დასასრული დრო წინა დღეზეა (მაგ: ღამის ცვლა)
//   if (endDate < startDate) {
//     endDate.setDate(endDate.getDate() + 1);
//   }

//   const diffMs = endDate - startDate;
//   const hours = Math.floor(diffMs / (1000 * 60 * 60));
//   const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

//   return {
//     hours,
//     minutes
//   };
// }







function getGeorgianWeekday(dateStr) {
  const days = [
    "კვირა",
    "ორშაბათი",
    "სამშაბათი",
    "ოთხშაბათი",
    "ხუთშაბათი",
    "პარასკევი",
    "შაბათი"
  ];
  const date = new Date(dateStr);
  return days[date.getDay()];
}
