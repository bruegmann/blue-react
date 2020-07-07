import React from "react";
import Intro from "../../components/Intro";
import { logo } from "../Global";
import { Link } from "react-router-dom";
import ChevronLeft from "../icons/ChevronLeft";

export const IntroDemoPage = () => (
    <Intro logo={logo} logoMaxWidth="100px" title="Here could be your introduction">
        <form
            className="form-horizontal"
            onSubmit={event => {
                event.preventDefault();
            }}
        >
            <div className="form-group row">
                <label className="col-sm-4 col-form-label">Please sign in</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" placeholder="Enter something" />
                </div>
            </div>

            <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg">
                    Sign in
                </button>
            </div>
        </form>

        <Link to="/component/Intro"><ChevronLeft /> Back to the docs</Link>
    </Intro>
);