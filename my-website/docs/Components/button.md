---
sidebar_position: 1
---
<!-- import Highlight from '../../../src//components/text.tsx'; -->
# Button

---

# Styled Button Example

The following is an example of how to use the `Button` component from `mess`:

### Code
<!-- <Highlight/> -->
```jsx title="ButtonExample.js"
import { Button } from 'mess';

const StyledButtonExample = () => {
  return (
    <Button
      styles={{
        base: `
          background-color: #3498db;
          color: white;
          font-size: 16px;
          padding: 10px 20px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease-in-out;
          &:hover {
            background-color: #2980b9;
          }
        `,
        sm: `
          font-size: 14px;
          padding: 8px 16px;
        `,
        lg: `
          font-size: 18px;
          padding: 12px 24px;
        `,
      }}
    >
      Click Me
    </Button>
  );
};

export default StyledButtonExample;
```