import { render } from "@testing-library/react"
import Layout from "../components/Layout"

test("Mount component", () => {
    const { container } = render(<Layout open={false} onChangeOpen={() => { }}></Layout>)

    expect(container.getElementsByClassName("blue-layout").length).toBe(1)
})

test("Hidden sidebar", () => {
    const { container } = render(<Layout open={false} onChangeOpen={() => { }} hideSidebarMenu></Layout>)

    expect(container.querySelectorAll(".blue-layout.hasNoSidebarMenu").length).toBe(1)
})