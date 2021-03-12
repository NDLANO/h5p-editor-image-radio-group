H5P Editor Image Radio Group
==========

This editor widget creates a radio group instead of a dropdown for the 'select' type.

The following example is from True/False Question's semantics.json:
```javascript
{
  "name": "correct",
  "type": "select",
  "widget": "radioGroup",
  "alignment": "horizontal",
  "label": "Correct answer",
  "options": [
    {
      "value": "true",
      "label": "True"
    },
    {
      "value": "false",
      "label": "False"
    }
  ],
  "default": "true"
},
```
The example above will create two radio buttons with label 'True' and 'False', which
will be aligned horizontally.

## License

(The MIT License)

Copyright (c) 2016 Joubel AS

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.