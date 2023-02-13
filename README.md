# **_The Pesapal Developer Challenge_**

## **STATIC SITE GENERATOR**

Design and implement a simple static-site generator.

It should be able to:

1. take a folder containing Markdown (or another non-HTML markup-type format) pages and produce a website.
2. There should be support for a

- homepage,
- articles
- supporting pages (e.g. an about page and some error pages).

[template-page-src]https://www.tailwindtoolbox.com/templates/minimal-blog

#### Reading File in Node.js

The simplest way to read a file in Node.js is to use the fs.readFile() method.
[Read-file]https://nodejs.dev/en/learn/reading-files-with-nodejs/

#### gray-matter

Read the front-matter portion of ms file and parse its using gray-matter.
[gray-matter]https://www.npmjs.com/package/gray-matter-from-file?activeTab=readme

###### installation

`npm install -g gray-matter`

#### marked

To generate from markdown files and generates and HTML code.
[marked]https://marked.js.org/

##### installation

npm install -g marked
