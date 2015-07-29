var app = angular.module('Meaniscule', ['ui.router', 'pascalprecht.translate']);

app.config(function ($urlRouterProvider, $locationProvider, $translateProvider) {
  // This turns off hashbang urls (/#about) and changes it to something normal (/about)
  $locationProvider.html5Mode(true);
  // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
  $urlRouterProvider.otherwise('/');

  $translateProvider
  .translations('en', {
    'SITE_TITLE': "Meaniscule",
    'INTRO_MESSAGE': "I'm just a simple MEAN stack wireframe for a quick start at making something.",
    'BUTTON_TEXT_EN': "English",
    'BUTTON_TEXT_JA': "Japanese",
    'BUTTON_TEXT_ES': "Spanish"
  })
  .translations('ja', {
    'SITE_TITLE': "ミーニスキュール",
    'INTRO_MESSAGE': "おいどんはシンプルなMEAN stackジェネレーターでござわす！",
    'BUTTON_TEXT_EN': "英語",
    'BUTTON_TEXT_JA': "日本語",
    'BUTTON_TEXT_ES': "スペイン語"        
  })
  .translations('es', {
    'SITE_TITLE': "¡Meaniscule!",
    'INTRO_MESSAGE': "No puedo escribir en español. Lo siento.",
    'BUTTON_TEXT_EN': "inglés",
    'BUTTON_TEXT_JA': "japonés",            
    'BUTTON_TEXT_ES': "español"            
  });
  $translateProvider.preferredLanguage('en');
  //$translateProvider.determinePreferredLanguage();
});

app.controller('TranslateController', function($translate, $scope) {
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };  
});