const { getUserName } = require('../api')
const { getCountry, getLocationFromTZ } = require('../util/location')

const flags = {
	name: {
		type: 'string',
		alias: 'n',
		default: getUserName(),
		isRequired: false,
		helpText: `--n | --name jane [default: ${getUserName()}] -- Sets a custom username`
	},
	location: {
		type: 'string',
		alias: 'l',
		default: getLocationFromTZ(),
		isRequired: true,
		helpText: `--l | --location [default: ${getLocationFromTZ()}] -- Sets the location which is derived from your IP address or device timezone`
	},
	country: {
		type: 'string',
		alias: 'c',
		default: getCountry(),
		isRequired: true,
		helpText: `--c | --country [default: ${getCountry()}] -- Sets the country which is derived from your device timezone `
	},
	showWeather: {
		type: 'boolean',
		alias: 'w',
		default: true,
		isRequired: false,
		helpText: `--w | --showWeather [default: true] -- Controls display of weather information`
	},
	showNews: {
		type: 'boolean',
		alias: 'news',
		default: true,
		isRequired: false,
		helpText: `--news | --showNews [default: true] -- Controls display of news articles`
	},
	showHistory: {
		type: 'boolean',
		alias: 'h',
		default: true,
		isRequired: false,
		helpText: `--h | --showHistory [default: true] -- Controls display of history table`
	},
	showQuote: {
		type: 'boolean',
		alias: 'q',
		default: true,
		isRequired: false,
		helpText: `--q | --showQuote [default: true] -- Controls display of quote`
	},
	weatherUnit: {
		type: 'string',
		alias: 'wu',
		default: 'imperial',
		isRequired: false,
		helpText: `--wu | --weatherUnit [default: imperial, valid: metric,standard,imperial] -- Controls the weather units`
	},
	historyLimit: {
		type: 'number',
		alias: 'hlimit',
		default: 3,
		isRequired: false,
		helpText: `--hlimit | --historyLimit [default: 3] -- Controls the number of historical datapoints shown`
	},
	newsLimit: {
		type: 'number',
		alias: 'nlimit',
		default: 5,
		isRequired: false,
		helpText: `--nlimit | --newsLimit [default: 5] -- Controls the number of news articles shown`
	},
	reset: {
		type: 'boolean',
		alias: 'r',
		default: false,
		isRequired: false,
		helpText: `--reset | --r [default: false] -- Removes any saved settings and uses defaults`
	}
}

const IGNORE_FLAGS = ['reset', 'help', 'version']
const EXAMPLES = `
		$ today --location='san francisco,usa'
		$ today --weatherUnit='imperial'
		$ today --newsLimit=10 --historyLimit=5
		$ today --reset
`

module.exports = { flags, IGNORE_FLAGS, EXAMPLES }