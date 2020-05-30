# limit-characters

Limits the length of a given text with different options. Types included.

## Install

**npm**

```shell
npm i limit-characters
```

**Yarn**

```shell
yarn add limit-characters
```

## Usage

**CommonJS**

```javascript
var limitCharacters = require("limit-characters")
```

**ES6**

```javascript
import limitCharacters from "limit-characters"
```

## Example

```javascript
import limitCharacters from "limit-characters";

const originalText = "This library helps limit the characters of a given text"

const excerpt = limitCharacters({ text: originalText, length: 20 })
// Returns "This library help..."

const excerpt2 = limitCharacters({ text: originalText, length: 20, breakWord: false })
// Returns "This library..."

const excerpt3 = limitCharacters({ text: originalText, length: 32, breakWord: false, more: "... read more" })
// Returns "This library helps... read more"
```

## Options

| Option    | Type    | Required | Default | Description                                                        |
|-----------|---------|----------|---------|--------------------------------------------------------------------|
| text      | string  | Required |         | Original text to trim                                              |
| length    | number  | Optional | `144`   | Max length of characters including ellipsis                        |
| breakWord | boolean | Optional | `true`  | Break the word or keep the whole word that fits the length         |
| more      | string  | Optional | `...`   | Appended at the end of string if original text exceeded the length |
