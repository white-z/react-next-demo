import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import Provider from '../components/Provider';
import { styletron } from '../styletron';
import { Server, Sheet } from 'styletron-engine-atomic'

type Props = DocumentInitialProps & {
  stylesheets: Sheet[]
};

class RootDocument extends Document<Props> {
  static async getInitialProps(context: DocumentContext): Promise<Props> {
    
    const renderPage = () => {
      return context.renderPage({
        enhanceApp: (App) => (props) => (
          <Provider value={styletron}>
            <App {...props} />
          </Provider>
        ),
      })
    }

    const initialProps = await Document.getInitialProps({
      ...context,
      renderPage,
    })
    const stylesheets = ( styletron as Server ).getStylesheets() || [];
    return { ...initialProps, stylesheets }
  }

  render() {
    return (
      <Html>
        <Head>
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs['data-hydrate']}
              key={i}
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default RootDocument