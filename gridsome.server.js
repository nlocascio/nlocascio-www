const fs = require('fs');
const yaml = require('js-yaml');

const fileContents = fs.readFileSync('./src/data/experience.yaml', 'utf8');
const experiences = yaml.load(fileContents);

module.exports = function ({ loadSource }) {
  loadSource(async actions => {
    const collection = actions.addCollection({
      typeName: 'Experience'
    })

    for (const experience of experiences) {
      collection.addNode(experience);
    }
  })
}
