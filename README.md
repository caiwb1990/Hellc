Hellc
=====
##Demo

[Hellc](http://caiwb1990.github.io/Hellc/)

[Hellc's Blog](http://caiwb1990.github.io/)

[Lightweight markdown editor](http://caiwb1990.github.io/Hellc/editor.html)

##Usage

With Hellc and github pages you can easily create your static blog. Here is what you need to do.

1. Create a github account.
2. Create a repo named `your_user_name.github.io` (remember to check `Initilize and create README`).
3. Sign in [Hellc](http://caiwb1990.github.io/Hellc/) with your github account.
4. Click `Initilize` to set up basic files for your static blog site.(maybe a little slow)
5. Click `Go` and start writing.
6. Click `New post` to create a new post and when finish writing click `save` to generate the static page.
7. Now you can browse the `your_user_name.github.io` site and enjoy it!

![Hellc](http://isnowfy.github.io/img/Simple.png)

* You can use your own blog name, just modify the `main.json` file, and change `name="username"`.

* You can use disqus comment system, just modify the `main.json` file, and change `disqus_shortname=""` to `disqus_shortname="your_shortname"`.

* You can use your own custom domain, just modify the `CNAME` file.(see [also](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages))

##Features

* Hellc, no backend need
* Static blog
* Markdown editor
* Code highlight support
* Tex formula support
* Responsive html
* Drag and drop to upload image

##Custom

The template files are at `/src/template`, so you can modify the template files and css files. If you want use your own theme you can clone the project, modify the template files and push the entire `src` folder in your `gh-pages` branch which will allow you generate your own static blog.

##Todo

Enhance error display, Search, Sitemap, Rss

##License

MIT licensed.
static blog
