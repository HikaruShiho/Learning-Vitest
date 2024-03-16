import { test, expect, describe, vi } from 'vitest'
import createFetchMock from 'vitest-fetch-mock';

import * as userApi from '../api/user';
import { filterUser } from '../utils/user';

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

describe('/api/userのテスト', () => {
  test('fnメソッドで関数をモック', () => {
    const num = vi.fn(() => 100);
    expect(num()).toBe(100);
    expect(num()).not.toBe(200);
    expect(num).toHaveBeenCalled();
  })


  test('fetchUserメソッドをmockでモック', () => {
    vi.mock('../api/user', () => ({
      fetchUser: vi.fn().mockResolvedValue({
        id: 1,
        name: "Mike",
        age: 30,
      }),
    }));

    const user = userApi.fetchUser('');
    expect(user).resolves.toEqual({
      id: 1,
      name: "Mike",
      age: 30,
    });

    vi.resetAllMocks();
  })


  test('fetchUserメソッドをspyOnでモック', async () => {
    const spy = vi.spyOn(userApi, "fetchUser").mockResolvedValue({
      id: 1,
      name: "Mike",
      age: 30,
    });

    expect(await filterUser()).toEqual({
      id: 2,
      name: "Mike",
      age: 30,
    });

    spy.mockRestore();
  });
});
