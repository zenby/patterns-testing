function printTable(data) {
  if (!data) return;

  const table = [];
  let max = 0;

  const lines = data.trim().split('\n').slice(1);
  for (const line of lines) {
    const [city, population, area, density, country] = line.trim().split(',');
    const d = parseInt(density);
    max = Math.max(max, d);
    table.push([city, population, area, density, country]);
  }

  for (const row of table) {
    const a = Math.round((row[3] * 100) / max);
    row.push(a.toString());
  }

  table.sort((r1, r2) => r2[5] - r1[5]);

  for (const row of table) {
    let s = row[0].padEnd(18);
    s += row[1].padStart(10);
    s += row[2].padStart(8);
    s += row[3].padStart(8);
    s += row[4].padStart(18);
    s += row[5].padStart(6);
    console.log(s);
  }
}

export default printTable;
