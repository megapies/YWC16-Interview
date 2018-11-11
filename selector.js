const jsonpath = require('jsonpath')

class DataSelector {
  selectByTopic(data, key) {
    const query_str = `$.topic[?('${key}' in @)]`
    const data_selected = jsonpath.query(data, query_str)
    return data_selected
  }

  selectByYear(data, year) {
    const query_str = `$..[?(@.start.year == ${year})]`
    const data_selected = jsonpath.query(data, query_str)
    return data_selected
  }
}

module.exports = {
  DataSelector,
  dataSelector : new DataSelector()
}