import { useState } from "react"
import {
    ArrowLeft,
    BoxArrowLeft,
    Calendar,
    ClockHistory,
    FileEarmark,
    Gear,
    House,
    Pencil,
    PencilFill,
    Person,
    PersonFill,
    Star
} from "react-bootstrap-icons"
import { Link } from "react-router-dom"
import ActionMenu from "../../components/ActionMenu"
import Body from "../../components/Body"
import Header from "../../components/Header"
import HeaderTitle from "../../components/HeaderTitle"
import Intro from "../../components/Intro"
import Layout from "../../components/Layout"
import HashRouter from "../../components/HashRouter"
import MenuItem from "../../components/MenuItem"
import Page from "../../components/Page"
import Search from "../../components/Search"
import SidebarMenu from "../../components/SidebarMenu"
import { logo } from "../Global"
import IconMenuItem from "../../components/IconMenuItem"

const exampleHistoryItems = [
    "Nice person",
    "Important message",
    "Document XYZ",
    "Boring appointment"
]
const exampleFavoriteItems = [
    "Max Mustermann person",
    "A Word Document",
    "Boring appointment"
]

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
    const [edit, setEdit] = useState(false)
    const toggleEdit = () => setEdit(!edit)

    return (
        <Layout
            header={
                <>
                    <HeaderTitle logo={logo} appTitle="Demo App" />

                    <ActionMenu>
                        <MenuItem
                            icon={<PersonFill />}
                            label="Profile"
                            supportOutside
                        >
                            <MenuItem
                                href="#intro"
                                label="Sign out, sign out"
                            />
                        </MenuItem>
                        <MenuItem
                            icon={<PersonFill />}
                            label="Profile"
                            supportOutside
                        >
                            <MenuItem
                                href="#intro"
                                label="Sign out, sign out"
                            />
                        </MenuItem>
                    </ActionMenu>
                </>
            }
            side={
                <SidebarMenu
                    bottomContent={
                        <>
                            <MenuItem
                                to="/"
                                elementType={Link}
                                icon={<ArrowLeft className="bi" />}
                                label="Back to the docs"
                            />
                            <div className="d-flex flex-wrap">
                                <IconMenuItem
                                    href="#record"
                                    outerClass="flex-fill"
                                    label="User settings"
                                    icon={<Person className="bi" />}
                                />

                                <IconMenuItem
                                    onClick={() => {
                                        alert(
                                            "There are actually no settings 😅"
                                        )
                                    }}
                                    outerClass="flex-fill"
                                    label="Settings"
                                    icon={<Gear className="bi" />}
                                />

                                <IconMenuItem
                                    href="#intro"
                                    outerClass="flex-fill"
                                    label="Sign out"
                                    icon={<BoxArrowLeft className="bi" />}
                                />
                            </div>
                        </>
                    }
                >
                    <MenuItem
                        href="#home"
                        label="Home"
                        icon={<House className="bi" />}
                        isHome
                    />
                    <MenuItem
                        icon={<FileEarmark className="bi" />}
                        label="Documents"
                    >
                        <MenuItem
                            href="#record"
                            icon={<FileEarmark className="bi" />}
                            label="Example record"
                        />
                    </MenuItem>
                    <MenuItem
                        href="#home"
                        icon={<Calendar className="bi" />}
                        label="Appointments"
                    />
                </SidebarMenu>
            }
        >
            <HashRouter
                pages={[
                    {
                        name: "home",
                        component: (
                            <Page>
                                <Header>
                                    <HeaderTitle breadcrumb={["Home page"]} />
                                </Header>
                                <Body containerClass="no-container">
                                    <div
                                        style={{
                                            backgroundColor: "#4158D0",
                                            backgroundImage:
                                                "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"
                                        }}
                                        className="text-white p-5 rounded-top"
                                    >
                                        <h1 className="display-5">
                                            Welcome, how are you doing?
                                        </h1>
                                    </div>

                                    <div className="container pt-3">
                                        <div className="row mb-3">
                                            <div className="offset-xl-4 col-xl-4 offset-md-3 col-md-5">
                                                <Search
                                                    body
                                                    placeholder="Search for content..."
                                                    className="neu-input"
                                                />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col">
                                                <h2 className="mt-4 mb-3">
                                                    <ClockHistory className="bi" />{" "}
                                                    Browser history
                                                </h2>

                                                <div className="list-group">
                                                    {exampleHistoryItems.map(
                                                        (
                                                            entry: string,
                                                            i: number
                                                        ) => (
                                                            <a
                                                                key={i}
                                                                href="#record"
                                                                className="list-group-item list-group-item-action"
                                                            >
                                                                {entry}
                                                            </a>
                                                        )
                                                    )}
                                                </div>
                                            </div>

                                            <div className="col">
                                                <h2 className="mt-4 mb-3">
                                                    <Star className="bi" />{" "}
                                                    Favorites
                                                </h2>

                                                <div className="list-group">
                                                    {exampleFavoriteItems.map(
                                                        (
                                                            entry: string,
                                                            i: number
                                                        ) => (
                                                            <a
                                                                key={i}
                                                                href="#record"
                                                                className="list-group-item list-group-item-action"
                                                            >
                                                                {entry}
                                                            </a>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <ul>
                                            <li>
                                                <Link to="">
                                                    Back to the docs
                                                </Link>
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
                            <Intro
                                logo={logo}
                                logoMaxWidth="100px"
                                title="Here could be your introduction"
                            >
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
                                        <label htmlFor="DempApp-intro-user">
                                            User
                                        </label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="DempApp-intro-password"
                                            placeholder="Password"
                                        />
                                        <label htmlFor="DempApp-intro-password">
                                            Password
                                        </label>
                                    </div>

                                    <div className="form-check mb-3">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="flexCheckChecked"
                                            defaultChecked
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckChecked"
                                        >
                                            Checked checkbox
                                        </label>
                                    </div>

                                    <div className="form-check form-switch mb-3">
                                        <input
                                            className="form-check-input"
                                            role="switch"
                                            type="checkbox"
                                            id="flexCheckChecked2"
                                            defaultChecked
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckChecked2"
                                        >
                                            Checked switch
                                        </label>
                                    </div>

                                    <div className="form-check mb-3">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            id="flexCheckChecked3"
                                            defaultChecked
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckChecked3"
                                        >
                                            Checked radio
                                        </label>
                                    </div>

                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-lg w-100"
                                        >
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
                                    <HeaderTitle
                                        appTitle="Home page"
                                        breadcrumb={["Record"]}
                                    />

                                    <ActionMenu break="md">
                                        <MenuItem
                                            label="Actions"
                                            supportOutside
                                        >
                                            <MenuItem label="Do a lot, a loooot of stuff" />
                                            <MenuItem label="Oh boy, really a lot of stuff" />
                                        </MenuItem>

                                        <MenuItem label="Actions">
                                            <MenuItem label="Do a lot, a loooot of stuff" />
                                            <MenuItem label="Oh boy, really a lot of stuff" />
                                        </MenuItem>

                                        <MenuItem
                                            icon={<Pencil className="bi" />}
                                            iconForActive={
                                                <PencilFill className="bi" />
                                            }
                                            label="Edit"
                                            onClick={toggleEdit}
                                            isActive={edit}
                                        />
                                        <MenuItem
                                            icon={<Pencil className="bi" />}
                                            iconForActive={
                                                <PencilFill className="bi" />
                                            }
                                            label="Disabled Button with Tooltip"
                                            title="This is a Tooltip!"
                                            disabled
                                            style={{ pointerEvents: "auto" }}
                                        />
                                    </ActionMenu>
                                </Header>
                                <Body containerClass="container">
                                    <section className="mb-3">
                                        <h2 className="page-header h3">
                                            First field group
                                        </h2>

                                        <div className="row mb-3">
                                            <RecordField
                                                edit={edit}
                                                label="ID"
                                                value="XYZ"
                                            />
                                            <RecordField
                                                edit={edit}
                                                label="Country"
                                                value="DE"
                                                className="col-md-2"
                                            />
                                            <RecordField
                                                edit={edit}
                                                label="Created"
                                                value="2022-11-15"
                                                type="date"
                                            />
                                        </div>

                                        <div className="row">
                                            <RecordField
                                                edit={edit}
                                                label="Author"
                                                value="Max Mustermann"
                                            />
                                        </div>
                                    </section>

                                    <section className="mb-3">
                                        <h2 className="page-header h3">
                                            Personal information
                                        </h2>

                                        <div className="row mb-3">
                                            <RecordField
                                                edit={edit}
                                                label="Editor ID"
                                                value="ABC"
                                            />
                                            <RecordField
                                                edit={edit}
                                                label="Name"
                                                value="Alice Bacon"
                                            />
                                            <RecordField
                                                edit={edit}
                                                label="Email"
                                                value="alice_bacon@fakemail.fake"
                                            />
                                        </div>
                                        <div className="row mb-3">
                                            <RecordField
                                                edit={edit}
                                                label="Editor ID"
                                                value="MMS"
                                            />
                                            <RecordField
                                                edit={edit}
                                                label="Name"
                                                value="Max Mustermann"
                                            />
                                            <RecordField
                                                edit={edit}
                                                label="Email"
                                                value="max_mustermann@fakemail.fake"
                                            />
                                        </div>
                                    </section>

                                    <section className="mb-3">
                                        <h2 className="page-header h3">
                                            Some table
                                        </h2>

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
            />
        </Layout>
    )
}
