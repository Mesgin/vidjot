if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI:'mongodb://mo:incognito@ds161529.mlab.com:61529/vidjot-db'}
} else {
  module.exports = {mongoURI:'mongodb+srv://user:vidjot@cluster0-oohzx.mongodb.net/ideas'}
}