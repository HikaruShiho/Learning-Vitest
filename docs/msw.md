# MSW
https://mswjs.io/（2.x）

https://v1.mswjs.io/（1.x）

## 注意事項
- Storybookでmsw-storybook-addonを使用する場合は、`1.x`を使用しないと動作しない模様（2024/03/22現在）

## 設定
https://mswjs.io/docs/getting-started

### ブラウザでモックを使用する設定
https://mswjs.io/docs/integrations/browser

### Node.jsでモックを使用する設定
https://mswjs.io/docs/integrations/node

Vitestで使用する場合、作成した`vitest.setup.ts`を`vitest.config.ts`で読み込む
```javascript
//vitest.config.ts
export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./vitest.setup.ts'], //これを追加する
  },
  plugins: [vue()],
})
```

## ベストプラクティス
- APIエンドポイントやレスポンスを最新の状態に保つ（OpenAPIを使用すれば良さそう）

  https://mswjs.io/docs/recipes/keeping-mocks-in-sync#openapi-swagger