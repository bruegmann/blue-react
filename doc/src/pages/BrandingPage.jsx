import React from "react";
import { DropdownMenu, DropdownItem } from "reactstrap";

import { Page, FluentBtn } from "../../../index.js";

import Global from "../Global.js";
import SimpleButtonDropdown from "../components/SimpleButtonDropdown.jsx";

const logoColors = [
    "blue",
    "white"
];

const logoSizes = [
    { name: "xl", "size": "1191x212px" },
    { name: "l", "size": "800x142px" },
    { name: "m", "size": "400x71px" },
    { name: "s", "size": "200x36px" },
];

const iconSizes = ["16px", "24px", "32px", "48px", "64px", "128px", "256px"];

const suiteLogos = [
    { name: "ocean-blue", title: "Afflatus" },
    { name: "bsw-cti", title: "BSWCti" },
    { name: "ipdm", title: "IP Decision Management" },
    { name: "ipi", title: "IP Intelligence" },
    { name: "ipm", title: "IP Management" },
    { name: "po-server", title: "PatOrg Server" },
    { name: "presence", title: "Presence" },
    { name: "sql-client", title: "SQL-Client" },
    { name: "pattime", title: "Zeiterfassung (PatTime)" },
];

const palettes = [
    { "title": "BSW Branding", "author": 6, "colors": [{ "code": "2980B9", "title": "Hauptfarbe normal" }, { "code": "3498DB", "title": "Hauptfarbe heller" }, { "code": "096EB0", "title": "Hauptfarbe dunkler" }, { "code": "07507F", "title": "Hauptfarbe sehr dunkel" }, { "code": "096EB0", "title": "IP Management" }, { "code": "7A032A", "title": "IP Intelligence" }, { "code": "27AE60", "title": "IP Decision Management" }, { "code": "009EE0", "title": "IP Web Portal" }, { "code": "3399FF", "title": "PM-Client" }, { "code": "D35400", "title": "PatTime" }, { "code": "CBD3D6", "title": "Schrift innerhalb Suite-Logo" }, { "code": "ECF0F1", "title": "Schrift neben Suite-Logo" }, { "code": "101010", "title": "Schrift innerhalb Suite-Logo (negativ)" }, { "code": "0A5F96", "title": "Carousel-Box" }, { "code": "F44336", "title": "SQL-Client" }, { "code": "4CAF50", "title": "PatOrg Search" }, { "code": "03A9F4", "title": "PO-Client" }, { "code": "FFC107", "title": "Landscape" }, { "code": "2ECC71", "title": "OceanBlue" }, { "code": "E74C3C", "title": "RomeBlue" }, { "title": "The Machine", "code": "634565" }] },
    { "title": "bicon", "author": 6, "colors": [{ "code": "E67E22", "title": "bi-c-orange" }, { "code": "27AE60", "title": "bi-c-green" }, { "code": "E74C3C", "title": "bi-c-red" }, { "code": "333333", "title": "bi-c-dark" }, { "code": "2980B9", "title": "bi-c-blue" }, { "code": "EDC87E", "title": "bi-c-yellow" }, { "code": "808080", "title": "bi-c-gray" }] }
];

const lightColors = [
    "CBD3D6",
    "ECF0F1",
    "EDC87E"
];

/**
 * Enthält alle wichtigen Markenzeichen, wie Logos und Icons.
 * Ebenso wie die Icons für PatOrg (IPM), Presence, PatTime, SQL-Client und Afflatus.
 * Auch die zum Corporate Identity gehörenden Farben sind hier dokumentiert.
 */
class BrandingPage extends React.Component {
    static get defaultProps() {
        return {
            title: "Branding",
            path: "/branding"
        };
    }

    render() {
        return (
            <Page>
                <Page.Header>
                    <Page.Header.Title logo={Global.logo} appTitle={Global.appTitle}>
                        Branding
                    </Page.Header.Title>
                </Page.Header>

                <Page.Body containerClass="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h1 className="page-header">Brügmann-Logo</h1>

                            {logoColors.map(color =>
                                <div
                                    key={color}
                                    className="card mb-4"
                                    style={color == "white" ? { backgroundColor: "#2980B9", borderColor: "#2980B9" } : {}}
                                >
                                    <div className="card-body">
                                        <div className="form-group">
                                            <img src={require("../branding/logo/bruegmann_" + color + "/svg/" + color + ".svg")} className="img-responsive center-block" />
                                        </div>

                                        <div className="btn-group">
                                            <FluentBtn href={require("../branding/logo/bruegmann_" + color + "/svg/" + color + ".svg")} className="btn btn-secondary">
                                                SVG
                                            </FluentBtn>

                                            <SimpleButtonDropdown
                                                title="PNG"
                                                dropDownMenu={
                                                    <DropdownMenu>
                                                        {logoSizes.map(s =>
                                                            <DropdownItem
                                                                key={s.name}
                                                                href={require("../branding/logo/bruegmann_" + color + "/png/" + color + "_" + s.name + ".png")}
                                                            >
                                                                {s.size}
                                                            </DropdownItem>
                                                        )}
                                                    </DropdownMenu>
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>

                        <div className="col-md-4">
                            <h1 className="page-header">B-Icon</h1>

                            <div className="card mb-4">
                                <img src={require("../branding/b-icon/svg/b-icon.svg")} className="card-img-top" />
                                <div className="card-body">
                                    <div className="btn-group">
                                        <a href={require("../branding/b-icon/svg/b-icon.svg")} className="btn btn-secondary">
                                            SVG
                                        </a>

                                        <SimpleButtonDropdown
                                            title="PNG"
                                            dropDownMenu={
                                                <DropdownMenu>
                                                    {iconSizes.map(s =>
                                                        <DropdownItem
                                                            key={s.name}
                                                            href={require("../branding/b-icon/png/" + s + ".png")}
                                                        >
                                                            {s}
                                                        </DropdownItem>
                                                    )}
                                                </DropdownMenu>
                                            }
                                        />

                                        <SimpleButtonDropdown
                                            title="ICO"
                                            dropDownMenu={
                                                <DropdownMenu>
                                                    {iconSizes.map(s =>
                                                        <DropdownItem
                                                            key={s.name}
                                                            href={require("../branding/b-icon/ico/" + s + ".ico")}
                                                        >
                                                            {s}
                                                        </DropdownItem>
                                                    )}
                                                    <DropdownItem
                                                        href={require("../branding/b-icon/ico/combined.ico")}
                                                    >
                                                        combined
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <article>
                        <h1 className="page-header">Schriftart</h1>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="thumbnail">
                                    <a href="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/fc246ff9-d8cd-4f51-9836-ce2528cdc5f0/01-modern-system-fonts.png" style={{ cursor: "zoom-in" }}>
                                        <img src={require("../images/01-modern-system-fonts-preview.png")} alt="Für jedes System die richtige Schriftart" />
                                    </a>
                                    <div className="caption">
                                        Quelle: <a href="https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/">Smashing Magazine</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <p>
                                    Statt eine eigene Schriftart zu verwenden, wird auf die jeweilige System-Font zurückgegriffen. Bei Windows ist das
                                    z.B. "Segoe UI", bei Mac OS "San Francisco" und bei Android "Roboto".
                        </p>
                                <p>
                                    Bei klassischen Windows-Anwendungen ist "Segoe UI" bereits die Standard-Font.<br />
                                    Für Web-Anwendungen kann die System-Font mithilfe dieses CSS-Snippets festgelegt werden:
                        </p>

                                <pre>{`body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}`}</pre>
                            </div>
                        </div>




                    </article>

                    <div className="row">
                        <div className="col-md-7">
                            <h1 className="page-header">Product Icons</h1>
                            <p>Die Dateien befinden sich unter: <code>R:\CI\suite-logos</code></p>

                            <div className="row">
                                {suiteLogos.map(l =>
                                    <div key={l.name} className="col-md-6">
                                        <div className="card mb-4">
                                            <img src={require("../branding/suite-logos/" + l.name + "/svg/" + l.name + ".svg")} className="card-img-top" />
                                            <div className="card-body">
                                                <h5>{l.title}</h5>

                                                <div className="btn-group">
                                                    <a href={require("../branding/suite-logos/" + l.name + "/svg/" + l.name + ".svg")} className="btn btn-secondary">
                                                        SVG
                                                    </a>

                                                    <SimpleButtonDropdown
                                                        title="PNG"
                                                        dropDownMenu={
                                                            <DropdownMenu>
                                                                {iconSizes.map(s =>
                                                                    <DropdownItem
                                                                        key={s.name}
                                                                        href={require("../branding/suite-logos/" + l.name + "/png/" + s + ".png")}
                                                                    >
                                                                        {s}
                                                                    </DropdownItem>
                                                                )}
                                                            </DropdownMenu>
                                                        }
                                                    />

                                                    <SimpleButtonDropdown
                                                        title="ICO"
                                                        dropDownMenu={
                                                            <DropdownMenu>
                                                                {iconSizes.map(s =>
                                                                    <DropdownItem
                                                                        key={s.name}
                                                                        href={require("../branding/suite-logos/" + l.name + "/ico/" + s + ".ico")}
                                                                    >
                                                                        {s}
                                                                    </DropdownItem>
                                                                )}
                                                                <DropdownItem
                                                                    href={require("../branding/suite-logos/" + l.name + "/ico/combined.ico")}
                                                                >
                                                                    combined
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="col-md-5">
                            <h1 className="page-header">Farben</h1>

                            {palettes.map((palette, index) =>
                                <div key={index} className="card mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">{palette.title}</h5>

                                        {palette.colors.map((color, index2) =>
                                            <div
                                                key={index2}
                                                className={`row ${lightColors.indexOf(color.code) > -1 ? "" : "text-white"} py-2`}
                                                style={{ backgroundColor: `#${color.code}` }}
                                            >
                                                <div className="col-8">
                                                    {color.title}
                                                </div>
                                                <div className="col-4">
                                                    {color.code}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Page.Body>
            </Page>
        );
    }
}

export default BrandingPage;