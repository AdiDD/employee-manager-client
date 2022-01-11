import Activities from "./Activities";
import ProfileDetails from "./ProfileDetails";
import ProfileHeader from "./ProfileHeader";

const ProfilePage = () => {
    return (
    <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start container-xxl"
        >
        {/*begin::Post*/}
        <div className="content flex-row-fluid" id="kt_content">
            <ProfileHeader />
            <ProfileDetails />            
            {/*begin::Row*/}
            <div className="row gy-5 gx-xl-10">
            {/*begin::Col*/}
            <div className="col-xl-6">
                <Activities />                
            </div>
            {/*end::Col*/}
            {/*begin::Col*/}
            <div className="col-xl-6">
                <Activities />                
            </div>
            {/*end::Col*/}
            </div>
            {/*end::Row*/}
        </div>
        {/*end::Post*/}
        </div>

    )
}

export default ProfilePage;