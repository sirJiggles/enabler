import program from './src/program'

// this is the lambda
const handler = async () => {
  try {
    await program()
  } catch (error) {
    return {
      statusCode: 500,
      body: error,
    }
  }

  return {
    statusCode: 200,
    body: 'You ran the slack bot!',
  }
}

// for running locally (just comment it out when not)
// export default handler()

// for running as a lambda
exports.handler = handler
