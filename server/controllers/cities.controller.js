const pool = require('../db');

class CitiesController {
  async getCities(req, res) {
    const {
      search = '',
      page = '1',
      sortBy = 'id',
      filterName = 'id',
      filterCondition = 'greater',
      filterValue = 0,
    } = req.query;

    const comparisonOperators = {
      lower: '<',
      equal: '=',
      greater: '>',
    };
    const filter = {
      name: filterName,
      condition: comparisonOperators[filterCondition],
      value: parseInt(filterValue),
    };

    const limit = 10;
    const offset = limit * parseInt(page) - limit;

    const ORDER_BY = `ORDER BY ${sortBy}`;
    const LIMIT = `LIMIT ${limit}`;
    const SEARCH = `LOWER(name) LIKE LOWER('%${search}%')`;
    const FILTER = `${filter.name} ${filter.condition} ${filter.value}`;
    const OFFSET = `OFFSET ${offset}`;
    const CONDITION = `WHERE ${SEARCH} AND ${FILTER}`;

    const { rows: cities } = await pool.query(
      `SELECT * FROM cities ${CONDITION} ${ORDER_BY} ${OFFSET} ${LIMIT}`
    );
    const { rows } = await pool.query(
      `SELECT COUNT(*) FROM cities ${CONDITION}`
    );

    res.send({ rowsCount: rows[0].count, cities });
  }
}

module.exports = new CitiesController();
