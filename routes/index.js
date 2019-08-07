const express = require('express');
const router = express.Router();
var multer  = require('multer')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const storage = multer.diskStorage({
	destination: (req,file,cb) => {
		cb(null, 'uploads/')
	},
	filename: (req,file,cb) => {
		cb(null, `${file.originalname} - ${Date.now()}`)
	}
})
const upload = multer({ storage: storage })
let fileUploaded = false;

router.post('/upload', upload.single('sampleFile'), function(req,res,next) {
	
	fileUploaded = true;
	
	const fs = require("fs");
	
	fs.stat("exists",req.file.path, (err,stats) => {
		if(err) console.log("err",err);
		console.log("stats",stats);
		
	})
	
	fs.readFile(req.file.path,'utf8', function (err, data) {
		if (err) {
			console.log("error",err);
			process.exit(1);
		}
		const parser = require('node-html-parser');
		
		const parsedHTML = parser.parse(data);
		const forceRaw = parsedHTML.querySelector('.force h2').toString();
		const faction =  forceRaw.match(/<h2>Kill Team List \((.+?)\)/)[1];
		
		res.send({
			fileUploaded: true,
			faction: faction
		})
	})
	
	
	// const parsedHTML = parser.parse('<ul id="list"><li>Hello World</li></ul>');
	
	
	// res.end("File is uploaded");
})

// router.post('/upload', function(req, res) {
// 	if (Object.keys(req.files).length == 0) {
// 		return res.status(400).send('No files were uploaded.');
// 	}
//
// 	// The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
// 	let sampleFile = req.files.sampleFile;
//
// 	// Use the mv() method to place the file somewhere on your server
// 	sampleFile.mv(`${req.app.locals.appDir}/../uploads/${req.files.sampleFile.name}`, function(err) {
// 		if (err)
// 			return res.status(500).send(err);
//
// 		res.send('File uploaded!');
// 	});
// });

module.exports = router;
