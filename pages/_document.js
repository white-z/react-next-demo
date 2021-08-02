import Document, { Html, Head, Main, NextScript } from 'next/document'
import Provider from '../components/Provider';
import { styletron } from '../styletron'

class RootDocument extends Document {
  static async getInitialProps(context) {
    const renderPage = () =>
      context.renderPage({
        enhanceApp: (App) => (props) => (
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