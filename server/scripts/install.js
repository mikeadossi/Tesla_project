require('dotenv').config({ path: require('find-config')('.env') }); 


const Importer = require('mysql-import');
const importer = new Importer({host: process.env.HOST, user: process.env.USER, password: process.env.DB_PASSWORD, database: process.env.DATABASE});


// importer.onProgress(progress=>{
//     var percent = Math.floor(progress.bytes_processed / progress.total_bytes * 10000) / 100;
//     console.log(`${percent}% Completed`);
//   });

//   importer.import([
//     require('find-config')('schema.sql'), // -> 'path/to/schema.sql'
//     require('find-config')('data.sql'),   // -> 'path/to/data.sql'
//     // ...
//   ]).then(()=>{
//   var files_imported = importer.getImported();
//   console.log(`${files_imported.length} SQL file(s) imported.`);
// }).catch(err=>{
//   console.error(err);
// });