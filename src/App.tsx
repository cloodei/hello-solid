import { JSX } from 'solid-js';
import Header from './components/header';
import Footer from './components/footer';
import ToastContainer from './components/toast-container';
import { useTheme } from './store/use-theme';

export type AppProps = JSX.HTMLAttributes<HTMLElement> & {
  children?: JSX.Element
};

export default function App(props: AppProps) {
  useTheme();

  return (
    <>
      <Header />
      <main>
        {props.children}
      </main>
      <ToastContainer />
      <Footer />
    </>
  );
}
