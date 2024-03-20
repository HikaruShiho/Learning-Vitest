import type { Meta, StoryObj } from '@storybook/vue3';
import { fn } from '@storybook/test';
import Button from './Button.vue';

const meta: Meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  args: { // 全てのストーリーに適用される共通のargs
    label: 'Button',
    btnType: 'primary',
    disabled: false,
    onClick: fn(), // GUIのActionsタブでイベントを発火できる
  },
  argTypes: { // GUIのコントロールを編集する
    disabled: { control: 'boolean' },
    btnType: {
      control: 'select',
      options:  ['primary', 'danger']
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  }
};

export const Danger: Story = {
  args: {
    btnType: 'danger',
  }
};

