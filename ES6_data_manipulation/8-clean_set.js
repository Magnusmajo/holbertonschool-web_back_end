function cleanSet(mySet, startString) {
  const filValue = Array.from(mySet).filter((value) => value.startsWith(startString));
  return filValue.join("-");
}
