export const imageCardContent = {
  id: 'id',
  type: 'image',
  data: {
    url: 'https://images.unsplash.com/photo-1656426885244-8012b6f6262a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  },
};

export const linkCardContent = {
  id: 'id',
  type: 'externalLink',
  data: {
    url: 'https://www.soulmachines.com',
    title: 'Soul Machines',
    imageUrl: 'https://placekitten.com/300/300',
    description: 'Placeholder',
  },
};

export const optionsCardContent = {
  id: 'id',
  type: 'options',
  data: {
    options: [
      {
        label: 'Auckland',
        value: 'auckland',
      },
      {
        label: 'Sydney',
        value: 'sydney',
      },
      {
        label: 'London',
      },
      {
        label: 'Singapore',
        value: 'singapore',
      },
      {
        label: 'Denmark',
      },
      {
        label: 'Wellington',
        value: 'wellington',
      },
      {
        label: 'Arizona',
        value: 'arizona',
      },
      {
        label: 'Melbourne',
      },
      {
        label: 'Iceland',
        value: 'iceland',
      },
      {
        label: 'England',
      },
    ],
  },
};

export const markdownCardContent = {
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
### Checkboxes
- [ ] Checkbox 1
- [ ] Checkbox 2
#### Image Example
![Image Alt Text](https://assets.gocomics.com/uploads/collection_images/collection_image_large_1628638_dilbert-inventions-content-admin-2048x1280_201809101600.jpg)
#### Image with Link
[![Image Alt Text](https://assets.gocomics.com/uploads/collection_images/collection_image_large_1628638_dilbert-inventions-content-admin-2048x1280_201809101600.jpg)](https://www.google.com)
### Table
| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |
### Fenced Code Block
\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`
`,
  },
};
