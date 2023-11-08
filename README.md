
## To-Do 
- [ ] *Webpage layout for displaying cv & experience, like the one [Xiang's](https://jessegator.github.io/cv/) version have, and could be place in bio, at there put a icon for pdf cv download*
- [ ] *the mode button is rendering everytime on dark mode when switching between pages, which is because using localstorage, client-side rendering. Astro support server side render, make it server side*
- [ ] [*therefore the way icon animation is written also might needed to change, or adding two animation one for spinning or the fade-in*]
- [ ] [*JoJo Style*](https://www.youtube.com/watch?v=s7oTqPHeXEY)
    - *click the header icon, play "the world" sound effect, and "砸瓦鲁多"*
    - *Text starting floating from top to down*
    - *then switch to new interesting page*
    - [*Text Rain*](https://www.youtube.com/watch?v=OfSlkvtCeaI)
- [ ] *3D Animation Effect (better with CSS no JS)*
- [ ] *may want to create a section only display publications, don't mix up posts and publications*
- [ ] *markdown post color setting for code box, and adding copy button like those in github*
- [ ] *download some important or necessary font and use them locally*
```
For myself: where to find the style or js used for certain tag? Check if they are components,
if yes, I usually define their style and js within their component astro file, like Link.astro
if not, usually in the global.css
```



## Astro Guide

&#x23f5; *Init*
```
npm create astro@latest
```

&#x23f5; *Tree*
```
# enable treesitter 
:TSInstall astro

# directory tree
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

&#x23f5; *Deploy to [`github`](https://docs.astro.build/en/guides/deploy/github/) or [`Netlify`](https://www.netlify.com)*


<details>
    <summary><i>{...}</i></summary>

*1) frontmatter* <br>
*where you write definition of variable, parameters, imports, fetch data; 
later can be used in the astro(html below)*


*2) Astro.props* <br>
*think of it as an dictionary/array
you can pass it as argument into functions like you do in other programming language
every Astro.props is dynamic and scoped to each component/files. Different across different file
you can define it in frontmatter, or inherted from imported file/component*


*3) pass through Astro.props* <br>
refer to *[`PostCard.astro`](./src/components/PostCard.astro)* and *[`[...page].astro`](./src/pages/blog/[...page].astro)* together.
```javascript
const { frontmatter, url, tagType } = Astro.props;
const Tag = tagType;
const { title, date, author, image, description, category } = frontmatter;
```

*"frontmatter, url and tagType" are received from whatever .astro file that import this component
when [...page].astro file pass in all argument into <PostCard />, they are store in Astro.props 
so you can distribute them into different arguments here 
frontmatter parameter is further distribute into title, date, etc*


*4) getStaticPaths()* <br>
```javascript
const { page } = Astro.props;
```
*in the [...page.].astro file, getStaticPaths() function is used, so all the markdown information are
get from this directory, and writing in that way will automatically store those information into 
Astro.props, and then you give a parameter to store information in Astro.props for below use*


*5) image optimization*
```shell
npm install sharp
>> npx astro add image      // update manually in astro.config.mjs if run into error, and re-run
```

</details>

```
Concepts helps to understand astro framework
```

## 🧞 Commands
All commands are run from the root of the project, from a terminal:

| Command                   | Action                                                            |
| :------------------------ | :---------------------------------------------------------------- |
| `npm install`             | Installs dependencies (install node_modules, package-lock.json)   |
| `npm run dev`             | Starts local dev server at `localhost:3000`                       |
| `npm run build`           | Build your production site to `./dist/`                           |
| `npm run preview`         | Preview your build locally, before deploying                      |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`                  |
| `npm run astro -- --help` | Get help using the Astro CLI                                      |
