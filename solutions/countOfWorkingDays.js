// const firstDate = new Date();
// const secondDate = new Date();
let acc = 0
let days = 0
const countOfWorkingDays = (firstDate, secondDate) => {
  if (firstDate.getTime() > secondDate.getTime()) {
    throw new Error('The first parameter is earlier date, than second!')
  } else {
    days = (secondDate.getTime() - firstDate.getTime()) / 1000 / 60 / 60 / 24 + 1
    const actualday = firstDate.getDate()
    let controldate = new Date()

    for (let index = 0; index < days; index++) {
      controldate = new Date(firstDate.getFullYear(), firstDate.getMonth(), actualday + index)
      // console.log(controldate);
      if (days === 1) acc = 1; else if
      (controldate.getDay() === (0) || controldate.getDay() === 6) {
        acc = acc + 0
      } else {
        acc = acc + 1
      };
    }
  }
  console.log(acc)

  return acc
}

// countOfWorkingDays(firstDate, secondDate);

export default countOfWorkingDays
