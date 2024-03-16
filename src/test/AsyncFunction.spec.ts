import { test, expect, describe } from 'vitest'
import { fetchUser } from '../api/user';

describe('Errorスロー検証', () => {
  test('Throwされたかどうか検証', async () => {
    await expect(fetchUser('1')).rejects.toThrow();
  });
});


describe('Errorスローのメッセージを検証', () => {
  test('文字列だと全てPassする', async () => {
    //! 文字列で指定すると必ずテストがパスするので、正規表現で判定したほうが良さそう
    await expect(fetchUser('1')).rejects.toThrow("エラーが発生しました。");
    await expect(fetchUser('1')).rejects.toThrow("エラー");
    await expect(fetchUser('1')).rejects.toThrow("発生しました。");
  });

  test('正規表現で判定する', async () => {
    // 「エラーが発生しました。」の時はtrue
    await expect(fetchUser('1')).rejects.toThrow(/^エラーが発生しました。$/);
    // 「エラー」でなければtrue
    await expect(fetchUser('1')).rejects.toThrow(/^(?!エラー$).*$/);
  });

  test('new Errorで判定する', async () => {
    await expect(fetchUser('1')).rejects.toThrow(new Error("エラーが発生しました。"));
  });
});
