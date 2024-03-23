import { test, expect, describe } from 'vitest';

describe('/api/user/:idのテスト', () => {

  test('通常取得', async() => {
    const res  = await fetch('/user/uid', {
      method: 'GET',
    });

    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data).toEqual({ firstName: 'John', lastName: 'Maverick' });
  })

  test('"/:id"なしの場合', async() => {
    const res  = await fetch('/user/noId', {
      method: 'GET',
    });
    expect(res.status).toBe(500);
    expect(await res.text()).toBe('User not found.');
  })
});
