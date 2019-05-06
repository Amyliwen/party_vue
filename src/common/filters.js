let dateServer = value => value.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')
export { dateServer }
/src/main.js
import * as custom from './common/filters/custom'
Object.keys(custom).forEach(key => Vue.filter(key, custom[key]))
