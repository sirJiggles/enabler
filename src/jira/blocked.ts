import resource from './resource'
import format from './format'

const blocked = async () => {
  return format(await resource('status = Blocked'))
}

export default blocked
