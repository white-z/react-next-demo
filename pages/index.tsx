import Link from 'next/link'
import Layout from '../components/Layout'
import useWindowOffset from '../@hooks/useWindowOffset';

export default function Home() {
  const { top } = useWindowOffset();
  return (
    <Layout title="Home">
      <Link href="/posts/post">POST</Link>
      <div style={{height: '2000px'}}>{top}</div>
    </Layout>
  )
}
