# Dovetailer Starter

Dovetailer is an email compiler. Write Sass and Nunjucks to generate HTML emails with text versions. [Learn more here.](https://github.com/maxlapides/dovetailer).

This repo is meant to be forked. Use it as a starter, and hack away :)

## Requirements

- Node 8+

## Quick Start

```
npm install
npm start
```

## HTTP API

This repo also comes with an HTTP API. Run `node service` to start the API service on port 3000. There's one endpoint, `email`.

Example:

```
POST http://localhost:3000/email
Body {
  "name": "welcome",
	"context": {
    "header": "Hello there,"
  }
}
```

This repo also includes a `Dockerfile` for this API.

## Coding Tips

To prevent as many potential rendering issues as possible, I recommend the following best practices:

- Avoid `margin` styles, but `padding` works on `<td>`s. Refer to the MailChimp or Campaign Monitor CSS guides (linked below under Email Coding) to see whether the styles you're using will work across email clients.
- Never use HTML `id`s, only use `class`es.
- Avoid `<p>`, `<span>`, or `<div>` tags
- Also avoid any old-school non-semantic HTML tags like `<font>` and `<center>` (use CSS instead)
- Always put `alt` attributes on `<img>`s
- `<td>` tags containing text should always have the `font-family` style
- In general, keep styles in CSS. A notable exception is `align="center"`, which is a handy way to center align tables or images.
- Get clever with `rowspan` and `colspan`!

## Project Organization

- `build`: generated output
- `components`: reusable template bits
- `emails`: individual email types
- `templates`: email templates designed to be inherited

## Helpful Resources

### Documentation

- [Dovetailer Documentation](https://github.com/maxlapides/dovetailer)
- [Nunjucks](https://mozilla.github.io/nunjucks/templating.html)
- [Sass](https://sass-lang.com/documentation/file.SASS_REFERENCE.html)

### Email Coding

- [Limitations of HTML Email](https://kb.mailchimp.com/campaigns/design/limitations-of-html-email)
- [Campaign Monitor CSS Guide](https://www.campaignmonitor.com/css/)
- [MailChimp CSS Support](https://templates.mailchimp.com/resources/email-client-css-support/)
