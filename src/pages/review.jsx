import Loader from "@/web/components/Loader.jsx"
import Page from "@/web/components/Page.jsx"
import api from "@/web/services/api.js"
import { useEffect, useState } from "react"

const Reviewpage = () => {
  const [loading, setLoading] = useState(true)
  const [results, setResults] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get("http://localhost:4000/nmap")
        setResults(data.result)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <Page title="Review">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-2xl overflow-hidden rounded bg-white p-4 shadow">
            {results.map((item) => (
              <div key={item._id}>
                <p>Target: {item.target}</p>
                <p>Options: {JSON.stringify(item.options)}</p>
                {item.maxRetries && <p>Max Retries: {item.maxRetries}</p>}
                {item.scanDelay && <p>Scan Delay: {item.scanDelay}</p>}
                {item.maxRate && <p>Max Rate: {item.maxRate}</p>}
                <pre>{item.result}</pre>
                <p>Created at: {item.createdAt}</p>
                <p>Updated at: {item.updatedAt}</p>
                <p>Version: {item.__v}</p>
                <hr className="my-4" />
              </div>
            ))}
          </div>
        </div>
      )}
    </Page>
  )
}

export default Reviewpage
