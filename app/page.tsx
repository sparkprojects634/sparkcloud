import Main from "@/app/pages/Main"
import Footer from "./components/Footer"
import Header from "./components/Header"
import AppWrapper from "./components/AppWrapper"

export default function Home() {
  return (
    <AppWrapper>
      <Header />
      <Main />
      <Footer />
    </AppWrapper>
  )
}