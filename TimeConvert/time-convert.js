const TimeConverter = num => {
  const hrs = Math.floor(num / 60);
  const mins = num % 60;
  console.log(hrs + ':' + mins);
}

TimeConverter(126);