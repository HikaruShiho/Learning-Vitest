import {  rest } from 'msw'

export const handlers = [
  rest.get('http://localhost:5173/todos', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, title: 'ジムに行く', isDone: false },
        { id: 2, title: '犬の散歩', isDone: true },
        { id: 3, title: '夕ご飯の支度', isDone: false },
      ])
    );
  }),
]