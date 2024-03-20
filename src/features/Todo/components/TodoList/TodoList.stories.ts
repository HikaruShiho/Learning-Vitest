import type { Meta, StoryObj } from '@storybook/vue3';
import TodoList from './TodoList.vue';

const meta: Meta = {
  title: 'TodoList',
  component: TodoList,
  tags: ['autodocs'],
  // decorators: [
  //   () => ({ template: '<div style="display: flex; flex-flow: column; gap: 10px;"><story/></div>' }),
  // ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    todos: [
      { id: 1, title: '買い物に行く', isDone: false },
      { id: 2, title: '本を読む', isDone: true },
      { id: 3, title: '洗濯をする', isDone: false },
    ],
  }
};
export const TodoEmpty: Story = {
  args: {
    todos: [],
  }
};

