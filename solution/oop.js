class City {
  constructor(lineInput) {
    const cells = lineInput.split(',');
    this.city = cells[0].trim();
    this.population = parseInt(cells[1]);
    this.area = parseInt(cells[2]);
    this.density = parseInt(cells[3]);
    this.country = cells[4];
    this.densityPercentage = 0;
  }
}

class CityList {
  constructor() {
    this.cities = [];
  }

  addCity(city) {
    this.cities.push(city);
  }

  calculateDensityPercentage() {
    const maxDensity = Math.max(...this.cities.map((city) => city.density));
    for (const city of this.cities) {
      const percentage = Math.round((city.density * 100) / maxDensity);
      city.densityPercentage = percentage;
    }
  }

  sortByDensity() {
    this.cities.sort((city1, city2) => city2.densityPercentage - city1.densityPercentage);
  }

  getFormattedString() {
    let result = '';
    for (const city of this.cities) {
      let s = city.city.padEnd(18);
      s += city.population.toString().padStart(10);
      s += city.area.toString().padStart(8);
      s += city.density.toString().padStart(8);
      s += city.country.padStart(18);
      s += city.densityPercentage.toString().padStart(6);
      result += s + '\n';
    }
    return result.trim();
  }
}

function printTable(text) {
  if (!text) return;
  const lines = text.trim().split('\n');
  lines.shift();
  if (!lines.length) return;

  const cities = new CityList();
  for (const line of lines) {
    cities.addCity(new City(line));
  }

  cities.calculateDensityPercentage();
  cities.sortByDensity();

  const output = cities.getFormattedString();
  console.log(output);
}

export default printTable;
