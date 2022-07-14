import { MarkdownCard, MarkdownCardProps } from '.';

const content = {
  id: 'id',
  type: 'markdown',
  data: {
    text: '# H1\r\n## H2\r\n### H3\r\n#### H4\r\n##### H5\r\n###### H6\r\n 1. Most interesting\r\n 2. Less interesting\r\n 3. Least Interesting\r\n\r\n**bold**\r\n- item 1\r\n- item 2\r\n\r\n[External Link](https://www.google.com)\r\n\r\n[Internal Link](http://localhost:3000)\r\n\r\n*emphasis*\r\n\r\n---\r\nHorizontal Rule\r\n\r\n---\r\n\r\n- [ ] checkbox 1\r\n- [ ] checkbox 2\r\n- [ ] checkbox 3\r\n  - [ ] sub checkbox\r\n',
  },
};

// const exhaustiveContent = {
//   id: 'id',
//   type: 'markdown',
//   data: {
//     text: ''
//   },
// };

export default {
  title: `Components / MarkdownCard`,
  component: MarkdownCard,
  argTypes: {
    content: { control: 'object', defaultValue: content },
  },
};

export const Basic = ({ content }: MarkdownCardProps) => <MarkdownCard content={content} />;

// export const CheatSheet = () => {
//   // const reader = new FileReader();
//   // reader.onload = (e) => {
//   //   const text = e.target.result;
//   //   console.log(text);
//   // };
//   // const cheatsheet=reader.readAsText('./examples/cheatsheet.md');
//   // const text = fs.readFileSync('./examples/cheatsheet.md','utf-8')
//   const text = 'test';
//   const content = {
//     id: 'id',
//     type: 'markdown',
//     data: {
//       "text":{text},
//     },
//   };

//   return <MarkdownCard content={content} />;
// };
