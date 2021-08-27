/**
 * ImageRadioGroup widget
 *
 * @param {H5P.jQuery} $
 */
H5PEditor.NDLAImageRadioGroup = H5PEditor.widgets.imageRadioGroup = (function ($) {
  let groupCounter = 0;
  /**
   * Creates an radio button group.
   *
   * @class H5PEditor.ImageRadioButtonGroup
   * @param {Object} parent
   * @param {Object} field
   * @param {Object} params
   * @param {function} setValue
   */
  class ImageRadioGroup {
    constructor(parent, field, params, setValue) {
      this.parent = parent;
      this.field = field;
      this.value = params;
      this.setValue = setValue;
      this.alignment = this.field.alignment || 'vertical';
      this.fontFamily = this.field.fontFamily

      // Setup event dispatching on change
      this.changes = [];
      this.triggerListeners = function () {
        // Run callbacks
        for (let i = 0; i < this.changes.length; i++) {
          this.changes[i](this.value);
        }
      };

      groupCounter++;
    }
    /**
       * Append the field to the wrapper.
       * @public
       * @param {H5P.jQuery} $wrapper
       */
    appendTo($wrapper) {
      const buttons = [];
      const self = this;

      const toggleSelected = $selectedInput => {
        buttons.forEach($button => {
          $button.removeClass('checked');
        });

        $selectedInput.parent().addClass('checked');
      };

      self.$container = $(H5PEditor.createFieldMarkup(
        self.field,
        `<div class="h5p-editor-image-radio-group-container ${self.alignment}" role="radiogroup"></div>`
      ));

      const $buttonGroup = self.$container.find('.h5p-editor-image-radio-group-container');

      for (let i = 0; i < self.field.options.length; i++) {
        const option = self.field.options[i];
        const inputId = `h5p-editor-image-radio-group-button-${groupCounter}-${i}`;
        const isChecked = (self.value === option.value) ||
          (self.value === undefined && this.field.default === option.value);

        const $label = $('<label>', {
          class: `h5p-editor-image-radio-group-button ${option.value}${isChecked ? ' checked' : ''}`
        }).appendTo($buttonGroup);
        buttons.push($label);

        const $icon = $('<span>', {
          class: 'font-icon',
          style: `font-family: "${self.fontFamily}"`,
          html: option.fontIcon ? `&#x${option.fontIcon};` : ""
        });
        $icon.appendTo($label);


        const $input = $('<input>', {
          type: 'radio',
          name: self.field.name + groupCounter,
          value: option.value,
          id: inputId,
          'aria-hidden': 'true',
          checked: isChecked,
          change: () => {
            toggleSelected($($input));
            self.value = $('input:checked', $buttonGroup).val();
            self.setValue(self.field, self.value);
            self.triggerListeners();
          }
        }).appendTo($label);

        $('<span>', {
          html: option.label,
        }).appendTo($label);

        if (option.description) {
          $('<div>', {
            class: 'h5p-option-description',
            html: option.description
          }).appendTo($label);
        }
      }

      self.$container.appendTo($wrapper);
    }

    validate() {
      return true;
    }

    remove() {};
  }

  return ImageRadioGroup;
})(H5P.jQuery);
