import { IMenuItem } from 'commons';
import {
  ROUTES,
  ROUTES_DASHBOARD,
} from 'router/paths';

export class MenuParams {
  public static readonly dashboard: IMenuItem = {
    name: 'Panel główny',
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

    public static readonly movies: IMenuItem = {
    name: 'Filmy',
    route: ROUTES.MOVIES,
    type: 'Movies',
    sections: [
      {
        name: 'Przeglądaj filmy',
        route: ROUTES.MOVIES,
      },
    ],
  };

  // lista seriali
  public static readonly series: IMenuItem = {
    name: 'Seriale',
    route: ROUTES.SERIES,
    type: 'Series',
    sections: [
      {
        name: 'Przeglądaj seriale',
        route: ROUTES.SERIES,
      },
    ],
  };

  /**
   * Get all menu params
   * @private
   */

  public static readonly menu: IMenuItem[] = [
    MenuParams.dashboard,
    MenuParams.movies,
    MenuParams.series,
  ];
}
