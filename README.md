# languages-data

Global languages for JavaScript using TypeScript for ES6

## install

using yarn

```yarn add language-data```

using npm

```npm i language-data```

## using

```
import languages from 'languages-data'

languages.getAll() // get all available languages
// result
[
  ...
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  ...
]


languages.getByCode('es') // get language by providing a language code
// result
{ code: 'es', name: 'Spanish', nativeName: 'Español' }
```