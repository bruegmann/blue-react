import React from "react";
import PropTypes from "prop-types";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

class SimpleButtonDropdown extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    {this.props.title}
                </DropdownToggle>

                {this.props.dropDownMenu}
            </ButtonDropdown>
        );
    }
}

SimpleButtonDropdown.propTypes = {
    title: PropTypes.string,
    dropDownMenu: PropTypes.any
};

export default SimpleButtonDropdown;