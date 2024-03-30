import { test, expect, describe } from 'vitest';
import { rest } from 'msw';
import { server } from '../mocks/node';

describe('/api/user/:idのテスト', () => {

  test('通常取得', async() => {
    const res  = await fetch('http://localhost:5173/user/uid', {
      method: 'GET',
    });

    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data).toEqual({ firstName: 'John', lastName: 'Maverick' });
  })

  test('500エラー時', async() => {
    server.use(
      rest.get('http://localhost:5173/user/uid', (_, res, ctx) => {
        return res(
          ctx.status(500),
          ctx.json({ message: 'Internal Server Error' })
        )
      }),
    );
    const res = await fetch('http://localhost:5173/user/uid', {
      method: 'GET',
    });
    const result = await res.json();
    expect(res.status).toBe(500);
    expect(result).toEqual({ message: 'Internal Server Error' });
  })
});

describe('/api/todoのテスト', () => {

  test('通常取得', async() => {
    const res  = await fetch('http://localhost:5173/todos', {
      method: 'GET',
    });

    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data.length).toBe(3);
    expect(data[0].title).toEqual('ジムに行く');
  })
});
