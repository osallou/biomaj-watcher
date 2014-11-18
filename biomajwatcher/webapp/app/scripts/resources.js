/*jslint browser: true, indent: 4, vars: true, nomen: true */

(function () {
  'use strict';

    function Stat($resource) {
        return $resource('/stat', {}, {
            list: {
              method: 'GET',
              isArray: true,
              cache: true
            }
        });
    };

    function BankStatus($resource) {
      return $resource('/bank/:name/status');
    };

    function Bank($resource) {
        return $resource('/bank', {}, {
            list: {
              method: 'GET',
              isArray: true,
              cache: true
            },
            get: {
              url: '/bank/:name',
              method: 'GET',
              isArray: false,
              cache: true
            }
        });
    };

    function Logout($resource) {
      return $resource('/logout');
    }

    function User($resource) {
        var user = null;
        return $resource('/auth', {}, {
            list: {
              method: 'GET',
              isArray: true,
              cache: true
            },
            get: {
              url: '/user/:name',
              method: 'GET',
              isArray: false,
              cache: true
            },
            is_authenticated: {
              url: '/auth',
              method: 'GET',
              isArray: false,
              cache: false
            },
            authenticate: {
              url: '/auth/:name',
              method: 'POST',
              isArray: false,
              cache: false
            }
        });
    };


  angular.module('biomaj.resources', ['ngResource'])
    .factory('Stat', Stat)
    .factory('Bank', Bank)
    .factory('BankStatus', BankStatus)
    .factory('User', User)
    .factory('Logout', Logout);

}());
