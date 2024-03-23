import { beforeAll, afterEach, afterAll } from 'vitest'
import { server } from './src/mocks/node'

/**
 * MSW のリクエストをコンソールに出力（確認用）
 */
// server.events.on('request:start', ({ request }) => {
//   console.log('MSW intercepted:', request.method, request.url)
// })

/**
 * - すべてのテストの前に server を起動
 * - テストケースがひとつ終わるたびにリセット
 * - すべてのテストが終わったら server を終了
 */
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())