import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
    
    didTransition() {
      this._super(...arguments);
      window.scrollTo(0, 0);
    }
});

Router.map(function() {
  this.route('home', { path: ''});


  this.route('actors');
  this.route('census');
  this.route('census-group', { path: '/census/:filter' });
  this.route('characters', { path: '/chars'});
  this.route('char', { path: '/char/:id' });
  this.route('char-edit', { path: '/char/:id/edit' });
  this.route('char-source', { path: '/char/:charId/source/:versionId' });
  this.route('chargen');
  this.route('chargen-review');
  this.route('combat', { path: '/combat/:id' });
  this.route('combats');
  this.route('error');
  this.route('events');
  this.route('events-ical', { path: '/event/ical' } );
  this.route('event', { path: '/event/:event_id'} );
  this.route('event-edit', { path: '/event/:event_id/edit'} );
  this.route('event-create', { path: '/event/create' } );
  this.route('files');
  this.route('file', { path: '/file/:folder/:name' });
  this.route('file-edit', { path: '/file/edit/:folder/:name' });
  this.route('forum', { path: '/forum' });
  this.route('forum-category', { path: '/forum/:category_id'});
  this.route('forum-topic', { path: '/forum/:category_id/:topic_id'});
  this.route('forum-create-post', { path: '/forum/:category_id/create-post' })
  this.route('fs3combat-gear', { path: '/fs3combat/gear/' });
  this.route('fs3combat-gear-detail', { path: '/fs3combat/gear/:type/:name' })
  this.route('fs3skills-abilities', { path: '/fs3skills/abilities' });
  this.route('help');
  this.route('help-topic', { path: '/help/:topic' });
  this.route('jobs');
  this.route('job', { path: '/job/:id' });
  this.route('locations');
  this.route('location', { path: '/location/:id'});
  this.route('logs');
  this.route('log', { path: '/log/:file' });
  this.route('login', { path: '/login'});
  this.route('mail');
  this.route('mail-message', { path: '/mail/:id'});
  this.route('mail-send');
  this.route('map', { path: '/map/:id' });
  this.route('maps');
  this.route('play');
  this.route('players', { path: '/players'});
  this.route('player', { path: '/player/:id'});
  this.route('plots');
  this.route('plot', { path: '/plot/:id' });
  this.route('plot-edit', { path: '/plot/:id/edit' });
  this.route('plot-create', { path: '/plot/create' });
  this.route('recent-changes');
  this.route('register');
  this.route('roster');
  this.route('scenes');
  this.route('scene', { path: '/scene/:id' } );
  this.route('scene-edit', { path: '/scene/:id/edit' } );
  this.route('scene-create', { path: '/scene/create' } );
  this.route('who', { path: '/who'});
  this.route('wiki');
  this.route('wiki-page', { path: '/wiki/:id'});
  this.route('wiki-all', { path: '/wiki/all'});
  this.route('wiki-create', { path: '/wiki/create'});
  this.route('wiki-edit', { path: '/wiki/:id/edit'});
  this.route('wiki-source', { path: '/wiki/:page_id/source/:version_id'});
  this.route('wiki-tag', { path: '/wiki/tag/:id'});
  this.route('wiki-tags', { path: '/wiki/tags'});
  this.route('tinker');
});

export default Router;