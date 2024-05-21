/* empty css                            */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderSlot, e as createAstro, f as renderComponent, g as addAttribute, h as renderHead, u as unescapeHTML } from '../astro_CUZEUsAS.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$2 = createAstro();
const $$AsideMenuIem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AsideMenuIem;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a class="flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 font-medium transition duration-300" href="{href}"> ${renderSlot($$result, $$slots["default"])} </a> </li>`;
}, "C:/DeveloperSofware/ProjectALFAMS/src/components/AsideMenuIem.astro", void 0);

const $$Library = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-message-chatbot"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path><path d="M9.5 9h.01"></path><path d="M14.5 9h.01"></path><path d="M9.5 13a3.5 3.5 0 0 0 5 0"></path></svg>`;
}, "C:/DeveloperSofware/ProjectALFAMS/src/components/Icons/Library.astro", void 0);

const $$HomeIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-home-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h6"></path><path d="M9 21v-6a2 2 0 0 1 2 -2h2c.39 0 .754 .112 1.061 .304"></path><path d="M19 21.5l2.518 -2.58a1.74 1.74 0 0 0 0 -2.413a1.627 1.627 0 0 0 -2.346 0l-.168 .172l-.168 -.172a1.627 1.627 0 0 0 -2.346 0a1.74 1.74 0 0 0 0 2.412l2.51 2.59z"></path></svg>`;
}, "C:/DeveloperSofware/ProjectALFAMS/src/components/Icons/HomeIcon.astro", void 0);

const $$SearchIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 21l-6 -6"></path></svg>`;
}, "C:/DeveloperSofware/ProjectALFAMS/src/components/Icons/SearchIcon.astro", void 0);

const $$ContendIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-world-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M21 12a9 9 0 1 0 -9 9"></path><path d="M3.6 9h16.8"></path><path d="M3.6 15h7.9"></path><path d="M11.5 3a17 17 0 0 0 0 18"></path><path d="M12.5 3a16.984 16.984 0 0 1 2.574 8.62"></path><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M20.2 20.2l1.8 1.8"></path></svg>`;
}, "C:/DeveloperSofware/ProjectALFAMS/src/components/Icons/ContendIcon.astro", void 0);

const $$AsideMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class=" flex flex-col flex-1 gap-2"> <div class="bg-zinc-900 rounded-lg p-2"> <ul> ${renderComponent($$result, "AsideMenuIem", $$AsideMenuIem, { "href": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HomeIcon", $$HomeIcon, {})}
Inicio
` })} ${renderComponent($$result, "AsideMenuIem", $$AsideMenuIem, { "href": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SearchIcon", $$SearchIcon, {})}
Buscar
` })} ${renderComponent($$result, "AsideMenuIem", $$AsideMenuIem, { "href": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContenICon", $$ContendIcon, {})}
Contenido
` })} ${renderComponent($$result, "AsideMenuIem", $$AsideMenuIem, { "href": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Library", $$Library, {})}
ALFABOT
` })} </ul> </div> <div class="bg-zinc-900 rounded-lg p-2"> <ul> ${renderComponent($$result, "AsideMenuIem", $$AsideMenuIem, { "href": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContenICon", $$ContendIcon, {})}
Biblioteca Alfabetizacion TIC
` })} </ul> </div> </nav>`;
}, "C:/DeveloperSofware/ProjectALFAMS/src/components/AsideMenu.astro", void 0);

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/DeveloperSofware/ProjectALFAMS/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div id="app" class="relative h-screen p-2 gap-2 " data-astro-cid-sckkx6r4> <aside class="[grid-area:aside] flex-col flex overflow-y-auto " data-astro-cid-sckkx6r4> ${renderComponent($$result, "AsideMenu", $$AsideMenu, { "data-astro-cid-sckkx6r4": true })} <main class="[grid-area:main] rounded-lg bg-zinc-900 overflow-y-auto" data-astro-cid-sckkx6r4></main> <footer class="[grid-area:player] bg-white-200" data-astro-cid-sckkx6r4></footer> ${renderSlot($$result, $$slots["default"])} </aside> </div>  </body></html>`;
}, "C:/DeveloperSofware/ProjectALFAMS/src/layouts/Layout.astro", void 0);

const html = "<h1 id=\"alfatic\">ALfatic</h1>\n<p>Alfatic es …</p>\n<h1 id=\"subtitulo\">Subtitulo</h1>\n<h1 id=\"subtitulo-2\">Subtitulo 2</h1>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#B392F0\">funcion</span><span style=\"color:#E1E4E8\"> (){</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    console.</span><span style=\"color:#B392F0\">log</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">'Hola mundo'</span><span style=\"color:#E1E4E8\">)</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">}</span></span>\n<span class=\"line\"></span></code></pre>";

				const frontmatter = {"title":"contenido de noticias","layout":"../layouts/layout.astro"};
				const file = "C:/DeveloperSofware/ProjectALFAMS/src/pages/content.md";
				const url = "/content";
				function rawContent() {
					return "\r\n# ALfatic\r\n\r\nAlfatic es ....\r\n\r\n# Subtitulo \r\n\r\n# Subtitulo 2 \r\n\r\n\r\n```javascript \r\nfuncion (){\r\n\r\n    console.log('Hola mundo')\r\n}\r\n```";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"alfatic","text":"ALfatic"},{"depth":1,"slug":"subtitulo","text":"Subtitulo"},{"depth":1,"slug":"subtitulo-2","text":"Subtitulo 2"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Layout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const content = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    Content,
    compiledContent,
    default: Content,
    file,
    frontmatter,
    getHeadings,
    rawContent,
    url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, content as c };
