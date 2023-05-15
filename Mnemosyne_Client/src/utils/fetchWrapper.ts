export const fetchWrapper = {
  get: request('GET'),
  post: request('POST'),
  put: request('PUT'),
  delete: request('DELETE')
}

function request(method: string) {
  return (url: string, body: string | null) => {
    const options = { method, headers: { 'Content-Type': '', 'Accept': '' }, body }
    if (body) {
      options.headers['Content-Type'] = 'application/json'
      options.headers['Accept'] = 'application/json'
      options.body = JSON.stringify(body)
    }

    return fetch(url, options).then(handleResponse)
  }
}

async function handleResponse(response: any) {
  const isJson = response.headers.get('content-type')?.includes('application/json')
  const data = isJson ? await response.json() : null

  if (!response.ok) {
    if ([401, 403].includes(response.status)) {
      location.reload()
    }

    console.log('data', data)

    const error = (data && data.errors) || response.status
    return Promise.reject(error)
  }
  return data
}
