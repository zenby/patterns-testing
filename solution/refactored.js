function printTable(data) {
  if (!data) return;

  const table = [];
  let max = 0;

  const lines = data.trim().split('\n').slice(1);
  if (lines.length === 0) return;

  for (const line of lines) {
    const tableRow = getTableRowData(line);
    table.push(tableRow);

    const d = parseInt(tableRow[3]);
    max = Math.max(max, d);
  }

  for (const row of table) {
    const a = Math.round((row[3] * 100) / max);
    row.push(a.toString());
  }

  const printData = sortByDensity(table).map(buildFormattedRow).join('\n');
  console.log(printData);
}

function getTableRowData(line) {
  const [city, population, area, density, country] = line.trim().split(',');

  return [city, population, area, density, country];
}

function buildFormattedRow(row) {
  let s = row[0].padEnd(18);
  s += row[1].padStart(10);
  s += row[2].padStart(8);
  s += row[3].padStart(8);
  s += row[4].padStart(18);
  s += row[5].padStart(6);

  return s;
}

function sortByDensity(arr) {
  return arr.toSorted((r1, r2) => r2[5] - r1[5]);
}

export default printTable;
