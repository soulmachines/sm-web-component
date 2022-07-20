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

#### Image Example

![Image Alt Text](https://assets.gocomics.com/uploads/collection_images/collection_image_large_1628638_dilbert-inventions-content-admin-2048x1280_201809101600.jpg)
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
