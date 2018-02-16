// HIGHER ORDER COMPONENT - hoc
// A component (HOC) that renders another component
// Reuse Code
// Render Hijacking
// Prop manipulation
// Abstract State

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <p>This is some info -> {props.info}</p>
        </div>
    )
};

const withAdminWarning = (WrappedComponent) => {
    // return higher order component
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a private info. Please dont share</p>}
            <WrappedComponent {...props} />
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? 
                <WrappedComponent {...props} /> :
                <p>PLease login to continue</p>
            }
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
// ReactDOM.render(<AdminInfo isAdmin={false} info="Information" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="Information" />, document.getElementById('app'));