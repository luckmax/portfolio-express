# Personal Portfolio Website – Express Version

## About This Project

This is my personal portfolio website created for INFR3120 – Web and Scripting Programming at Ontario Tech University.

My name is Temesgen Teklebrhan, and I am a second-year Networking and IT Security student. For this assignment, I took my portfolio from Assignment 1 and rebuilt it as a Node.js and Express web application using EJS views, Bootstrap and Font Awesome.

The professor's announcement on November 12th said we could reuse the content from Assignment 1, so I kept my text, photos, logo, intro video, project descriptions, contact form, colour scheme and CSS from my first portfolio.

- **Live Website:** https://temesgen-teklebrhan-portfolio.onrender.com
- **GitHub Repository:** https://github.com/luckmax/portfolio-express

## How to Run the Website

```bash
npm install
npm start
```

Then open http://localhost:3000 in the browser.

## How I Created the Project

I created the project using Express Generator, the same way we did in the November 3rd lecture:

```bash
express --view=ejs portfolio
cd portfolio
npm install
```

After that, I organized the project the same way as in class:

- Moved `bin/www` to the main folder, renamed it `server.js`, and changed the start script to `node server.js`
- Changed `var` to `let` in `app.js`
- Renamed the public folders to `Assets`, `Content` and `Script`
- Installed Bootstrap and Font Awesome with npm and made `node_modules` a static folder in `app.js`

## Website Pages

- **Home (`index.ejs`):** Introduces me and explains my interests in networking and cybersecurity.
- **About Me (`about.ejs`):** Shares my background, intro video, experience, certifications, and career goals.
- **Projects (`projects.ejs`):** Shows five projects I have worked on or am currently developing.
- **Contact Me (`contact.ejs`):** Includes a contact form with HTML5 validation.

## Routes

All of my routes are in `routes/index.js`. Each route uses `res.render()` to show a page and sends a title to it.

| Page       | URL            | View File      |
| ---------- | -------------- | -------------- |
| Home       | `/` or `/home` | `index.ejs`    |
| About Me   | `/aboutme`     | `about.ejs`    |
| Projects   | `/projects`    | `projects.ejs` |
| Contact Me | `/contactme`   | `contact.ejs`  |

The title shows in the browser tab, and the navbar uses it to highlight the page you are on. This is why the title in each route has to match the check in `main_nav.ejs` exactly.

## Header, Navbar and Footer

Instead of repeating the same code on every page, I split it into three partials in `views/partials`:

- **`header.ejs`:** The top of the page that loads Bootstrap, Font Awesome, and my CSS.
- **`main_nav.ejs`:** My logo and the Bootstrap navbar.
- **`footer.ejs`:** My email and links to my GitHub, LinkedIn, and Instagram.

Every page includes these partials, so if I change the navbar once, it changes on every page. The error page also uses them, so if someone goes to a page that does not exist, they can still use the navbar to get back.

## Responsive Design

In Assignment 1, I used three separate CSS files for different screen sizes. For this assignment, I used Bootstrap instead, so the website adjusts on its own.

**Desktop:** The navigation is on the right, my photo and introduction are beside each other, and the project boxes show three in a row.

**Tablet:** The project boxes show two in a row.

**Smartphone:** Everything is in a single column, and the navigation turns into a hamburger menu that opens when clicked.

## Colour Scheme

I kept the same blue colour scheme from Assignment 1, which was inspired by Ontario Tech University's colours.

| Colour      | Hex Code  | Where I Used It                                   |
| ----------- | --------- | ------------------------------------------------- |
| Dark Navy   | `#0B1F33` | Backgrounds, header, and footer                   |
| Navy Blue   | `#1F4E79` | Navigation buttons, headings, and gradients       |
| Medium Blue | `#4F81BD` | Borders, buttons, and highlights                  |
| Light Blue  | `#D9E6F2` | Section backgrounds and gradients                 |
| Off-White   | `#F7F9FC` | Content backgrounds and active navigation buttons |

Colour scheme tool: [https://color.adobe.com/create](https://color.adobe.com/create)

## CSS Gradients

I kept the same gradients from Assignment 1:

**Page Background:** A vertical gradient that goes from dark navy to lighter blue and off-white.

**Header:** A 45 degree gradient with dark navy and blue colours.

**Footer:** A negative 45 degree gradient to match the header.

**Home Introduction:** A 120 degree gradient behind my introduction and profile picture.

**Content Sections:** Horizontal gradients in the section boxes to separate the content.

## Contact Form

The form has the same fields as Assignment 1: name, email, phone number, and comments. The browser checks that every field is filled in, the email is valid, and the phone number is 10 digits. When everything is correct, `public/Script/app.js` shows a thank-you message under the form.

## Deployment

The website is hosted on Render. I connected my GitHub repository and set the build command to `npm install` and the start command to `npm start`. Every time I push to GitHub, Render updates the website.

## Sources and References

I used my INFR3120 course lectures as my main reference for building this website.

### Course Materials

- INFR3120 – Web and Scripting Programming, November 3rd and November 10th lecture notes and code, Ontario Tech University.
- INFR3120 CRUD Part 1 lecture code.
- INFR3120 Week 2 lecture materials (HTML5 video).
- Connolly & Hoar, *Fundamentals of Web Development*, 3rd Edition, Chapter 9 (form events).
- My Assignment 1 portfolio (reused as allowed in the November 12th announcement).

### External Resources

- **Adobe Color:** https://color.adobe.com/create — Used to review my website's colour scheme.
- **Portfolio Logo:** https://www.pinterest.com/pin/cukur-tattoo-symbol-trendy-sticker-for-cukur-fans--193021534025351964/ — I found this Çukur symbol on Pinterest and used it for my portfolio logo. I edited the image by removing its background and adjusting its appearance to match my website's design.
- **Bootstrap 5:** https://getbootstrap.com/docs/5.3/components/navbar/ — Navbar and hamburger menu, and https://getbootstrap.com/docs/5.3/layout/grid/ — Grid layout.
- **Font Awesome:** https://fontawesome.com/ — Source for the GitHub, LinkedIn, and Instagram icons.
- **Express Generator:** https://expressjs.com/en/starter/generator.html — Used to create the project.
- **Render:** https://render.com/docs/deploy-node-express-app — Used to deploy the website.

### AI Assistance

I used ChatGPT to help explain Express and EJS concepts, troubleshoot problems, and review my website while I was developing it. I also used it to help with responsive styling and writing explanations for the README.

I reviewed and tested the changes in VS Code to understand how they worked.

### External Code

My main references were the course lectures. Any code used from outside the lectures must be identified and credited, and must stay within the assignment's 10% external-code limit.