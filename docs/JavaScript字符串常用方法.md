### 1. **字符串长度**

- **`length`**：返回字符串的长度。

  ```js
  const str = "Hello";
  console.log(str.length); // 5
  ```

------

### 2. **访问字符**

- **`charAt(index)`**：返回指定索引位置的字符。

  ```js
  const str = "Hello";
  console.log(str.charAt(1)); // "e"
  ```

- **`charCodeAt(index)`**：返回指定索引位置字符的 Unicode 编码。

  ```js
  console.log(str.charCodeAt(1)); // 101
  ```

- **`at(index)`**（ES2022）：支持负数索引，返回指定位置的字符。

  ```js
  console.log(str.at(-1)); // "o"
  ```

------

### 3. **字符串查找**

- **`indexOf(searchValue, fromIndex)`**：返回子字符串首次出现的索引，未找到返回 `-1`。

  ```js
  const str = "Hello, world!";
  console.log(str.indexOf("world")); // 7
  ```

- **`lastIndexOf(searchValue, fromIndex)`**：返回子字符串最后一次出现的索引，未找到返回 `-1`。

  javascript

  复制

  ```
  console.log(str.lastIndexOf("o")); // 8
  ```

- **`includes(searchValue, fromIndex)`**：判断字符串是否包含子字符串，返回布尔值。

  javascript

  复制

  ```
  console.log(str.includes("world")); // true
  ```

- **`startsWith(searchValue, fromIndex)`**：判断字符串是否以子字符串开头，返回布尔值。

  javascript

  复制

  ```
  console.log(str.startsWith("Hello")); // true
  ```

- **`endsWith(searchValue, length)`**：判断字符串是否以子字符串结尾，返回布尔值。

  javascript

  复制

  ```
  console.log(str.endsWith("!")); // true
  ```

------

### 4. **字符串截取**

- **`slice(start, end)`**：提取从 `start` 到 `end`（不包括 `end`）的子字符串，支持负数索引。

  ```js
  const str = "Hello, world!";
  console.log(str.slice(0, 5)); // "Hello"
  console.log(str.slice(-6, -1)); // "world"
  ```

- **`substring(start, end)`**：提取从 `start` 到 `end`（不包括 `end`）的子字符串，不支持负数索引。

  ```js
  console.log(str.substring(0, 5)); // "Hello"
  ```

- **`substr(start, length)`**（已废弃）：从 `start` 开始提取指定长度的子字符串。

  ```js
  console.log(str.substr(7, 5)); // "world"
  ```

------

### 5. **字符串替换**

- **`replace(searchValue, replaceValue)`**：替换第一个匹配的子字符串。

  ```js
  const str = "Hello, world!";
  console.log(str.replace("world", "JavaScript")); // "Hello, JavaScript!"
  ```

- **`replaceAll(searchValue, replaceValue)`**（ES2021）：替换所有匹配的子字符串。

  ```js
  const str = "Hello, world! world!";
  console.log(str.replaceAll("world", "JavaScript")); // "Hello, JavaScript! JavaScript!"
  ```

------

### 6. **字符串分割**

- **`split(separator, limit)`**：根据分隔符将字符串拆分为数组。

  ```js
  const str = "apple,banana,orange";
  console.log(str.split(",")); // ["apple", "banana", "orange"]
  ```

------

### 7. **字符串连接**

- **`concat(str1, str2, ...)`**：连接多个字符串，返回新字符串。

  ```js
  const str1 = "Hello";
  const str2 = "world";
  console.log(str1.concat(", ", str2)); // "Hello, world"
  ```

- **模板字符串**（ES6）：使用反引号（``）和 `${}` 动态拼接字符串。

  ```js
  const name = "Alice";
  console.log(`Hello, ${name}!`); // "Hello, Alice!"
  ```

------

### 8. **字符串大小写转换**

- **`toLowerCase()`**：将字符串转换为小写。

  ```js
  const str = "Hello";
  console.log(str.toLowerCase()); // "hello"
  ```

- **`toUpperCase()`**：将字符串转换为大写。

  ```js
  console.log(str.toUpperCase()); // "HELLO"
  ```

------

### 9. **去除空白字符**

- **`trim()`**：去除字符串两端的空白字符。

  ```js
  const str = "  Hello  ";
  console.log(str.trim()); // "Hello"
  ```

- **`trimStart()`**：去除字符串开头的空白字符。

  ```js
  console.log(str.trimStart()); // "Hello  "
  ```

- **`trimEnd()`**：去除字符串结尾的空白字符。

  ```js
  console.log(str.trimEnd()); // "  Hello"
  ```

------

### 10. **字符串填充**

- **`padStart(targetLength, padString)`**：在字符串开头填充指定字符，直到达到目标长度。

  ```js
  const str = "5";
  console.log(str.padStart(3, "0")); // "005"
  ```

- **`padEnd(targetLength, padString)`**：在字符串结尾填充指定字符，直到达到目标长度。

  ```js
  console.log(str.padEnd(3, "0")); // "500"
  ```

------

### 11. **字符串重复**

- **`repeat(count)`**：将字符串重复指定次数。

  ```js
  const str = "Hello";
  console.log(str.repeat(3)); // "HelloHelloHello"
  ```

------

### 12. **字符串匹配**

- **`match(regexp)`**：返回字符串中匹配正则表达式的所有结果。

  ```js
  const str = "Hello, world!";
  console.log(str.match(/o/g)); // ["o", "o"]
  ```

- **`search(regexp)`**：返回匹配正则表达式的第一个索引，未找到返回 `-1`。

  ```js
  console.log(str.search(/world/)); // 7
  ```

------

### 13. **字符串迭代**

- **`for...of`**：遍历字符串中的每个字符。

  ```js
  const str = "Hello";
  for (const char of str) {
    console.log(char);
  }
  // 输出：H, e, l, l, o
  ```

------

### 14. **字符串编码和解码**

- **`encodeURI(uri)`**：对 URI 进行编码。

  ```js
  const uri = "https://example.com/测试";
  console.log(encodeURI(uri)); // "https://example.com/%E6%B5%8B%E8%AF%95"
  ```

- **`decodeURI(encodedURI)`**：解码已编码的 URI。

  ```js
  console.log(decodeURI(encodedURI)); // "https://example.com/测试"
  ```

------

### 15. **其他方法**

- **`localeCompare(target)`**：比较两个字符串的排序顺序。

  ```js
  const str1 = "apple";
  const str2 = "banana";
  console.log(str1.localeCompare(str2)); // -1（表示 str1 在 str2 之前）
  ```

- **`toString()`**：返回字符串本身（通常用于将对象转换为字符串）。

  ```js
  const str = new String("Hello");
  console.log(str.toString()); // "Hello"
  ```