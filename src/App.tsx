import { JSX } from 'solid-js';
import Header from './components/header';
import Footer from './components/footer';
import ToastContainer from './components/toast-container';

export type AppProps = JSX.HTMLAttributes<HTMLElement> & {
  children?: JSX.Element
};

export default function App(props: AppProps) {
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
