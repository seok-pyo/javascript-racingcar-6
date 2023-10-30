import MESSAGE from '../utils/constants.js';
import computer from '../utils/console.js';

const printResult = (finalRecord, lapLength) => {
  const winner = [];
  // 우승자 판단 로직
  finalRecord.forEach((record) => {
    const countLength = record.lastIndexOf('-') - record.indexOf('-') + 1;
    // const carName = record.split(' ');
    const carSplitIndex = record.indexOf(':') - 1;
    if (countLength === lapLength) winner.push(record.substring(0, carSplitIndex));
  });
  if (winner.length === 0) computer.tell(MESSAGE.NO_WINNER);
  else computer.tell(`${MESSAGE.FINAL_WINNER + winner.join(', ')}`);
};

export default printResult;
