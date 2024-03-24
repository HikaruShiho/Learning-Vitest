// v1.xの書き方
import { rest } from 'msw'

// v2.xの書き方
// import { http, HttpResponse } from 'msw'

export const handlers = [
  rest.get('http://localhost:5173/user/:id', (req, res, ctx) => {
    const { id } = req.params;
    if (id === "noId") throw new Error("User not found.");

    return res(
      ctx.status(200),
      ctx.json({ firstName: 'John', lastName: 'Maverick' })
    );

    // v2.xの書き方
    // return HttpResponse.json({
    //   firstName: 'John',
    //   lastName: 'Maverick',
    // });
  }),
  rest.get('http://localhost:5173/users', (_, res, ctx) => {
    return res(
      ctx.status(403),
      ctx.json([
        { firstName: 'John', lastName: 'Maverick' },
        { firstName: 'Alex', lastName: 'Black' },
      ])
    );

    // v2.xの書き方
    // return HttpResponse.json([
    //   { firstName: 'John', lastName: 'Maverick' },
    //   { firstName: 'Alex', lastName: 'Black' },
    // ])
  }),
]