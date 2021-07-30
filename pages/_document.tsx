import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import Provider from './components/Provider';
import { styletron } from '../styletron'

class RootDocument extends Document {
  static async getInitialProps(context:DocumentContext) {
    const renderPage = () =>
      context.renderPage({
        enhanceApp: (App:any) => (props:any) => (
          <Provider value={styletron}>
            <App {...props} />
          </Provider>
        ),
      })

    const initialProps = await Document.getInitialProps({
      ...context,
      renderPage,
    })
    const stylesheets = styletron.getStylesheets() || []
    return { ...initialProps, stylesheets }
  }

  render() {
    return (
      <Html>
        <Head>
          {this.props.stylesheets.map((sheet:any, i:number) => (
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