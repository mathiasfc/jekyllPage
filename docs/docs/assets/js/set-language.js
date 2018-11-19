$(document).ready(function() {
    var lang = window.navigator.language;
    if (lang) {
        if (lang.indexOf('pt') >= 0) {
            setLanguage('en');
        } else if (lang.indexOf('en') >= 0) {
            setLanguage('en');
        }
    }
});

function setLanguage(lang) {
    var language = dict[lang];

    var nav = $('#dl-menu');
    nav.find('.span-about').text(language.nav.sobre);
    nav.find('.span-more').text(language.nav.saibaMais);
    nav.find('.span-nav-projects').text(language.nav.projetos);
    nav.find('.span-nav-all-projects').text(language.nav.todosProjetos);
    nav.find('.span-nav-all-tags').text(language.nav.todasTags);
    nav.find('.dl-back a').text(language.nav.voltar);

    if (document.location.pathname == '/' || document.location.pathname == '/jekyllPage/') {
        $('.span-home-projects').text(language.home.projetos);
        $('.span-home-about').text(language.home.sobre);
        $('.span-home-contact').text(language.home.contato);
        $('.build-with span').text(language.home.feitoCom);
    } else if (document.location.pathname == '/about/') {
        $('.post-title h1').text(language.about.sobre);
    } else if (document.location.pathname == '/projects/') {
        $('.post-title h1').text(language.projects.projetos);
    } else if (document.location.pathname == '/contact/') {
        $('.contact-title').text(language.contact.contato);
    }
}

var dict = {
    pt: {
        nav: {
            projetos: 'Projetos',
            sobre: 'Sobre',
            contato: 'Contato',
            todosProjetos: 'Todos Projetos',
            todasTags: 'Todas Tags',
            saibaMais: 'Saiba Mais',
            voltar: 'voltar'
        },
        home: {
            projetos: 'Projetos',
            sobre: 'Sobre',
            contato: 'Contato',
            feitoCom: 'Feito com'
        },
        about: {
            sobre: 'Sobre'
        },
        projects: {
            projetos: 'Projetos'
        },
        contact: {
            contato: 'Contato'
        }
    },
    en: {
        nav: {
            projetos: 'Projects',
            sobre: 'About',
            contato: 'Contact',
            todosProjetos: 'All Projects',
            todasTags: 'All Tags',
            saibaMais: 'Learn More',
            voltar: 'back'
        },
        home: {
            projetos: 'Projects',
            sobre: 'About',
            contato: 'Contact',
            feitoCom: 'Build with'
        },
        about: {
            sobre: 'About'
        },
        projects: {
            projetos: 'Projects'
        },
        contact: {
            contato: 'Contact'
        }
    }
};
