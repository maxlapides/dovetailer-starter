const path = require('path')

function createConfig() {
  const dirs = {
    emails: './emails',
    build: './build',
    cache: './cache',
    components: './components',
    templates: './templates'
  }

  return {
    DIRS: {
      BUILD: path.join(__dirname, dirs.build),
      CACHE: path.join(__dirname, dirs.cache),
      EMAILS: path.join(__dirname, dirs.emails),
      TEMPLATES: path.join(__dirname, dirs.templates)
    },
    FILES: {
      BUILD: path.join(dirs.build, '**/*'),
      COMPONENTS: path.join(dirs.components, '**/*'),
      EMAILS: path.join(dirs.emails, '**/*'),
      TEMPLATES: path.join(dirs.templates, '**/*')
    },
    options: {
      doctype: '<!DOCTYPE html>'
    }
  }
}

module.exports = createConfig()
