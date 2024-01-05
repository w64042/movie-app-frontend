import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  useLocation,
  useNavigationType,
  createRoutesFromChildren,
  matchRoutes,
} from 'react-router-dom';
import { ConfigProvider } from 'antd';
import plPL from 'antd/es/locale/pl_PL';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { routes } from 'router/routes';
import { BrowserTracing } from '@sentry/tracing';
import GlobalStyle from './assets/styles/globals';
import 'antd/dist/antd.less';
import { theme } from './assets/styles/theme';
import { globalConfig, globalConfigUrl } from './configuration/config';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});
/* eslint no-underscore-dangle: 0 */
const getConfig = () =>
  fetch(globalConfigUrl)
    .then((r) => r.json())
    .then((data) => {
      globalConfig.config = data.data;
      const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement,
      );
      root.render(
        <ConfigProvider locale={plPL}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient} contextSharing>
              <RouterProvider router={routes} />
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </ThemeProvider>
        </ConfigProvider>,
      );
    })
    .catch(() => {
      const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement,
      );
      root.render(
        <ConfigProvider locale={plPL}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient} contextSharing>
              <RouterProvider router={routes} />
              <p>Error with fetch config file</p>
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </ThemeProvider>
        </ConfigProvider>,
      );
    });
getConfig();
