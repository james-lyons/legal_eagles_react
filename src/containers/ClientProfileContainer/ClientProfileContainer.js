import React from 'react';
import ClientProfile from '../../components/Profiles/ClientProfile/ClientProfile';

class ClientProfileContainer extends React.Component {
    state = {
        name: "",
        email: "",
        edit_email: "",
        edit_password: "",
    };

    render() {

        return (
            <>
                <div>hello Client Container</div>
                <ClientProfile />
            </>
        );
    };
};

export default ClientProfileContainer;