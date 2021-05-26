H5P Editor Image Radio Group
==========

This editor widget creates a radio group instead of a dropdown for the 'select' type.

The following example is H5P Three Image semantics.json:
```javascript
{
  "name": "iconTypeTextBox",
  "type": "select",
  "label": "Button style",
  "description": "Decide how the icon should look.",
  "widget": "imageRadioGroup",
  "alignment": "horizontal",
  "fontFamily": "360-Image",
  "options": [
    {
      "value": "text-icon",
      "label": "Text Icon",
      "fontIcon": "e91f"
    },
    {
      "value": "info-icon",
      "label": "Info Icon",
      "fontIcon": "e91a"

    }
  ],
  "default": "text-icon"
},
```
The example above will create two radio buttons with label 'Text Icon' and 'Info Icon', with icon retrieved with Unicode from the defined fontFamily, which
will be aligned horizontally.

## License

(The MIT License)

Copyright (c) 2016 Joubel AS

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
