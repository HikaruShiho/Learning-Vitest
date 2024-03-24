import { test, expect, describe } from 'vitest';

describe('/api/user/:idのテスト', () => {

  test('通常取得', async() => {
    const res  = await fetch('http://localhost:5173/user/uid', {
      method: 'GET',
    });

    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data).toEqual({ firstName: 'John', lastName: 'Maverick' });
  })

  test('"/:id"なしの場合', async() => {
    await fetch('http://localhost:5173/user/noId', {
      method: 'GET',
    }).catch((e) => {
      expect(e).toBeInstanceOf(Error);
    });
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
