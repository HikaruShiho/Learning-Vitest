## node_modulesをホストと同期させないようにする
### なぜ？
- バインドマウントしている場合、node_modulesもホストと同期されてしまう
- せっかくコンテナのnodeバージョンを20で固定したのに、ホスト側のnode_modulesがバインドマウントされてしまってはコンテナを使うメリットがあまりないため

```yaml
# node_modulesも同期される
volumes:
  - ../:/home/node/app
```

### 対応
```yaml
version: '3.8'
services:
  node:
    volumes:
      - ../:/home/node/app
      - node_modules:/home/node/app/node_modules # 追加
volumes: # 追加
  node_modules:
```
これで同期されなくなる

### 参考
- [VSCode&Docker Volumeにおけるnode_modules問題を解決する](https://zenn.dev/yumemi_inc/articles/3d327557af3554)