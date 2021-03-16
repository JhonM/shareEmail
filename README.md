# shareEmail

## Usage

`In a script tag`
```html
<body>
  <div id="someId"><div>

  <script src="dist/multiple-email-form.min.js"></script>
  <script>
    shareForm.setup(document.getElementById('someId'));
  </script>
</body>
```

`As an import`
```javascript
import { setup as shareForm } from "./share-form.js";

shareForm(document.getElementById("email"))
```

### `randomEmail()`

Will add a randomEmail

```javascript
shareForm.randomEmail()
```

### `emailCount()`

Will give you the current email count

```javascript
shareForm.emailCount()
```

## features
- Paste emails separated by a comma will add them in the form
- While typing add an email by hitting the `,` or `Enter` key, the focus will persist so you can proceed with typing.
- When loosing focus will also add an email
- Component can be used with the keyboard

## Examples
- examples can be found [here](https://jhonm.github.io/shareEmail)
