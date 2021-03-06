var mongoose = require('mongoose'),
config = require('../config');

mongoose.connect('mongodb://' + config.mongodb.credentials + config.mongodb.host + config.mongodb.port + '/' + config.mongodb.dbName, function(err) {
if (err) {
console.log('POSSIVEL SOLUCAO \nsudo service mongodb stop\nsudo rm /var/lib/mongodb/mongod.lock\nsudo chown -R mongodb:mongodb /var/lib/mongodb/\nsudo service mongodb start\n');
throw err;
}
});

var produtoObjSchema = {};

produtoObjSchema.dtcreate = { type: Date, default: Date.now };
produtoObjSchema.dtupdate = { type: Date, default: Date.now };
produtoObjSchema.nome = "String";
produtoObjSchema.codbarra = "String";
produtoObjSchema.descricao = "String";
produtoObjSchema.resumo = "String";
produtoObjSchema.unidade = "String";
produtoObjSchema.peso = "Number";
produtoObjSchema.fornecedor = "String";


var userObjSchema = {};

userObjSchema.dtcreate = { type: Date, default: Date.now };
userObjSchema.dtupdate = { type: Date, default: Date.now };
userObjSchema.nome = "String";
userObjSchema.email = "String";
userObjSchema.senha = "String";


var produtoSchema = mongoose.Schema(produtoObjSchema);
var userSchema = mongoose.Schema(userObjSchema);

module.exports.Produto = mongoose.model('produto', produtoSchema);
module.exports.User = mongoose.model('user', userSchema);


