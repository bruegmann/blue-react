import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Page, Utilities, ActionMenu, ActionMenuItem } from "../../../index.js";

import Global from "../Global.js";

/**
 * Eine Ansicht aller Bootstrap Komponenten, um die zu testen. Und dient als Demo.
 */
class BootstrapDemoPage extends React.Component {
    static get defaultProps() {
        return {
            title: "Bootstrap Demo",
            path: "/bootstrap-demo"
        };
    }

    constructor() {
        super();

        this.state = {
            modalIn: false
        };
    }

    componentWillUnmount() {
        Utilities.resetAlertMessage("danger");
    }

    render() {
        return (
            <Page>
                <Page.Header>
                    <Page.Header.Title logo={Global.logo} appTitle={Global.appTitle}>
                        Bootstrap Demo
                    </Page.Header.Title>

                    <Page.Header.Actions breakpoint="lg">
                        <ActionMenu>
                            <ActionMenuItem
                                icon="bi-athlete"
                                label="Fehlermeldung zeigen und Seite wechseln"
                                onClick={() => {
                                    Utilities.setAlertMessage("Fehler", "danger", true, "Lorem ipsum");
                                    location.href = "#";
                                }}
                            />
                            <ActionMenuItem icon="bi-astrologer" label="Dokumentengruppe löschen" />
                            <ActionMenuItem icon="bi-astrologer" label="Dokumentengruppe hinzufügen" />
                            <ActionMenuItem icon="bi-astrologer" label="Dokument löschen" />
                        </ActionMenu>
                    </Page.Header.Actions>
                </Page.Header>

                <Page.Body containerClass="container">
                    <div className="page-header" id="banner">
                        <div className="row">
                            <div className="col-lg-8 col-md-7 col-sm-6">
                                <h1>Cerulean</h1>
                                <p className="lead">A calm blue sky</p>
                            </div>
                            <div className="col-lg-4 col-md-5 col-sm-6">
                            </div>
                        </div>
                    </div>

                    <button className="btn btn-primary btn-lg" onClick={() => this.setState({ modalIn: true })}>Modal Test</button>

                    <Modal
                        autoFocus={false}
                        isOpen={this.state.modalIn}
                        toggle={() => this.setState({ modalIn: !this.state.modalIn })}
                    >
                        <ModalHeader toggle={() => this.setState({ modalIn: !this.state.modalIn })}>
                            Title
                    </ModalHeader>
                        <ModalBody>
                            content
                        </ModalBody>
                    </Modal>

                    <div className="bs-docs-section clearfix">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-header">
                                    <h1 id="navbar">Navbar</h1>
                                </div>

                                <div className="bs-component">
                                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                        <a className="navbar-brand" href="#">Navbar</a>
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>

                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav mr-auto">
                                                <li className="nav-item active">
                                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Link</a>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Dropdown
                                      </a>
                                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link disabled" href="#">Disabled</a>
                                                </li>
                                            </ul>
                                            <form className="form-inline my-2 my-lg-0">
                                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                            </form>
                                        </div>
                                    </nav>
                                </div>

                            </div>
                        </div>
                    </div>



                    <div className="bs-docs-section">
                        <div className="page-header">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h1 id="buttons">Buttons</h1>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-7">

                                <p className="bs-component">
                                    <a href="javascript:void(0)" className="btn btn-secondary">Default</a>
                                    <a href="javascript:void(0)" className="btn btn-primary">Primary</a>
                                    <a href="javascript:void(0)" className="btn btn-success">Success</a>
                                    <a href="javascript:void(0)" className="btn btn-info">Info</a>
                                    <a href="javascript:void(0)" className="btn btn-warning">Warning</a>
                                    <a href="javascript:void(0)" className="btn btn-danger">Danger</a>
                                    <a href="javascript:void(0)" className="btn btn-link">Link</a>
                                </p>

                                <p className="bs-component">
                                    <a href="javascript:void(0)" className="btn btn-secondary disabled">Default</a>
                                    <a href="javascript:void(0)" className="btn btn-primary disabled">Primary</a>
                                    <a href="javascript:void(0)" className="btn btn-success disabled">Success</a>
                                    <a href="javascript:void(0)" className="btn btn-info disabled">Info</a>
                                    <a href="javascript:void(0)" className="btn btn-warning disabled">Warning</a>
                                    <a href="javascript:void(0)" className="btn btn-danger disabled">Danger</a>
                                    <a href="javascript:void(0)" className="btn btn-link disabled">Link</a>
                                </p>


                                <div style={{ marginBottom: "15px" }}>
                                    <div className="btn-toolbar bs-component" style={{ margin: "0" }}>
                                        <div className="btn-group">
                                            <a href="javascript:void(0)" className="btn btn-secondary">Default</a>
                                            <a href="javascript:void(0)" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown"><span className="caret"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="javascript:void(0)">Action</a></li>
                                                <li><a href="javascript:void(0)">Another action</a></li>
                                                <li><a href="javascript:void(0)">Something else here</a></li>
                                                <li className="divider"></li>
                                                <li><a href="javascript:void(0)">Separated link</a></li>
                                            </ul>
                                        </div>

                                        <div className="btn-group">
                                            <a href="javascript:void(0)" className="btn btn-primary">Primary</a>
                                            <a href="javascript:void(0)" className="btn btn-primary dropdown-toggle" data-toggle="dropdown"><span className="caret"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="javascript:void(0)">Action</a></li>
                                                <li><a href="javascript:void(0)">Another action</a></li>
                                                <li><a href="javascript:void(0)">Something else here</a></li>
                                                <li className="divider"></li>
                                                <li><a href="javascript:void(0)">Separated link</a></li>
                                            </ul>
                                        </div>

                                        <div className="btn-group">
                                            <a href="javascript:void(0)" className="btn btn-success">Success</a>
                                            <a href="javascript:void(0)" className="btn btn-success dropdown-toggle" data-toggle="dropdown"><span className="caret"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="javascript:void(0)">Action</a></li>
                                                <li><a href="javascript:void(0)">Another action</a></li>
                                                <li><a href="javascript:void(0)">Something else here</a></li>
                                                <li className="divider"></li>
                                                <li><a href="javascript:void(0)">Separated link</a></li>
                                            </ul>
                                        </div>

                                        <div className="btn-group">
                                            <a href="javascript:void(0)" className="btn btn-info">Info</a>
                                            <a href="javascript:void(0)" className="btn btn-info dropdown-toggle" data-toggle="dropdown"><span className="caret"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="javascript:void(0)">Action</a></li>
                                                <li><a href="javascript:void(0)">Another action</a></li>
                                                <li><a href="javascript:void(0)">Something else here</a></li>
                                                <li className="divider"></li>
                                                <li><a href="javascript:void(0)">Separated link</a></li>
                                            </ul>
                                        </div>

                                        <div className="btn-group">
                                            <a href="javascript:void(0)" className="btn btn-warning">Warning</a>
                                            <a href="javascript:void(0)" className="btn btn-warning dropdown-toggle" data-toggle="dropdown"><span className="caret"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="javascript:void(0)">Action</a></li>
                                                <li><a href="javascript:void(0)">Another action</a></li>
                                                <li><a href="javascript:void(0)">Something else here</a></li>
                                                <li className="divider"></li>
                                                <li><a href="javascript:void(0)">Separated link</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <p className="bs-component">
                                    <a href="javascript:void(0)" className="btn btn-primary btn-lg">Large button</a>
                                    <a href="javascript:void(0)" className="btn btn-primary">Default button</a>
                                    <a href="javascript:void(0)" className="btn btn-primary btn-sm">Small button</a>
                                    <a href="javascript:void(0)" className="btn btn-primary btn-xs">Mini button</a>
                                </p>

                            </div>
                            <div className="col-lg-5">

                                <p className="bs-component">
                                    <a href="javascript:void(0)" className="btn btn-secondary btn-lg btn-block">Block level button</a>
                                </p>


                                <div className="bs-component" style={{ marginBottom: "15px" }}>
                                    <div className="btn-group btn-group-justified">
                                        <a href="javascript:void(0)" className="btn btn-secondary">Left</a>
                                        <a href="javascript:void(0)" className="btn btn-secondary">Middle</a>
                                        <a href="javascript:void(0)" className="btn btn-secondary">Right</a>
                                    </div>
                                </div>

                                <div className="bs-component" style={{ marginBottom: "15px" }}>
                                    <div className="btn-toolbar">
                                        <div className="btn-group">
                                            <a href="javascript:void(0)" className="btn btn-secondary">1</a>
                                            <a href="javascript:void(0)" className="btn btn-secondary">2</a>
                                            <a href="javascript:void(0)" className="btn btn-secondary">3</a>
                                            <a href="javascript:void(0)" className="btn btn-secondary">4</a>
                                        </div>

                                        <div className="btn-group">
                                            <a href="javascript:void(0)" className="btn btn-secondary">5</a>
                                            <a href="javascript:void(0)" className="btn btn-secondary">6</a>
                                            <a href="javascript:void(0)" className="btn btn-secondary">7</a>
                                        </div>

                                        <div className="btn-group">
                                            <a href="javascript:void(0)" className="btn btn-secondary">8</a>
                                            <div className="btn-group">
                                                <a href="javascript:void(0)" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                                                    Dropdown
                      <span className="caret"></span>
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="javascript:void(0)">Dropdown link</a></li>
                                                    <li><a href="javascript:void(0)">Dropdown link</a></li>
                                                    <li><a href="javascript:void(0)">Dropdown link</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bs-component">
                                    <div className="btn-group-vertical">
                                        <a href="javascript:void(0)" className="btn btn-secondary">Button</a>
                                        <a href="javascript:void(0)" className="btn btn-secondary">Button</a>
                                        <a href="javascript:void(0)" className="btn btn-secondary">Button</a>
                                        <a href="javascript:void(0)" className="btn btn-secondary">Button</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="bs-docs-section">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-header">
                                    <h1 id="typography">Typography</h1>
                                </div>
                            </div>
                        </div>



                        <div className="row">
                            <div className="col-lg-4">
                                <div className="bs-component">
                                    <h1>Heading 1</h1>
                                    <h2>Heading 2</h2>
                                    <h3>Heading 3</h3>
                                    <h4>Heading 4</h4>
                                    <h5>Heading 5</h5>
                                    <h6>Heading 6</h6>
                                    <p className="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="bs-component">
                                    <h2>Example body text</h2>
                                    <p>Nullam quis risus eget <a href="javascript:void(0)">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
                                    <p><small>This line of text is meant to be treated as fine print.</small></p>
                                    <p>The following snippet of text is <strong>rendered as bold text</strong>.</p>
                                    <p>The following snippet of text is <em>rendered as italicized text</em>.</p>
                                    <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
                                </div>

                            </div>
                            <div className="col-lg-4">
                                <div className="bs-component">
                                    <h2>Emphasis classes</h2>
                                    <p className="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
                                    <p className="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                    <p className="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
                                    <p className="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
                                    <p className="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                    <p className="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                                </div>

                            </div>
                        </div>



                        <div className="row">
                            <div className="col-lg-12">
                                <h2 id="type-blockquotes">Blockquotes</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="bs-component">
                                    <blockquote>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="bs-component">
                                    <blockquote className="blockquote-reverse">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bs-docs-section">

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-header">
                                    <h1 id="tables">Tables</h1>
                                </div>

                                <div className="bs-component">
                                    <table className="table table-striped table-hover ">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Column heading</th>
                                                <th>Column heading</th>
                                                <th>Column heading</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                            </tr>
                                            <tr className="info">
                                                <td>3</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                            </tr>
                                            <tr className="success">
                                                <td>4</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                            </tr>
                                            <tr className="danger">
                                                <td>5</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                            </tr>
                                            <tr className="warning">
                                                <td>6</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                            </tr>
                                            <tr className="active">
                                                <td>7</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                                <td>Column content</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bs-docs-section">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-header">
                                    <h1 id="forms">Forms</h1>
                                </div>
                            </div>
                        </div>

                        <h2 className="mt-4 mb-3">Horizontal form</h2>

                        <form className="form-horizontal">
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Web API URL</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control"
                                        name="configApiUrl" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">User</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control"
                                        name="authUsername" />
                                </div>
                            </div>
                        </form>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="well bs-component">
                                    <form className="form-horizontal">
                                        <fieldset>
                                            <legend>Legend</legend>
                                            <div className="form-group">
                                                <label htmlFor="inputEmail" className="col-lg-2 col-form-label">Email</label>
                                                <div className="col-lg-10">
                                                    <input type="text" className="form-control" id="inputEmail" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputPassword" className="col-lg-2 col-form-label">Password</label>
                                                <div className="col-lg-10">
                                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox" /> Checkbox
                                                            </label>
                                                    </div>

                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                        <label className="custom-col-form-label" htmlFor="customCheck1">Check this custom checkbox</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="textArea" className="col-lg-2 col-form-label">Textarea</label>
                                                <div className="col-lg-10">
                                                    <textarea className="form-control" rows="3" id="textArea"></textarea>
                                                    <span className="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-2 col-form-label">Radios</label>
                                                <div className="col-lg-10">
                                                    <div className="radio">
                                                        <label>
                                                            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="" readOnly />
                                                            Option one is this
                                                                </label>
                                                    </div>
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                                                        <label className="custom-col-form-label" htmlFor="customRadio1">Toggle this custom radio</label>
                                                    </div>
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                                                        <label className="custom-col-form-label" htmlFor="customRadio2">Or toggle this other custom radio</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="select" className="col-lg-2 col-form-label">Selects</label>
                                                <div className="col-lg-10">
                                                    <select className="form-control" id="select">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                    <br />
                                                    <select multiple="" className="form-control">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-lg-10 col-lg-offset-2">
                                                    <button type="reset" className="btn btn-secondary">Cancel</button>
                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4 col-lg-offset-1">

                                <form className="bs-component">
                                    <div className="form-group">
                                        <label className="col-form-label" htmlFor="focusedInput">Focused input</label>
                                        <input className="form-control" id="focusedInput" type="text" value="This is focused..." readOnly />
                                    </div>

                                    <div className="form-group">
                                        <label className="col-form-label" htmlFor="disabledInput">Disabled input</label>
                                        <input className="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled="" />
                                    </div>

                                    <div className="form-group has-warning">
                                        <label className="col-form-label" htmlFor="inputWarning">Input warning</label>
                                        <input type="text" className="form-control" id="inputWarning" />
                                    </div>

                                    <div className="form-group has-error">
                                        <label className="col-form-label" htmlFor="inputError">Input error</label>
                                        <input type="text" className="form-control" id="inputError" />
                                    </div>

                                    <div className="form-group has-success">
                                        <label className="col-form-label" htmlFor="inputSuccess">Input success</label>
                                        <input type="text" className="form-control" id="inputSuccess" />
                                    </div>

                                    <div className="form-group">
                                        <label className="col-form-label" htmlFor="inputLarge">Large input</label>
                                        <input className="form-control input-lg" type="text" id="inputLarge" />
                                    </div>

                                    <div className="form-group">
                                        <label className="col-form-label" htmlFor="inputDefault">Default input</label>
                                        <input type="text" className="form-control" id="inputDefault" />
                                    </div>

                                    <div className="form-group">
                                        <label className="col-form-label" htmlFor="inputSmall">Small input</label>
                                        <input className="form-control input-sm" type="text" id="inputSmall" />
                                    </div>

                                    <div className="form-group">
                                        <label className="col-form-label">Input addons</label>
                                        <div className="input-group">
                                            <span className="input-group-addon">$</span>
                                            <input type="text" className="form-control" />
                                            <span className="input-group-btn">
                                                <button className="btn btn-secondary" type="button">Button</button>
                                            </span>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>


                    <div className="bs-docs-section">

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-header">
                                    <h1 id="navs">Navs</h1>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <h2 id="nav-tabs">Tabs</h2>
                                <div className="bs-component">
                                    <ul className="nav nav-tabs">
                                        <li className="active"><a href="#home" data-toggle="tab">Home</a></li>
                                        <li><a href="#profile" data-toggle="tab">Profile</a></li>
                                        <li className="disabled"><a>Disabled</a></li>
                                        <li className="dropdown">
                                            <a className="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)">
                                                Dropdown <span className="caret"></span>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#dropdown1" data-toggle="tab">Action</a></li>
                                                <li className="divider"></li>
                                                <li><a href="#dropdown2" data-toggle="tab">Another action</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div id="myTabContent" className="tab-content">
                                        <div className="tab-pane fade active in" id="home">
                                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                                        </div>
                                        <div className="tab-pane fade" id="profile">
                                            <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
                                        </div>
                                        <div className="tab-pane fade" id="dropdown1">
                                            <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.</p>
                                        </div>
                                        <div className="tab-pane fade" id="dropdown2">
                                            <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <h2 id="nav-pills">Pills</h2>
                                <div className="bs-component">
                                    <ul className="nav nav-pills">
                                        <li className="active"><a href="javascript:void(0)">Home</a></li>
                                        <li><a href="javascript:void(0)">Profile</a></li>
                                        <li className="disabled"><a href="javascript:void(0)">Disabled</a></li>
                                        <li className="dropdown">
                                            <a className="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)">
                                                Dropdown <span className="caret"></span>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a href="javascript:void(0)">Action</a></li>
                                                <li><a href="javascript:void(0)">Another action</a></li>
                                                <li><a href="javascript:void(0)">Something else here</a></li>
                                                <li className="divider"></li>
                                                <li><a href="javascript:void(0)">Separated link</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <br />
                                <div className="bs-component">
                                    <ul className="nav nav-pills nav-stacked">
                                        <li className="active"><a href="javascript:void(0)">Home</a></li>
                                        <li><a href="javascript:void(0)">Profile</a></li>
                                        <li className="disabled"><a href="javascript:void(0)">Disabled</a></li>
                                        <li className="dropdown">
                                            <a className="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)">
                                                Dropdown <span className="caret"></span>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a href="javascript:void(0)">Action</a></li>
                                                <li><a href="javascript:void(0)">Another action</a></li>
                                                <li><a href="javascript:void(0)">Something else here</a></li>
                                                <li className="divider"></li>
                                                <li><a href="javascript:void(0)">Separated link</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <h2 id="nav-breadcrumbs">Breadcrumbs</h2>
                                <div className="bs-component">
                                    <ul className="breadcrumb">
                                        <li className="active">Home</li>
                                    </ul>

                                    <ul className="breadcrumb">
                                        <li><a href="javascript:void(0)">Home</a></li>
                                        <li className="active">Library</li>
                                    </ul>

                                    <ul className="breadcrumb">
                                        <li><a href="javascript:void(0)">Home</a></li>
                                        <li><a href="javascript:void(0)">Library</a></li>
                                        <li className="active">Data</li>
                                    </ul>
                                </div>

                            </div>
                        </div>


                        <div className="row">
                            <div className="col-lg-4">
                                <h2 id="pagination">Pagination</h2>
                                <div className="bs-component">
                                    <ul className="pagination">
                                        <li className="disabled"><a href="javascript:void(0)">&laquo;</a></li>
                                        <li className="active"><a href="javascript:void(0)">1</a></li>
                                        <li><a href="javascript:void(0)">2</a></li>
                                        <li><a href="javascript:void(0)">3</a></li>
                                        <li><a href="javascript:void(0)">4</a></li>
                                        <li><a href="javascript:void(0)">5</a></li>
                                        <li><a href="javascript:void(0)">&raquo;</a></li>
                                    </ul>

                                    <ul className="pagination pagination-lg">
                                        <li className="disabled"><a href="javascript:void(0)">&laquo;</a></li>
                                        <li className="active"><a href="javascript:void(0)">1</a></li>
                                        <li><a href="javascript:void(0)">2</a></li>
                                        <li><a href="javascript:void(0)">3</a></li>
                                        <li><a href="javascript:void(0)">&raquo;</a></li>
                                    </ul>

                                    <ul className="pagination pagination-sm">
                                        <li className="disabled"><a href="javascript:void(0)">&laquo;</a></li>
                                        <li className="active"><a href="javascript:void(0)">1</a></li>
                                        <li><a href="javascript:void(0)">2</a></li>
                                        <li><a href="javascript:void(0)">3</a></li>
                                        <li><a href="javascript:void(0)">4</a></li>
                                        <li><a href="javascript:void(0)">5</a></li>
                                        <li><a href="javascript:void(0)">&raquo;</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <h2 id="pager">Pager</h2>
                                <div className="bs-component">
                                    <ul className="pager">
                                        <li><a href="javascript:void(0)">Previous</a></li>
                                        <li><a href="javascript:void(0)">Next</a></li>
                                    </ul>

                                    <ul className="pager">
                                        <li className="previous disabled"><a href="javascript:void(0)">&larr; Older</a></li>
                                        <li className="next"><a href="javascript:void(0)">Newer &rarr;</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">

                            </div>
                        </div>
                    </div>


                    <div className="bs-docs-section">

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-header">
                                    <h1 id="indicators">Indicators</h1>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <h2>Alerts</h2>
                                <div className="bs-component">
                                    <div className="alert alert-dismissible alert-warning">
                                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                                        <h4>Warning!</h4>
                                        <p>Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, <a href="javascript:void(0)" className="alert-link">vel scelerisque nisl consectetur et</a>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="bs-component">
                                    <div className="alert alert-dismissible alert-danger">
                                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                                        <strong>Oh snap!</strong> <a href="javascript:void(0)" className="alert-link">Change a few things up</a> and try submitting again.
              </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="bs-component">
                                    <div className="alert alert-dismissible alert-success">
                                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                                        <strong>Well done!</strong> You successfully read <a href="javascript:void(0)" className="alert-link">this important alert message</a>.
              </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="bs-component">
                                    <div className="alert alert-dismissible alert-info">
                                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                                        <strong>Heads up!</strong> This <a href="javascript:void(0)" className="alert-link">alert needs your attention</a>, but it's not super important.
              </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <h2>Labels</h2>
                                <div className="bs-component" style={{ marginBottom: "40px" }}>
                                    <span className="label label-default">Default</span>
                                    <span className="label label-primary">Primary</span>
                                    <span className="label label-success">Success</span>
                                    <span className="label label-warning">Warning</span>
                                    <span className="label label-danger">Danger</span>
                                    <span className="label label-info">Info</span>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <h2>Badges</h2>
                                <div className="bs-component">
                                    <ul className="nav nav-pills">
                                        <li className="active"><a href="javascript:void(0)">Home <span className="badge">42</span></a></li>
                                        <li><a href="javascript:void(0)">Profile <span className="badge"></span></a></li>
                                        <li><a href="javascript:void(0)">Messages <span className="badge">3</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bs-docs-section">

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-header">
                                    <h1 id="progress-bars">Progress bars</h1>
                                </div>

                                <h3 id="progress-basic">Basic</h3>
                                <div className="bs-component">
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: "60%" }}></div>
                                    </div>
                                </div>

                                <h3 id="progress-alternatives">Contextual alternatives</h3>
                                <div className="bs-component">
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-info" style={{ width: "20%" }}></div>
                                    </div>

                                    <div className="progress">
                                        <div className="progress-bar progress-bar-success" style={{ width: "40%" }}></div>
                                    </div>

                                    <div className="progress">
                                        <div className="progress-bar progress-bar-warning" style={{ width: "60%" }}></div>
                                    </div>

                                    <div className="progress">
                                        <div className="progress-bar progress-bar-danger" style={{ width: "80%" }}></div>
                                    </div>
                                </div>

                                <h3 id="progress-striped">Striped</h3>
                                <div className="bs-component">
                                    <div className="progress progress-striped">
                                        <div className="progress-bar progress-bar-info" style={{ width: "20%" }}></div>
                                    </div>

                                    <div className="progress progress-striped">
                                        <div className="progress-bar progress-bar-success" style={{ width: "40%" }}></div>
                                    </div>

                                    <div className="progress progress-striped">
                                        <div className="progress-bar progress-bar-warning" style={{ width: "60%" }}></div>
                                    </div>

                                    <div className="progress progress-striped">
                                        <div className="progress-bar progress-bar-danger" style={{ width: "80%" }}></div>
                                    </div>
                                </div>

                                <h3 id="progress-animated">Animated</h3>
                                <div className="bs-component">
                                    <div className="progress progress-striped active">
                                        <div className="progress-bar" style={{ width: "45%" }}></div>
                                    </div>
                                </div>

                                <h3 id="progress-stacked">Stacked</h3>
                                <div className="bs-component">
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-success" style={{ width: "35%" }}></div>
                                        <div className="progress-bar progress-bar-warning" style={{ width: "20%" }}></div>
                                        <div className="progress-bar progress-bar-danger" style={{ width: "10%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bs-docs-section">

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-header">
                                    <h1 id="containers">Containers</h1>
                                </div>
                                <div className="bs-component">
                                    <div className="jumbotron">
                                        <h1>Jumbotron</h1>
                                        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                                        <p><a className="btn btn-primary btn-lg">Learn more</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-lg-12">
                                <h2>List groups</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="bs-component">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <span className="badge">14</span>
                                            Cras justo odio
                </li>
                                        <li className="list-group-item">
                                            <span className="badge">2</span>
                                            Dapibus ac facilisis in
                </li>
                                        <li className="list-group-item">
                                            <span className="badge">1</span>
                                            Morbi leo risus
                </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="bs-component">
                                    <div className="list-group">
                                        <a href="javascript:void(0)" className="list-group-item active">
                                            Cras justo odio
                </a>
                                        <a href="javascript:void(0)" className="list-group-item">Dapibus ac facilisis in
                </a>
                                        <a href="javascript:void(0)" className="list-group-item">Morbi leo risus
                </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="bs-component">
                                    <div className="list-group">
                                        <a href="javascript:void(0)" className="list-group-item">
                                            <h4 className="list-group-item-heading">List group item heading</h4>
                                            <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                        </a>
                                        <a href="javascript:void(0)" className="list-group-item">
                                            <h4 className="list-group-item-heading">List group item heading</h4>
                                            <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-lg-12">
                                <h2>Panels</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="bs-component">
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            Basic panel
                </div>
                                    </div>

                                    <div className="card mb-4">
                                        <div className="panel-heading">Panel heading</div>
                                        <div className="card-body">
                                            Panel content
                </div>
                                    </div>

                                    <div className="card mb-4">
                                        <div className="card-body">
                                            Panel content
                </div>
                                        <div className="panel-footer">Panel footer</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="bs-component">
                                    <div className="panel panel-primary">
                                        <div className="panel-heading">
                                            <h3 className="panel-title">Panel primary</h3>
                                        </div>
                                        <div className="card-body">
                                            Panel content
                </div>
                                    </div>

                                    <div className="panel panel-success">
                                        <div className="panel-heading">
                                            <h3 className="panel-title">Panel success</h3>
                                        </div>
                                        <div className="card-body">
                                            Panel content
                </div>
                                    </div>

                                    <div className="panel panel-warning">
                                        <div className="panel-heading">
                                            <h3 className="panel-title">Panel warning</h3>
                                        </div>
                                        <div className="card-body">
                                            Panel content
                </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="bs-component">
                                    <div className="panel panel-danger">
                                        <div className="panel-heading">
                                            <h3 className="panel-title">Panel danger</h3>
                                        </div>
                                        <div className="card-body">
                                            Panel content
                </div>
                                    </div>

                                    <div className="panel panel-info">
                                        <div className="panel-heading">
                                            <h3 className="panel-title">Panel info</h3>
                                        </div>
                                        <div className="card-body">
                                            Panel content
                </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <h2>Wells</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="bs-component">
                                    <div className="well">
                                        Look, I'm in a well!
              </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="bs-component">
                                    <div className="well well-sm">
                                        Look, I'm in a small well!
              </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="bs-component">
                                    <div className="well well-lg">
                                        Look, I'm in a large well!
              </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bs-docs-section">

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-header">
                                    <h1 id="dialogs">Dialogs</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <h2>Modals</h2>
                                <div className="bs-component">
                                    <div className="modal">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                    <h4 className="modal-title">Modal title</h4>
                                                </div>
                                                <div className="modal-body">
                                                    <p>One fine body…</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h2>Popovers</h2>
                                <div className="bs-component">
                                    <button type="button" className="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Left</button>

                                    <button type="button" className="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Top</button>

                                    <button type="button" className="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Bottom</button>

                                    <button type="button" className="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Right</button>
                                </div>
                                <h2>Tooltips</h2>
                                <div className="bs-component">
                                    <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="" data-original-title="Tooltip on left">Left</button>

                                    <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tooltip on top">Top</button>

                                    <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Tooltip on bottom">Bottom</button>

                                    <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="" data-original-title="Tooltip on right">Right</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="source-modal" className="modal fade">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    <h4 className="modal-title">Source Code</h4>
                                </div>
                                <div className="modal-body">
                                    <pre></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </Page.Body>
            </Page>
        );
    }
}

export default BootstrapDemoPage;