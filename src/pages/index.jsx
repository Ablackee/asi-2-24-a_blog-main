import Page from "@/web/components/Page.jsx"
// import api from "@/web/services/api.js"
import { useState } from "react"

const IndexPage = () => {
  const [posts] = useState([])

  // useEffect(() => {
  //   ;(async () => {
  //     const {
  //       data: { result },
  //     } = await api("/posts")

  //     setPosts(result)
  //   })()
  // }, [])

  return (
    <Page className="gap-8">
      <h1 className="text-3xl font-semibold">Nmaper</h1>
    </Page>
  )
}

export default IndexPage
