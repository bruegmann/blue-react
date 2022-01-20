import React from "react";
import { Intro } from "../../../index.js";

class IntroDemoPage extends React.Component {
    render() {
        return (
            <Intro logo={require("../branding/b-icon/svg/b-icon.svg")} logoMaxWidth="100px" title="Hier kann eine Begrüßung stehen">
                <form
                    className="form-horizontal"
                    onSubmit={event => {
                        event.preventDefault();
                        localStorage.setItem("signedIn", "true");
                        location.href = "";
                    }}
                >
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Bitte anmelden</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" placeholder="Etwas eingeben" />
                        </div>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary btn-lg">
                            Anmelden
                        </button>
                    </div>
                </form>
            </Intro>
        );
    }
}

export default IntroDemoPage;