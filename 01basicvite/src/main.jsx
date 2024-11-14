import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

const reactElement = {
  type: 'a',
  props: {
      href: "https://google.com",
      target: '_blank',
      children: 'Click me to visit Google'
  }
};

function MyApp() {
  return (
    <div>
      <h1>Custom React App</h1>
      <a href={reactElement.props.href} target={reactElement.props.target}>
        {reactElement.props.children}
      </a>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
    {/* Optionally, you can render <App /> as well */}
    <App />
  </StrictMode>
);
