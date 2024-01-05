import { IMenuItem } from 'commons';
import {
  ROUTES,
  ROUTES_DASHBOARD,
} from 'router/paths';

export class MenuParams {
  public static readonly dashboard: IMenuItem = {
    name: 'Pulpit',
    route: ROUTES.DASHBOARD,
    type: 'Dashboard',
    sections: [
      {
        name: 'Moje konto',
        route: ROUTES_DASHBOARD.MY_ACCOUNT,
      },
    ],
  };

  // public static readonly finance: IMenuItem = {
  //   name: 'Zestawienia księgowe',
  //   route: ROUTES.FINANCE,
  //   type: 'Finance',
  //   sections: [
  //     {
  //       name: 'Wygeneruj raport',
  //       route: ROUTES_FINANCE_REPORTS.GENERATE,
  //     },
  //     {
  //       name: 'Raporty za okresy poprzednie',
  //       route: ROUTES_FINANCE_REPORTS.PREVIOUS,
  //     },
  //     {
  //       name: 'Inne',
  //       route: ROUTES_FINANCE.OTHERS,
  //       subSections: [
  //         {
  //           name: 'Podsekcja 1',
  //           route: ROUTES_DASHBOARD.MY_ACCOUNT,
  //         },
  //       ],
  //     },
  //   ],
  // };

  /**
   * Get all menu params
   * @private
   */

  public static readonly menu: IMenuItem[] = [
    MenuParams.dashboard,
  ];
}
