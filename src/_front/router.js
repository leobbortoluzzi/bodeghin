import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"80ef4817-0253-4178-9330-fb09c001d52d","homePageId":"a540dad1-310b-4577-8b71-3da7631f23fb","authPluginId":null,"baseTag":{},"defaultTheme":"dark","langs":[{"lang":"pt","default":true}],"background":{"backgroundColor":"#000","backgroundGradient":"000"},"workflows":[{"id":"68f33438-7cc6-4e0c-be37-1dfec349599f","actions":{},"trigger":"onload-app"}],"pages":[{"id":"588c0348-09d2-474a-a644-02d2c6cb0ce5","linkId":"588c0348-09d2-474a-a644-02d2c6cb0ce5","name":"Porções","folder":null,"paths":{"pt":"porcoes","default":"porcoes"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"6ab14705-345e-4a23-897f-9a21247e349f","sectionTitle":"body","linkId":"beb0476d-15e0-4dd9-9da5-01d44a3c4075"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro","pt":"Bodeghin Bar - Seu Boteco no Meio da Cidade"},"meta":{"desc":{"pt":"De Segunda a Sábado, A partir das 18:00, localizado na Rua Palamede Milioli, 409 - Centro em Criciúma"},"keywords":{"pt":"criciuma, bodeghin bar, bodeghin, bodeghin criciuma"},"__typename":"PageMeta","socialDesc":{"pt":"De Segunda a Sábado, A partir das 18:00, localizado na Rua Palamede Milioli, 409 - Centro em Criciúma"},"socialTitle":{"pt":"Bodeghin Bar - Seu Boteco no Meio da Cidade"},"structuredData":{}},"metaImage":"public/images/bodega.png?_wwcv=5"},{"id":"874abed7-d633-4719-b709-afb96d7f81d7","linkId":"874abed7-d633-4719-b709-afb96d7f81d7","name":"Pratos","folder":null,"paths":{"pt":"pratos","default":"pratos"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"caa3d64c-c985-4be8-bfc9-3d02958f7902","sectionTitle":"body","linkId":"5dcb0855-d5be-4a4d-a193-3e03b73b3286"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro","pt":"Bodeghin Bar - Seu Boteco no Meio da Cidade"},"meta":{"desc":{"pt":"De Segunda a Sábado, A partir das 18:00, localizado na Rua Palamede Milioli, 409 - Centro em Criciúma"},"keywords":{"pt":"criciuma, bodeghin bar, bodeghin, bodeghin criciuma"},"__typename":"PageMeta","socialDesc":{"pt":"De Segunda a Sábado, A partir das 18:00, localizado na Rua Palamede Milioli, 409 - Centro em Criciúma"},"socialTitle":{"pt":"Bodeghin Bar - Seu Boteco no Meio da Cidade"},"structuredData":{}},"metaImage":"public/images/bodega.png?_wwcv=5"},{"id":"fd0cc3ec-69c5-48e6-9aae-556e69926606","linkId":"fd0cc3ec-69c5-48e6-9aae-556e69926606","name":"Carnes","folder":null,"paths":{"pt":"carnes","default":"carnes"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"5559fd0d-824a-4964-884e-18690d6d3fff","sectionTitle":"body","linkId":"794c50d7-af5c-4888-bb01-13d0b8b1a096"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro","pt":"Bodeghin Bar - Seu Boteco no Meio da Cidade"},"meta":{"desc":{"pt":"De Segunda a Sábado, A partir das 18:00, localizado na Rua Palamede Milioli, 409 - Centro em Criciúma"},"keywords":{"pt":"criciuma, bodeghin bar, bodeghin, bodeghin criciuma"},"__typename":"PageMeta","socialDesc":{"pt":"De Segunda a Sábado, A partir das 18:00, localizado na Rua Palamede Milioli, 409 - Centro em Criciúma"},"socialTitle":{"pt":"Bodeghin Bar - Seu Boteco no Meio da Cidade"},"structuredData":{}},"metaImage":"public/images/bodega.png?_wwcv=5"},{"id":"c2641dff-7c2c-4c48-908b-3722bacfb54e","linkId":"c2641dff-7c2c-4c48-908b-3722bacfb54e","name":"Sobremesas","folder":null,"paths":{"pt":"sobremesas","default":"sobremesas"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"59b44002-12fe-49bc-acdd-62b5bf75d0e3","sectionTitle":"body","linkId":"06929ce6-32a5-4c25-8033-dc474bb2002c"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro","pt":"Bodeghin Bar - Seu Boteco no Meio da Cidade"},"meta":{"desc":{"pt":"De Segunda a Sábado, A partir das 18:00, localizado na Rua Palamede Milioli, 409 - Centro em Criciúma"},"keywords":{"pt":"criciuma, bodeghin bar, bodeghin, bodeghin criciuma"},"__typename":"PageMeta","socialDesc":{"pt":"De Segunda a Sábado, A partir das 18:00, localizado na Rua Palamede Milioli, 409 - Centro em Criciúma"},"socialTitle":{"pt":"Bodeghin Bar - Seu Boteco no Meio da Cidade"},"structuredData":{}},"metaImage":"public/images/bodega.png?_wwcv=5"},{"id":"5fb0e6d9-74f3-4e0c-b80c-8930e192e50f","linkId":"5fb0e6d9-74f3-4e0c-b80c-8930e192e50f","name":"Drinks","folder":null,"paths":{"pt":"drinks","default":"drinks"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"34291a17-2d08-41bf-99bf-e1f48d3af959","sectionTitle":"body","linkId":"05182f9d-b859-4e09-9281-5b9db81fab40"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro","pt":"Bodeghin Bar - Seu Boteco no Meio da Cidade"},"meta":{"desc":{"pt":"De Segunda a Sábado, A partir das 18:00, localizado na Rua Palamede Milioli, 409 - Centro em Criciúma"},"keywords":{"pt":"criciuma, bodeghin bar, bodeghin, bodeghin criciuma"},"__typename":"PageMeta","socialDesc":{"pt":"De Segunda a Sábado, A partir das 18:00, localizado na Rua Palamede Milioli, 409 - Centro em Criciúma"},"socialTitle":{"pt":"Bodeghin Bar - Seu Boteco no Meio da Cidade"},"structuredData":{}},"metaImage":"public/images/bodega.png?_wwcv=5"},{"id":"a540dad1-310b-4577-8b71-3da7631f23fb","linkId":"a540dad1-310b-4577-8b71-3da7631f23fb","name":"Home","folder":null,"paths":{"en":"home","pt":"home","default":"home"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"41f5d065-8565-4c75-9d0a-e52a982c6369","sectionTitle":"body","linkId":"0a93bdaa-0e2f-4e15-9b06-95687e20f671"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro","pt":"Bodeghin Bar - Seu Boteco no Meio da Cidade"},"meta":{"desc":{"pt":"De Segunda a Sábado, A partir das 18:00, localizado na Rua Palamede Milioli, 409 - Centro em Criciúma"},"keywords":{"pt":"criciuma, bodeghin bar, bodeghin, bodeghin criciuma"},"socialDesc":{"pt":"De Segunda a Sábado, A partir das 18:00, localizado na Rua Palamede Milioli, 409 - Centro em Criciúma"},"socialTitle":{"pt":"Bodeghin Bar - Seu Boteco no Meio da Cidade"},"structuredData":{}},"metaImage":"public/images/bodega.png?_wwcv=5"}],"plugins":[]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 5;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = true;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        '-staging.' + (process.env.WW_ENV === 'staging' ? process.env.VUE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(process.env.VUE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
