/**
 * Common HTTP Methods used
 */
export const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  HEAD: 'HEAD'
}

/**
 * Generate the headers needed for the requests
 * @param {String} token - Token used on Authentication
 */
export const HeaderFactory = token => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  if (token) headers.append('x-access-token', token)
  return headers
}

/**
 * Handle Gracefully an HTTP Error
 * @param {Error} error - Fetch Error
 */
async function ErrorHandler(error) {
  //eslint-disable-next-line no-console
  console.error(error)
  const genericResponse = { message: 'Something Went Wrong, try again later' }
  if (error && error.json) {
    try {
      const data = await error.json()
      return data
    } catch (e) {
      return genericResponse
    }
  } else return genericResponse
}

/**
 * Handle HTTP
 * @param {Promise} req -  Fetch API Promise
 */
export async function Req(req) {
  const res = await req

  if (res && res.ok) {
    return res
  }

  // The req has not been completed successfully and must be catched
  const err = await ErrorHandler(res)
  throw err
}
