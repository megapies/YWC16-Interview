const jsonpath = require('jsonpath')

class DataSelector {
  selectByTopic(data, key) {
    const query_str = `$..[?(@.topics.indexOf('${key}') != -1)]`
    const data_selected = jsonpath.query(data, query_str)
    return data_selected
  }

  selectByCategory(data, key) {
    const query_str = `$..[?(@.categories.indexOf('${key}') != -1)]`
    const data_selected = jsonpath.query(data, query_str)
    return data_selected
  }

  selectByYear(data, year) {
    const query_str = `$..[?(@.start.year == ${year})]`
    const data_selected = jsonpath.query(data, query_str)
    return data_selected
  }

  selectByMonth(data, year, month) {
    const query_str = `$..[?(@.start.year == ${year} && @.start.month == ${month})]`
    const data_selected = jsonpath.query(data, query_str)
    return data_selected
  }

  selectBySubTitle(data, str) {
    const query_str = `$..[?(/${str}/.test(@.title))]`
    const data_selected = jsonpath.query(data, query_str)
    return data_selected
  }

  selectById(data, id) {
    const query_str = `$..[?(@.id == '${id}')]`
    const data_selected = jsonpath.query(data, query_str)
    return data_selected
  }
}

module.exports = {
  DataSelector,
  dataSelector : new DataSelector()
}