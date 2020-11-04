import program from './src/program'

const handler = async () => {
  return program()
}

// this is so we can run it as a lambda
exports.handler = handler

// for when running locally
export default program()
