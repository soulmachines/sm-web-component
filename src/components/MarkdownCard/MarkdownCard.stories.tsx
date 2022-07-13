import { MarkdownCard } from '.';
// import * as fs from 'fs';

export default {
  title: `Components / MarkdownCard`,
  component: MarkdownCard,
};

export const Basic = () => {
  const content = {
    id: 'id',
    type: 'markdown',
    data: {
      text: '## An Interesting List\r\n 1. Most interesting\r\n 2. Less interesting\r\n 3. Least Interesting\r\n\r\n**bold**\r\n- item 1\r\n- item 2\r\n\r\n[test link](https://google.com)',
    },
  };
  <MarkdownCard content={content} />;
};

export const CheatSheet = () => {
  // const reader = new FileReader();
  // reader.onload = (e) => {
  //   const text = e.target.result;
  //   console.log(text);
  // };
  // const cheatsheet=reader.readAsText('./examples/cheatsheet.md');
  // const text = fs.readFileSync('./examples/cheatsheet.md','utf-8')
  const text = 'test';
  const content = {
    id: 'id',
    type: 'markdown',
    data: {
      text,
    },
  };

  return <MarkdownCard content={content} />;
};
