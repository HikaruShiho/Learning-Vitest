import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/user/:id', ({ params }) => {
    const { id } = params

    if (id === "noId") return new HttpResponse("User not found.", { status: 500 });

    return HttpResponse.json({
      firstName: 'John',
      lastName: 'Maverick',
    })
  }),
  http.get('/users', () => {
    return HttpResponse.json([
      { firstName: 'John', lastName: 'Maverick' },
      { firstName: 'Alex', lastName: 'Black' },
    ])
  }),
]