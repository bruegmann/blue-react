import { useState } from "react"
import {
    BoxArrowLeft,
    Calendar,
    ClockHistory,
    FileEarmark,
    House,
    Pencil,
    PencilFill,
    Person,
    Star
} from "react-bootstrap-icons"
import { Link } from "react-router-dom"
import ActionMenu from "../../components/ActionMenu"
import Body from "../../components/Body"
import Header from "../../components/Header"
import HeaderTitle from "../../components/HeaderTitle"
import Intro from "../../components/Intro"
import Layout from "../../components/Layout"
import MenuItem from "../../components/MenuItem"
import Page from "../../components/Page"
import Search from "../../components/Search"
import SidebarMenu from "../../components/SidebarMenu"
import { logo } from "../Global"
import SidebarMenuItem from "../../components/SidebarMenuItem"

const exampleHistoryItems = ["Nice person", "Important message", "Document XYZ", "Boring appointment"]
const exampleFavoriteItems = ["Max Mustermann person", "A Word Document", "Boring appointment"]

function RecordField({
    edit,
    label,
    value = "Lorem ipsum",
    className = "col-md-3",
    type = "text"
}: {
    edit: boolean
    label: string
    value?: string
    className?: string
    type?: string
}) {
    return (
        <div className={className}>
            {edit ? (
                <div className="form-floating">
                    <input
                        type={type}
                        className="form-control"
                        id={`DemoApp-record-${label}`}
                        placeholder="ID"
                        value={value}
                    />
                    <label htmlFor={`DemoApp-record-${label}`}>{label}</label>
                </div>
            ) : (
                <>
                    <h3 className="h6 mb-0">{label}</h3>
                    <p>{value}</p>
                </>
            )}
        </div>
    )
}

export default function DemoApp() {
    const [sidebarIn, setSidebarIn] = useState(false)

    const [edit, setEdit] = useState(false)
    const toggleEdit = () => setEdit(!edit)

    return (
        <Layout
            sidebarIn={sidebarIn}
            onChangeSidebarIn={setSidebarIn}
            pages={[
                {
                    name: "home",
                    component: (
                        <Page>
                            <Header>
                                <HeaderTitle logo={logo} appTitle="Demo App">
                                    Home page
                                </HeaderTitle>
                            </Header>
                            <Body containerClass="no-container">
                                <div
                                    style={{
                                        backgroundColor: "#4158D0",
                                        backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"
                                    }}
                                    className="text-white p-5 rounded-top"
                                >
                                    <h1 className="display-5">Welcome, how are you doing?</h1>
                                </div>

                                <div className="container pt-3">
                                    <div className="row mb-3">
                                        <div className="offset-xl-4 col-xl-4 offset-md-3 col-md-5">
                                            <Search body placeholder="Search for content..." className="neu-input" />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col">
                                            <h2 className="mt-4 mb-3">
                                                <ClockHistory className="bi" /> Browser history
                                            </h2>

                                            <div className="list-group">
                                                {exampleHistoryItems.map((entry: string, i: number) => (
                                                    <a
                                                        key={i}
                                                        href="#record"
                                                        className="list-group-item list-group-item-action"
                                                    >
                                                        {entry}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="col">
                                            <h2 className="mt-4 mb-3">
                                                <Star className="bi" /> Favorites
                                            </h2>

                                            <div className="list-group">
                                                {exampleFavoriteItems.map((entry: string, i: number) => (
                                                    <a
                                                        key={i}
                                                        href="#record"
                                                        className="list-group-item list-group-item-action"
                                                    >
                                                        {entry}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <ul>
                                        <li>
                                            <Link to="">Back to the docs</Link>
                                        </li>

                                        <li>
                                            <a
                                                href="https://github.com/bruegmann/blue-react/blob/master/src/docs/components/DemoApp.tsx"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Source code to this demo
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Body>
                        </Page>
                    )
                },

                {
                    name: "intro",
                    component: (
                        <Intro logo={logo} logoMaxWidth="100px" title="Here could be your introduction">
                            <form
                                onSubmit={(event) => {
                                    event.preventDefault()
                                    window.location.href = "#home"
                                }}
                            >
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="DempApp-intro-user"
                                        placeholder="User"
                                    />
                                    <label htmlFor="DempApp-intro-user">User</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="DempApp-intro-password"
                                        placeholder="Password"
                                    />
                                    <label htmlFor="DempApp-intro-password">Password</label>
                                </div>

                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary btn-lg w-100">
                                        Sign in
                                    </button>
                                </div>
                            </form>
                        </Intro>
                    )
                },

                {
                    name: "record",
                    component: (
                        <Page>
                            <Header>
                                <HeaderTitle logo={logo} appTitle="Demo App">
                                    Record
                                </HeaderTitle>

                                <ActionMenu>
                                    <div className="position-relative">
                                        <MenuItem
                                            label="Actions"
                                            supportOutside
                                            dropdownClassName="position-absolute end-0"
                                        >
                                            <MenuItem label="Do a lot, a loooot of stuff" />
                                            <MenuItem label="Oh boy, really a lot of stuff" />
                                        </MenuItem>
                                    </div>
                                    <MenuItem
                                        icon={<Pencil className="bi" />}
                                        iconForActive={<PencilFill className="bi" />}
                                        label="Edit"
                                        onClick={toggleEdit}
                                        isActive={edit}
                                    />
                                    <MenuItem
                                        icon={<Pencil className="bi" />}
                                        iconForActive={<PencilFill className="bi" />}
                                        label="Disabled Button with Tooltip"
                                        title="This is a Tooltip!"
                                        disabled
                                        style={{ pointerEvents: "auto" }}
                                    />
                                </ActionMenu>
                            </Header>
                            <Body containerClass="container">
                                <section className="mb-3">
                                    <h2 className="page-header h3">First field group</h2>

                                    <div className="row mb-3">
                                        <RecordField edit={edit} label="ID" value="XYZ" />
                                        <RecordField edit={edit} label="Country" value="DE" className="col-md-2" />
                                        <RecordField edit={edit} label="Created" value="2022-11-15" type="date" />
                                    </div>

                                    <div className="row">
                                        <RecordField edit={edit} label="Author" value="Max Mustermann" />
                                    </div>
                                </section>

                                <section className="mb-3">
                                    <h2 className="page-header h3">Personal information</h2>

                                    <div className="row mb-3">
                                        <RecordField edit={edit} label="Editor ID" value="ABC" />
                                        <RecordField edit={edit} label="Name" value="Alice Bacon" />
                                        <RecordField edit={edit} label="Email" value="alice_bacon@fakemail.fake" />
                                    </div>
                                    <div className="row mb-3">
                                        <RecordField edit={edit} label="Editor ID" value="MMS" />
                                        <RecordField edit={edit} label="Name" value="Max Mustermann" />
                                        <RecordField edit={edit} label="Email" value="max_mustermann@fakemail.fake" />
                                    </div>
                                </section>

                                <section className="mb-3">
                                    <h2 className="page-header h3">Some table</h2>

                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Lorem</th>
                                                <th>Ipsum</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Bla</td>
                                                <td>Blub</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Another</td>
                                                <td>row</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </section>
                            </Body>
                        </Page>
                    )
                }
            ]}
        >
            <SidebarMenu
                sidebarClass="overflow-visible"
                menuClass="overflow-visible"
                topContent={
                    <>
                        <div className="blue-tooltip-end blue-sidebar-pseudo-hidden-on-open" data-tooltip="Search">
                            <Search sidebar placeholder="Search in menu" />
                        </div>
                    </>
                }
                bottomContent={
                    <div className="blue-tooltip-end blue-sidebar-pseudo-hidden-on-open" data-tooltip="Sign out">
                        <MenuItem href="#intro" label="Sign out" icon={<BoxArrowLeft className="bi" />} />
                    </div>
                }
            >
                <div className="blue-tooltip-end blue-sidebar-pseudo-hidden-on-open" data-tooltip="Home">
                    <MenuItem href="#home" label="Home" icon={<House className="bi" />} isHome />
                </div>
                <div className="blue-tooltip-end blue-sidebar-pseudo-hidden-on-open" data-tooltip="Documents">
                    <MenuItem
                        icon={<FileEarmark className="bi" />}
                        label="Documents"
                        onClick={() => {
                            setSidebarIn(true)
                        }}
                    >
                        <MenuItem
                            className="blue-sidebar-visible-on-open"
                            href="#record"
                            icon={<FileEarmark className="bi" />}
                            label="Example record"
                        />
                    </MenuItem>
                </div>
                <div className="blue-tooltip-end blue-sidebar-pseudo-hidden-on-open" data-tooltip="Appointments">
                    <MenuItem icon={<Calendar className="bi" />} label="Appointments" />
                </div>
                <div className="blue-tooltip-end blue-sidebar-pseudo-hidden-on-open" data-tooltip="Users">
                    <MenuItem icon={<Person className="bi" />} label="Users" />
                </div>

                <SidebarMenuItem icon={<span>😅</span>} label="Hello World" />
            </SidebarMenu>
        </Layout>
    )
}
