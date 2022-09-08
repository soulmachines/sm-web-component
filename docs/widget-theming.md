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
        --color-primary-lightest: #e8ebef;
        --color-primary-light: #ccd4dd;
        --color-primary-base: #1e5b98;
        --color-primary-dark: #234973;

        --color-primary-500: #34669b;
        --color-primary-600: #215489;

        --color-secondary-100: #dfedee;

        --color-grayscale-100: #eaeaea;
        --color-grayscale-200: #d3d3d3;
        --color-grayscale-900: #2c2c2b;

        --color-error-400: #ed5645;
        --color-error-500: #bd2920;
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

If you are curious what style an element uses, you can inspect the element using your browser dev tools. For example if you inspect the connect button, you'll see it has a class `sm-text-primary-base`. This means it uses the primary base for text color. Another example is `sm-bg-secondary-base`, this means its using the secondary base color for the background color.
