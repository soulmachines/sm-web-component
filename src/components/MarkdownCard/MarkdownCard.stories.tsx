import { MarkdownCard, MarkdownCardProps } from '.';

const content = {
  id: 'id',
  type: 'markdown',
  data: {
    text: `# H1
## H2
### H3
#### H4
##### H5
###### H6

1. Most interesting
   1. Sublist 1
   2. Sublist 2
2. Less interesting
   1. Sublist 1
   2. Sublist 2
3. Least Interesting

**bold**
- item 1
- item 2

[External Link](https://www.google.com)

[Internal Link](http://localhost:3000)

*emphasis*

---
Horizontal Rule

---

- [ ] checkbox 1
- [ ] checkbox 2
- [ ] checkbox 3
  - [ ] sub checkbox
`,
  },
};

export default {
  title: `Components / MarkdownCard`,
  component: MarkdownCard,
  argTypes: {
    content: { control: 'object', defaultValue: content },
  },
};

export const Basic = ({ content }: MarkdownCardProps) => <MarkdownCard content={content} />;
