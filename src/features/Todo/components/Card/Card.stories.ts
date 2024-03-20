import type { Meta, StoryObj } from '@storybook/vue3';
import Card from './Card.vue';

const meta: Meta = {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    title: '買い物に行く',
    isDone: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Done: Story = {
  args: {
    isDone: true,
  }
};

