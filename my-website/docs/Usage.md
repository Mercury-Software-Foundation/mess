---
sidebar_position: 3
---
## Example of usage: ##
### Here's a simple example to showcase the core functionality of mess components ###
```javascript
import { Box, Text, Button } from 'mess';

const BasicExample = () => {
  return (
    <Box
      styles={{
        base: `
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background-color: #f0f0f0;
          border-radius: 10px;
        `,
        sm: `
          padding: 15px;
        `,
      }}
    >
      <Text
        styles={{
          base: `
            font-size: 18px;
            color: #333;
            margin-bottom: 10px;
          `,
        }}
      >
        Welcome to `mess`
      </Text>
      <Button
        styles={{
          base: `
            padding: 10px 20px;
            font-size: 16px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            &:hover {
              background-color: #2980b9;
            }
          `,
        }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default BasicExample;

```
**In this example:**

- The `Button` , `Text` , `Image` , `Box` , `Input` , `Label` , `ul` , `li` , `Footer` , `Form` and more components will adjust their styles based on the screen size.
- You can pass CSS properties for each breakpoint ( `sm` ,  `md` ,  `lg` , `xl` ) as an object.