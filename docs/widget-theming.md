# Theming

We have a default theme of colors, styles and fonts. These are defined using [css varaibles](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) which you can override with your own brand styles. You can pick and choose what you override, you don't need to modify all the values.

To use css variables you'll need to add variables to your stylesheet or `<style>` tag in your html document. In the examples below i'll use a `<style>` tags. Add the style tag to the `<head>` of your document.

```
// Open the style tag
<style>

    // select the widget element
    sm-widget {
        // List all your css variables
        --<css-variable-name>: <value>;
    }

// Close the style tag
</style>
```

## Changing the font

There are two types of font's you can use. Web safe fonts and custom fonts. Web safe fonts are ones that are included on peoples computers. They do not require any font installation. Custom fonts will require you to install the font. You can list multiple fonts, it will try and use the first one defined and fallback to the others.

Usage

```
<style>
    sm-widget {
    --font-family-primary: 'Times, "Times New Roman", Georgia, serif';
    }
</style>
```

# Palette

The widget is using multiple numeric color scales. A color scale is a group of color shades that listed from light to dark. Where 100 is the lightest color and 900 is the darkest. Our two main scales are primary and secondary.

```
<style>
    sm-widget {
        --color-primary-100: #e8ebef;
        --color-primary-200: #ccd4dd;
        --color-primary-300: #a5b5c7;
        --color-primary-400: #6e8cad;
        --color-primary-500: #34669b;
        --color-primary-600: #215489;
        --color-primary-700: #234973;
        --color-primary-800: #223e5d;
        --color-primary-900: #1c2d41;

        --color-secondary-100: #dfedee;
        --color-secondary-200: #b6dadc;
        --color-secondary-300: #6bc0c7;
        --color-secondary-400: #2f979d;
        --color-secondary-500: #346b6f;
        --color-secondary-600: #31595b;
        --color-secondary-700: #2d4c4f;
        --color-secondary-800: #284142;
        --color-secondary-900: #1f2f30;

        --color-grayscale-100: #eaeaea;
        --color-grayscale-200: #d3d3d3;
        --color-grayscale-300: #b2b2b2;
        --color-grayscale-400: #898989;
        --color-grayscale-500: #636363;
        --color-grayscale-600: #535252;
        --color-grayscale-700: #484847;
        --color-grayscale-800: #3c3c3c;
        --color-grayscale-900: #2c2c2b;

        --color-neutral-100: #e8ebee;
        --color-neutral-200: #cdd3da;
        --color-neutral-300: #a9b4c0;
        --color-neutral-400: #788ca1;
        --color-neutral-500: #52657a;
        --color-neutral-600: #455463;
        --color-neutral-700: #3d4955;
        --color-neutral-800: #343d47;
        --color-neutral-900: #272d33;

        --color-error-100: #f7e7e5;
        --color-error-200: #f4c9c2;
        --color-error-300: #f39d8f;
        --color-error-400: #ed5645;
        --color-error-500: #bd2920;
        --color-error-600: #972c21;
        --color-error-700: #812a20;
        --color-error-800: #69271e;
        --color-error-900: #4a1f19;
    }
</style>
```

## Box shadow

We've use four different shadow levels, `sm`, md, lg and xl.

Usage

```
  <style>
      sm-widget {
        --box-shadow-sm: 0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 8px rgba(0, 0, 0, 0.04), 0px 4px 16px rgba(0, 0, 0, 0.06);
        --box-shadow-md: 0px 2px 10px rgba(0, 0, 0, 0.04), 0px 6px 24px rgba(0, 0, 0, 0.1);
        --box-shadow-lg: 0px 4px 12px rgba(0, 0, 0, 0.06), 0px 12px 28px rgba(0, 0, 0, 0.12);
        --box-shadow-xl: 0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 8px 16px rgba(0, 0, 0, 0.12), 0px 16px 32px rgba(0, 0, 0, 0.12);
      }
    </style>
```

# Debug

If you are curious what style an element uses, you can inspect the element using your browser dev tools. For example if you inspect the connect button, you'll see it has a class `sm-text-primary-300`. This means it uses the primary 300 shade for text. Another example is `sm-bg-secondary-100`, this means its using the secondary 100 color for the background.
