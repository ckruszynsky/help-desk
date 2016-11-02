let adminHome = {
  title: 'Admin Home',
  iconClass: 'fa-home'
};

let channels = {
  title: 'Channels',
  iconClass: 'fa-globe'
};

let settings = {
  title: 'Settings',
  iconClass: 'fa-cog'
};

let develop = {
   title: 'Development', 
   iconClass: 'fa-connectdevelop'
};

let social = {
  title: 'Social', 
  iconClass: 'fa-comment-o'
};
export default [
  { route: '', moduleId: './overview/index', title: 'Overview', nav: true, settings: { category: adminHome } },

  { route: 'email', moduleId: './email/index', title: 'Email', nav: true, settings: { category: channels } },
  { route: 'web-portal', moduleId: './webportal/index', title: 'Web Portal', nav: true, settings: { category: channels } },
  { route: 'twitter', moduleId: './twitter/index', title: 'Twitter', nav: true, settings: { category: social } },
  { route: 'facebook', moduleId: './facebook/index', title: 'Facebook', nav: true, settings: { category: social  } },
  { route: 'feedback-tab', moduleId: './feedbacktab/index', title: 'Feedback Tab', nav: true, settings: { category: social } },
  { route: 'api', moduleId: './api/index', title: 'API', nav: true, settings: { category: develop } },

  { route: 'account', moduleId: './account/index', title: 'Account', nav: true, settings: { category: settings } },
  { route: 'subscription', moduleId: './subscription/index', title: 'Subscription', nav: true, settings: { category: settings } },
  { route: 'security', moduleId: './security/index', title: 'Security', nav: true, settings: { category: settings } }
];
