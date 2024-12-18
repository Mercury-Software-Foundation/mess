# emoji-styled-css

**emoji-styled-css** is a utility-first CSS library built with TypeScript, designed to simplify styling components using dynamic breakpoints and easy-to-use utility functions. It allows you to create responsive, customizable styles based on user-configurable breakpoints and supports simple styling through semantic tags like `Button`,`Text`,`Image`,`Box`,`Input`,`Label`,`ul`,`li`,`Footer`,`Form` and more.

---

## 📦 Installation

To install **emoji-styled-css**, you can use npm or yarn.

```bash
npm install emoji-styled-css
or
yarn add emoji-styled-css

```
📝 Usage
--------

### Importing Tags

To use **emoji-styled-css**, you first need to import the semantic tags (Box, Text, Button, etc.) into your React project.
```typescript
import { Box, Text, Button } from 'emoji-styled-css'
```
## Applying CSS with Tags

Once you’ve imported the tags, you can start applying styles directly to these components. The styles are defined using media queries to make them responsive, based on breakpoints defined in your config file.

**Example of usage:**
```javascript
import { Button,Text,Box,Image} from 'emoji-styled-css';

const MyComponent = () => {
  return (
    <Box 
    styles={{
      base: `
        width: 300px; 
        background-color: #2c3e50; 
        border-radius: 12px; 
        padding: 20px; 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        text-align: center;
        transition: transform 0.3s ease-in-out;
      `,
      sm: `
        width: 100%; 
        padding: 10px;
      `,
      md: `
        width: 280px;
      `,
      lg: `
        width: 320px;
      `
    }}
  >
    <Image 
      src="https://via.placeholder.com/150" 
      alt="Card Image" 
      width={150} 
      height={150}
      styles={{
        base: `
          width: 100%;
          height: auto;
          border-radius: 10px;
          margin-bottom: 15px;
        `
      }}
    />
    <Text 
      styles={{
        base: `
          color: #ecf0f1;
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
        `
      }}
    >
      Product Title
    </Text>
    <Text 
      styles={{
        base: `
          color: #bdc3c7;
          font-size: 14px;
          margin-bottom: 15px;
        `
      }}
    >
      A short description of the product goes here. It's brief but informative.
    </Text>
    <Button
      styles={{
        base: `
          background-color: #e74c3c;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          width: 100%;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
          &:hover {
            background-color: #c0392b;
          }
        `
      }}
    >
      Add to Cart
    </Button>
  </Box>
  );
};

export default MyComponent;
```
**In this example:**

- The `Button`,`Text`,`Image`,`Box`,`Input`,`Label`,`ul`,`li`,`Footer`,`Form` and more components will adjust their styles based on the screen size.
- You can pass CSS properties for each breakpoint (`sm`, `md`, `lg`, `xl`) as an object.

## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

### **Explanation of Sections**:

1. **About the package**: Describes the purpose of the package and its core functionalities.
2. **Installation**: Provides the commands to install the package using `npm` or `yarn`.
3. **Importing the Tags**: Explains how to import the key components (`Box`, `Text`, `Button`, etc.) into a React project.
4. **Applying the CSS**: Shows how to apply CSS using props with responsive breakpoints.
5. **Benefits**: Highlights the advantages of using the package, such as responsiveness, ease of use, and customization.
6. **Advanced Configuration**: Briefly introduces how users can customize the breakpoints by configuring the `emoji.config.js` file.
7. **Contribution**: Encourages developers to contribute to the package if they want to add features or improve it.

---