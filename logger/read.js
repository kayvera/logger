const fs = require('fs');
const path = require('path');

const dirPath = './logs';

const createTally = (data) => {
  const result = Array.from(
    data.logs
      .reduce((acc, o) => {
        if (!acc.has(o.email))
          acc.set(o.email, {
            Email: o.email,
            Tally: 0,
          });
        const item = acc.get(o.email);
        if (acc.has(o.email)) item.Tally += 1;
        return acc;
      }, new Map())
      .values()
  );
  return result;
};

const createLogData = () => {
  const files = fs.readdirSync(dirPath);

  files.forEach((val, i) => {
    let data = JSON.parse(fs.readFileSync(path.join(dirPath, val), 'utf8'));
    let tallyData = createTally(data);
    let logMsg = {
      id: data.id,
      tally: [],
    };
    logMsg.tally.push(...tallyData);
    console.log(logMsg);
  });
};

createLogData();
