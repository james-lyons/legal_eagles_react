import React from 'react';
import AttorneyProfile from '../../components/Profiles/AttorneyProfile/AttorneyProfile';

class AttorneyProfileContainer extends React.Component {
    state = {
        name: "",
        email: "",
        address: "",
        zipcode: "",
        specialties: "",
        edit_email: "",
        edit_password: "",
        edit_address: "",
        edit_zipcode: "",
        edit_specialties: ""
    };

    render() {

        return (
            <>
                <div>hello Attorney Container</div>
                <AttorneyProfile />
            </>
        );
    };
};

export default AttorneyProfileContainer;