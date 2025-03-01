import { expect, test, describe, vi, afterAll, beforeEach } from 'vitest';
import printTable from './refactored.js';

const data = `city,population,area,density,country
Shanghai,24256800,6340,3826,China
Delhi,16787941,1484,11313,India
Lagos,16060303,1171,13712,Nigeria
Istanbul,14160467,5461,2593,Turkey
Tokyo,13513734,2191,6168,Japan
Sao Paulo,12038175,1521,7914,Brazil
Mexico City,8874724,1486,5974,Mexico
London,8673713,1572,5431,United Kingdom
New York City,8537673,784,10892,United States
Bangkok,8280925,1569,5279,Thailand`;

describe('printTable', () => {
  const consoleMock = vi.spyOn(console, 'log');

  beforeEach(() => {
    consoleMock.mockReset();
  });

  afterAll(() => {
    consoleMock.mockReset();
  });

  test('prints nothing for only header passed', () => {
    printTable(`city,population,area,density,country`);

    expect(consoleMock).toHaveBeenCalledTimes(0);
  });

  test('omits last item in data passed', () => {
    printTable(`city,population,area,density,country
      Bangkok,8280925,1569,5279,Thailand`);

    expect(consoleMock).toHaveBeenCalledTimes(1);
  });

  test('omits last empty newline', () => {
    printTable(`city,population,area,density,country
      Bangkok,8280925,1569,5279,Thailand
      `);

    expect(consoleMock).toHaveBeenCalledTimes(1);
  });

  test('print example table', () => {
    printTable(data);

    expect(consoleMock).toHaveBeenCalledTimes(10);

    expect(consoleMock).toHaveBeenNthCalledWith(
      1,
      'Lagos               16060303    1171   13712           Nigeria   100'
    );
    expect(consoleMock).toHaveBeenNthCalledWith(
      2,
      'Delhi               16787941    1484   11313             India    83'
    );
    expect(consoleMock).toHaveBeenNthCalledWith(
      3,
      'New York City        8537673     784   10892     United States    79'
    );
    expect(consoleMock).toHaveBeenNthCalledWith(
      4,
      'Sao Paulo           12038175    1521    7914            Brazil    58'
    );
    expect(consoleMock).toHaveBeenNthCalledWith(
      5,
      'Tokyo               13513734    2191    6168             Japan    45'
    );
    expect(consoleMock).toHaveBeenNthCalledWith(
      6,
      'Mexico City          8874724    1486    5974            Mexico    44'
    );
    expect(consoleMock).toHaveBeenNthCalledWith(
      7,
      'London               8673713    1572    5431    United Kingdom    40'
    );
    expect(consoleMock).toHaveBeenNthCalledWith(
      8,
      'Bangkok              8280925    1569    5279          Thailand    38'
    );
    expect(consoleMock).toHaveBeenNthCalledWith(
      9,
      'Shanghai            24256800    6340    3826             China    28'
    );
    expect(consoleMock).toHaveBeenNthCalledWith(
      10,
      'Istanbul            14160467    5461    2593            Turkey    19'
    );
  });
});
