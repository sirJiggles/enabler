import configDefault from './configDefault'
import configProd from './configProd'

// based on the env var return the right config
export default process.env.PRODUCTION ? configProd : configDefault
