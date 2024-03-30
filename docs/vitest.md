
## `beforeAll`, `afterAll`, `beforeEach`, `afterEach` 実行順について
### beforeAll
- `describe`メソッド毎に発火する（`describe`の開始直前に発火）

### afterAll
- `describe`メソッド毎に発火する（`describe`の終了直前に発火）
- `describe`がネストしている（親子関係になっている）場合、子の`afterAll`→親の`afterAll`の順で発火

### beforeEach
- `test`メソッド毎に発火する（`beforeAll`の後に発火）
- `test`がネストしている（親子関係になっている）場合、は以下の順で発火
  1. 1階層目テスト実行`beforeAll-1`→`beforeEach-1`発火
  2. 2階層目テスト実行: `beforeAll-2`→`beforeEach-1`→`beforeEach-2`発火
  3. 3階層目テスト実行: `beforeAll-3`→`beforeEach-1`→`beforeEach-2`→`beforeEach-3`発火


### afterEach
- `test`メソッド毎に発火する（テスト終了時に発火）
- `test`がネストしている（親子関係になっている）場合、は以下の順で発火
  1. 1階層目テスト実行: `afterEach-1`発火
  2. 2階層目テスト実行: `afterEach-2`→`afterEach-1`発火
  3. 3階層目テスト実行: `afterEach-3`→`afterEach-2`→`afterEach-1`発火

### 検証
```javascript
describe('describe 第１階層', () => {
  beforeAll(() => console.log('beforeAll: 第１階層'));
  afterAll(() => console.log('afterAll: 第１階層'));
  beforeEach(() => console.log('beforeEach: 第１階層'));
  afterEach(() => console.log('afterEach: 第１階層'));

  test('test: 第１階層：A', () => console.log('test: 第１階層：A'));

  describe('describe 第２階層', () => {
    beforeAll(() => console.log('beforeAll: 第２階層'));
    afterAll(() => console.log('afterAll: 第２階層'));
    beforeEach(() => console.log('beforeEach: 第２階層'));
    afterEach(() => console.log('afterEach: 第２階層'));

    test('test: 第２階層：A', () => console.log('test: 第２階層：A'));

    describe('describe 第３階層', () => {
      beforeAll(() => console.log('beforeAll: 第３階層'));
      afterAll(() => console.log('afterAll: 第３階層'));
      beforeEach(() => console.log('beforeEach: 第３階層'));
      afterEach(() => console.log('afterEach: 第３階層'));

      test('test: 第３階層：A', () => console.log('test: 第３階層：A'));
      test('test: 第３階層：B', () => console.log('test: 第３階層：B'));
    });

    test('test: 第２階層：B', () => console.log('test: 第２階層：B'));
  });

  test('test: 第１階層：B', () => console.log('test: 第１階層：B'));
});
```
### 出力結果
```
beforeAll: 第１階層 # 第１階層の beforeAll

# test: 第１階層：A に関する beforeEach と afterEach
beforeEach: 第１階層
test: 第１階層：A # 👈 テスト
afterEach: 第１階層

beforeAll: 第２階層 # 第２階層の beforeAll

# test: 第２階層：A に関する beforeEach と afterEach
beforeEach: 第１階層
beforeEach: 第２階層
test: 第２階層：A # 👈 テスト
afterEach: 第２階層
afterEach: 第１階層

beforeAll: 第３階層 # 第３階層の beforeAll

# test: 第３階層：A に関する beforeEach と afterEach
beforeEach: 第１階層
beforeEach: 第２階層
beforeEach: 第３階層
test: 第３階層：A # 👈 テスト
afterEach: 第３階層
afterEach: 第２階層
afterEach: 第１階層

# test: 第３階層：B に関する beforeEach と afterEach
beforeEach: 第１階層
beforeEach: 第２階層
beforeEach: 第３階層
test: 第３階層：B # 👈 テスト
afterEach: 第３階層
afterEach: 第２階層
afterEach: 第１階層

afterAll: 第３階層 # 第３階層の afterAll

# test: 第２階層：B に関する beforeEach と afterEach
beforeEach: 第１階層
beforeEach: 第２階層
test: 第２階層：B # 👈 テスト
afterEach: 第２階層
afterEach: 第１階層

afterAll: 第２階層 # 第２階層の afterAll

# test: 第１階層：B に関する beforeEach と afterEach
beforeEach: 第１階層
test: 第１階層：B # 👈 テスト
afterEach: 第１階層

afterAll: 第１階層 # 第１階層の afterAll
```
参考: https://knmts.com/as-a-engineer-215/