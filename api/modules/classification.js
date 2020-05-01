const Sentiment = require('sentiment')
const sentiment = new Sentiment()

class Classification {
	constructor(describedSentence) {
		this.describedSentence = describedSentence
	}

	analysis() {
		const {score, positive, negative} = sentiment.analyze(this.describedSentence)
		let analysis = ''
		if(score === 0) {
			analysis = 'Neutral'
		}else if(score < 0) {
			analysis = 'Negative'
		}else {
			analysis = 'Positive'
		}
		return {analysis: analysis, positive, negative}
	}

}

module.exports = Classification

