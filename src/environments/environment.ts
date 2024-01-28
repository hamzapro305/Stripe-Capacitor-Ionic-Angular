// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  stripe: {
    publishableKey:
      'pk_test_51M1ru6ALO2GIO6ULoBrPguH6jabDb9go8nesd5AXIXGuHGiE1jQuVHhojmO98CesiS85Wd5v7K7XAbpwXgV6fmlT00L8JJC6N6',
    secretKey:
      'sk_test_51M1ru6ALO2GIO6ULds10yrj31OB4aCXmSowmWDohlHuuThvIyFTd38xI9A74FgSapTBWhgSRGUKx6cm6nuOSyzZy00RiDD56qp',
  },
  api: 'http://localhost:3000/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
