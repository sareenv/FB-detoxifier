const express = require('express')
const Classifier = require('../modules/classification')

const router = express.Router()

router.post('/checkProfanity', (req, res) => {
	const sentences = req.body.posts
	const analysisArray = []
	sentences.forEach((feed) => {
		const classifier = new Classifier(feed)
		const analysis = classifier.analysis()
		analysisArray.push({analysis, 'sentence': feed})
	})
	res.send(analysisArray)
})

module.exports = router
