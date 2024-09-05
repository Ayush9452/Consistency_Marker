import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ConfigProvider } from 'antd';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: "#0000",
              colorPrimaryHover: "#373535",
              borderRadius: "0px",
            }
          },
          token: {
            borderRadius: "2px",
          }
        }}
      >
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);