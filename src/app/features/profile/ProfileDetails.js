const ProfileDetails = () => {
    return (
        <div className="card mb-5 mb-xl-10" id="kt_profile_details_view">
            {/*begin::Card header*/}
            <div className="card-header cursor-pointer">
                {/*begin::Card title*/}
                <div className="card-title m-0">
                <h3 className="fw-bolder m-0">Profile Details</h3>
                </div>
                {/*end::Card title*/}
                {/*begin::Action*/}
                <a
                href="../../demo2/dist/account/settings.html"
                className="btn btn-primary align-self-center"
                >
                Edit Profile
                </a>
                {/*end::Action*/}
            </div>
            {/*begin::Card header*/}
            {/*begin::Card body*/}
            <div className="card-body p-9">
                {/*begin::Row*/}
                <div className="row mb-7">
                {/*begin::Label*/}
                <label className="col-lg-4 fw-bold text-muted">Full Name</label>
                {/*end::Label*/}
                {/*begin::Col*/}
                <div className="col-lg-8">
                    <span className="fw-bolder fs-6 text-gray-800">Max Smith</span>
                </div>
                {/*end::Col*/}
                </div>
                {/*end::Row*/}
                {/*begin::Input group*/}
                <div className="row mb-7">
                {/*begin::Label*/}
                <label className="col-lg-4 fw-bold text-muted">Company</label>
                {/*end::Label*/}
                {/*begin::Col*/}
                <div className="col-lg-8 fv-row">
                    <span className="fw-bold text-gray-800 fs-6">Keenthemes</span>
                </div>
                {/*end::Col*/}
                </div>
                {/*end::Input group*/}
                {/*begin::Input group*/}
                <div className="row mb-7">
                {/*begin::Label*/}
                <label className="col-lg-4 fw-bold text-muted">
                    Contact Phone
                    <i
                    className="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Phone number must be active"
                    />
                </label>
                {/*end::Label*/}
                {/*begin::Col*/}
                <div className="col-lg-8 d-flex align-items-center">
                    <span className="fw-bolder fs-6 text-gray-800 me-2">
                    044 3276 454 935
                    </span>
                    <span className="badge badge-success">Verified</span>
                </div>
                {/*end::Col*/}
                </div>
                {/*end::Input group*/}
                {/*begin::Input group*/}
                <div className="row mb-7">
                {/*begin::Label*/}
                <label className="col-lg-4 fw-bold text-muted">Company Site</label>
                {/*end::Label*/}
                {/*begin::Col*/}
                <div className="col-lg-8">
                    <a
                    href="#"
                    className="fw-bold fs-6 text-gray-800 text-hover-primary"
                    >
                    keenthemes.com
                    </a>
                </div>
                {/*end::Col*/}
                </div>
                {/*end::Input group*/}
                {/*begin::Input group*/}
                <div className="row mb-7">
                {/*begin::Label*/}
                <label className="col-lg-4 fw-bold text-muted">
                    Country
                    <i
                    className="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Country of origination"
                    />
                </label>
                {/*end::Label*/}
                {/*begin::Col*/}
                <div className="col-lg-8">
                    <span className="fw-bolder fs-6 text-gray-800">Germany</span>
                </div>
                {/*end::Col*/}
                </div>
                {/*end::Input group*/}
                {/*begin::Input group*/}
                <div className="row mb-7">
                {/*begin::Label*/}
                <label className="col-lg-4 fw-bold text-muted">Communication</label>
                {/*end::Label*/}
                {/*begin::Col*/}
                <div className="col-lg-8">
                    <span className="fw-bolder fs-6 text-gray-800">Email, Phone</span>
                </div>
                {/*end::Col*/}
                </div>
                {/*end::Input group*/}
                {/*begin::Input group*/}
                <div className="row mb-10">
                {/*begin::Label*/}
                <label className="col-lg-4 fw-bold text-muted">Allow Changes</label>
                {/*begin::Label*/}
                {/*begin::Label*/}
                <div className="col-lg-8">
                    <span className="fw-bold fs-6 text-gray-800">Yes</span>
                </div>
                {/*begin::Label*/}
                </div>
                {/*end::Input group*/}
            </div>
            {/*end::Card body*/}
            </div>
    )
}

export default ProfileDetails;