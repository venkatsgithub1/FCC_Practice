
function factorialize(num) {
  if (num===0) return 1;
  return num*factorialize(--num);
}

factorialize(5);
