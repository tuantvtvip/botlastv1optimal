// ** modules code by Heyzer...
// * no edit credit **
const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.greenBright(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.greenBright(text) : chalk.bgKeyword(bgcolor)(text)
}

module.exports = {
	color,
	bgcolor
}
