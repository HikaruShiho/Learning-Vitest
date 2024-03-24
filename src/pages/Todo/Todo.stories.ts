import type { Meta, StoryObj } from '@storybook/vue3';
import { rest } from 'msw';
import Todo from './Todo.vue';

const meta: Meta = {
  title: 'TodoPage',
  component: Todo,
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get('http://localhost:5173/todos', (_, res, ctx) => {
          return res(ctx.json([
            { id: 1, title: 'これはstorybook用のモック１', isDone: false },
            { id: 2, title: 'これはstorybook用のモック２', isDone: true },
            { id: 3, title: 'これはstorybook用のモック３', isDone: false },
          ]));
        }),
        //レスポンスが空のバージョン
        rest.get('http://localhost:5173/todos', (_, res, ctx) => {
          return res(ctx.json([]));
        })
      ],
    }
  }
}

export const Empty: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get('http://localhost:5173/todos', (_, res, ctx) => {
          return res(ctx.json([]));
        }),
      ],
    }
  }
}
