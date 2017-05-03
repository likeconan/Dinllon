import React, { Component } from 'react';
import { List, makeSelectable } from 'material-ui/List';

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
    return class SelectableList extends Component {
        componentWillMount() {
            this.setState({
                selectedIndex: this.props.defaultValue,
            });
        }
        handleRequestChange = (event, index) => {
            this.setState({
                selectedIndex: index,
            });
            if (this.props.selectAction) {
                this.props.selectAction()
            }
        };

        render() {
            return (
                <ComposedComponent
                    value={this.state.selectedIndex}
                    onChange={this.handleRequestChange}
                >
                    {this.props.children}
                </ComposedComponent>
            );
        }
    };
}

SelectableList = wrapState(SelectableList);

export default SelectableList;

