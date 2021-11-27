const fs = require('fs');

fs.readFile('./logs/logs_0.json', function (error, content) {
  let data = JSON.parse(content);
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
  console.log(result);
  return result;
});
