Better Web Apps With AngularUI
==========

> Learning [Angular UI](https://angular-ui.github.io/) with Tuts Plus [course](https://code.tutsplus.com/courses/better-web-apps-with-angularui).

## The Highlight Utility

[View](highlighting/index.html) | [Controller](highlighting/app.js)

By default, the filter is case insensitive

  ```html
  <p ng-bind-html='text | highlight:query'></p>
  ```

To make it case sensitive

  ```html
  <p ng-bind-html='text | highlight:query:true'></p>
  ```