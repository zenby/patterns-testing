function printTable(text) {
  if (!text) return;

  const lines = text.trim().split('\n').slice(1);
  const table = lines.map(getTableRowData);
  if (table.length === 0) return;

  const tableWithDensity = buildTableWithDensity(table);
  const sortedTable = sortTableByDensity(tableWithDensity);
  const output = cookPrintData(sortedTable);
  console.log(output);
}

function buildTableWithDensity(table) {
  const maxDensity = findMaxInColumn(table, 3);

  return table.map((row) => {
    const densityPercentage = Math.round((row[3] * 100) / maxDensity);
    return [...row, densityPercentage.toString()];
  });
}

function findMaxInColumn(table, index) {
  return table.reduce((max, row) => Math.max(max, row[index]), 0);
}

function getTableRowData(line) {
  const [city, population, area, density, country] = line.trim().split(',');

  return [city, population, area, density, country];
}

function cookPrintData(table) {
  return table.map(buildFormattedRow).join('\n');
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

function sortTableByDensity(arr) {
  return arr.toSorted((r1, r2) => r2[5] - r1[5]);
}

export default printTable;
